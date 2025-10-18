<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My Novels Library</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
    <style>
        body {
            background-color: #f8f9fa; /* Light grey background */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .navbar {
            box-shadow: 0 2px 4px rgba(0,0,0,.1);
        }
        .library-header {
            background: url('https://source.unsplash.com/1600x400/?library,books') no-repeat center center;
            background-size: cover;
            color: white;
            padding: 5rem 0;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        }
        .book-card {
            transition: transform 0.3s, box-shadow 0.3s;
            border: none;
        }
        .book-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,.15);
        }
        .card-img-top {
            height: 350px;
            object-fit: cover;
        }
        footer {
            background-color: #343a40;
            color: white;
            padding: 2rem 0;
            margin-top: 4rem;
        }
    </style>
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">📚 My Novels Library</a>
        </div>
    </nav>

    <header class="library-header text-center">
        <div class="container">
            <h1 class="display-4">Welcome to the Library</h1>
            <p class="lead">A curated collection of your favorite novels.</p>
        </div>
    </header>

    <main class="container my-5">
        <h2 class="text-center mb-5">Available Novels</h2>
        <div class="row">

            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card book-card h-100 shadow-sm">
                    <img src="novels/the-legend-of-the-northern-blade/cover.jpg" class="card-img-top" alt="The Legend of the Northern Blade Cover">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">The Legend of the Northern Blade</h5>
                        <p class="card-text text-muted">A warrior's quest for truth and vengeance in a world of martial arts.</p>
                        <a href="novels/the-legend-of-the-northern-blade/index.html" class="btn btn-primary mt-auto">Read Now</a>
                    </div>
                </div>
            </div>

            </div>
    </main>

    <footer>
        <div class="container text-center">
            <p>&copy; 2025 My Novels Library. All rights reserved.</p>
        </div>
    </footer>

</body>
</html>