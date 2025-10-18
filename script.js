document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('novel-content');
    if (!content) return; 

    const fontBtns = document.querySelectorAll('.font-btn');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const fontSizeDisplay = document.getElementById('font-size-display');
    const increaseLeadingBtn = document.getElementById('increase-leading');
    const decreaseLeadingBtn = document.getElementById('decrease-leading');
    const leadingDisplay = document.getElementById('leading-display');

    let settings = {
        fontFamily: 'Jost',
        fontSize: 18,
        lineHeight: 1.8
    };

    const applySettings = () => {
        document.body.style.fontFamily = `var(--font-${settings.fontFamily.toLowerCase()}), sans-serif`;
        content.style.fontSize = `${settings.fontSize}px`;
        content.style.lineHeight = settings.lineHeight;
        
        fontSizeDisplay.textContent = settings.fontSize;
        leadingDisplay.textContent = settings.lineHeight.toFixed(1);
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

    fontBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            settings.fontFamily = btn.dataset.font;
            applySettings();
            saveSettings();
        });
    });
    
    increaseFontBtn.addEventListener('click', () => { if(settings.fontSize < 32) { settings.fontSize += 2; applySettings(); saveSettings(); } });
    decreaseFontBtn.addEventListener('click', () => { if(settings.fontSize > 12) { settings.fontSize -= 2; applySettings(); saveSettings(); } });
    increaseLeadingBtn.addEventListener('click', () => { if(settings.lineHeight < 2.5) { settings.lineHeight = parseFloat((settings.lineHeight + 0.1).toFixed(1)); applySettings(); saveSettings(); } });
    decreaseLeadingBtn.addEventListener('click', () => { if(settings.lineHeight > 1.2) { settings.lineHeight = parseFloat((settings.lineHeight - 0.1).toFixed(1)); applySettings(); saveSettings(); } });

    loadSettings();
});