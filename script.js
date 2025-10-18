document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on a reader page by looking for the content element
    const content = document.getElementById('novel-content');
    if (!content) return; 

    // --- Element Selection for Reader Page ---
    const settingsToggleBtn = document.getElementById('settings-toggle-btn');
    const settingsPanel = document.getElementById('settings-panel');
    
    const fontBtns = document.querySelectorAll('.font-btn');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const fontSizeDisplay = document.getElementById('font-size-display');
    const increaseLeadingBtn = document.getElementById('increase-leading');
    const decreaseLeadingBtn = document.getElementById('decrease-leading');
    const leadingDisplay = document.getElementById('leading-display');

    // --- State Management ---
    let settings = {
        fontFamily: 'Jost',
        fontSize: 18,
        lineHeight: 1.8
    };

    // --- Functions ---
    const applySettings = () => {
        document.body.style.fontFamily = `var(--font-${settings.fontFamily.toLowerCase()}), sans-serif`;
        content.style.fontSize = `${settings.fontSize}px`;
        content.style.lineHeight = settings.lineHeight;
        
        if (fontSizeDisplay) fontSizeDisplay.textContent = settings.fontSize;
        if (leadingDisplay) leadingDisplay.textContent = settings.lineHeight.toFixed(1);
        updateActiveButtons();
    };

    const saveSettings = () => {
        localStorage.setItem('webnovelSettingsV2', JSON.stringify(settings));
    };

    const loadSettings = () => {
        const savedSettings = localStorage.getItem('webnovelSettingsV2');
        if (savedSettings) {
            settings = { ...settings, ...JSON.parse(savedSettings) };
        }
        applySettings();
    };

    const updateActiveButtons = () => {
        fontBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.font === settings.fontFamily);
        });
    };

    // --- Event Listeners ---
    
    // NEW: Logic for the slide-out panel toggle
    if (settingsToggleBtn && settingsPanel) {
        settingsToggleBtn.addEventListener('click', () => {
            settingsPanel.classList.toggle('active');
        });
    }

    fontBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            settings.fontFamily = btn.dataset.font;
            applySettings();
            saveSettings();
        });
    });
    
    if(increaseFontBtn) increaseFontBtn.addEventListener('click', () => { if(settings.fontSize < 32) { settings.fontSize += 2; applySettings(); saveSettings(); } });
    if(decreaseFontBtn) decreaseFontBtn.addEventListener('click', () => { if(settings.fontSize > 12) { settings.fontSize -= 2; applySettings(); saveSettings(); } });
    if(increaseLeadingBtn) increaseLeadingBtn.addEventListener('click', () => { if(settings.lineHeight < 2.5) { settings.lineHeight = parseFloat((settings.lineHeight + 0.1).toFixed(1)); applySettings(); saveSettings(); } });
    if(decreaseLeadingBtn) decreaseLeadingBtn.addEventListener('click', () => { if(settings.lineHeight > 1.2) { settings.lineHeight = parseFloat((settings.lineHeight - 0.1).toFixed(1)); applySettings(); saveSettings(); } });

    // --- Initial Load ---
    loadSettings();
});