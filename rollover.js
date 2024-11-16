
sports-training.html:
<!DOCTYPE html>
<html lang="en">

<head>

    <title>Sports Training</title>
    <link rel="stylesheet" href="services.css">
    <link rel="stylesheet" href="home.css">
</head>

<body>





    <!-- Navbar -->
    <nav class="navbar">
        <div class="logo"><a href="home.html"><img src="images/home/logo.png" alt="Business Logo"></a></div>
        <ul class="nav-links">
            <li><a href="home.html">Home</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li>
                <div class="dropdown">
                    <button class="dropbtn">Services
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="yoga.html">Yoga</a>
                        <a href="bootcamp.html">Bootcamp</a>
                        <a href="sports-training.html">Sports</a>
                    </div>
                </div>
            </li>
        </ul>
    </nav>

    <!-- Full-Screen Video Section -->
    <div class="video-section">
        <video class="fullscreen-video" autoplay muted loop>
            <source src="videos/services/sports-training.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="overlay"></div>
        <div class="overlay-text">
            <h2>Sports Training</h2>
        </div>
    </div>

    <!-- Sports Training Variant Section with New Heading -->
    <div class="sports-variants-section">

        <!-- Container for Sports Variants -->

        <div class="sports-container">
            <!-- Variant 1: Cycling -->
            <div class="sports-variant">
                <img src="images/service images/sports/cycling.jpg" alt="Cycling Sessions" class="sports-image">
                <h3>Cycling</h3>
                <p>Take your cycling skills to the next level with our high-intensity cycling training programs.</p>
            </div>

            <!-- Variant 2: Running -->
            <div class="sports-variant">
                <img src="images/service images/sports/running.jpg" alt="Running Sessions" class="sports-image">
                <!-- Replace with actual image path -->
                <h3>Running</h3>
                <p>Our running programs focus on stamina, endurance, and overall fitness improvement.</p>
            </div>

            <!-- Variant 3: Triathlon -->
            <div class="sports-variant">
                <img src="images/service images/sports/triathlon.jpg" alt="Triathlon Sessions" class="sports-image">
                <!-- Replace with actual image path -->
                <h3>Triathlon</h3>
                <p>Challenge yourself with our specialized triathlon training that covers cycling, running, and
                    swimming.</p>
            </div>

            <!-- Variant 4: Volleyball -->
            <div class="sports-variant">
                <img src="images/service images/sports/volleyball.jpg" alt="Volleyball Sessions" class="sports-image">
                <!-- Replace with actual image path -->
                <h3>Volleyball</h3>
                <p>Build teamwork and agility in our competitive volleyball training sessions.</p>
            </div>
        </div>
    </div>
    <!-- Pricing Section -->
    <div class="care-pricing-section">
        <div class="care-content">
            <h3>We Care For You</h3>
            <p>Our Sports Training programs are designed to help you achieve your fitness goals while ensuring your
                health and safety. <span class="discount-info">*We provide a 25% discount on all services for our
                    superheroes with disabilities.</span></p>
        </div>

        <div class="pricing-table">
            <h2>Pricing Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Plan</th>
                        <th>Weekly</th>
                        <th>Monthly</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cycling</td>
                        <td>$200</td>
                        <td>$700</td>
                    </tr>
                    <tr>
                        <td>Running</td>
                        <td>$180</td>
                        <td>$650</td>
                    </tr>
                    <tr>
                        <td>Triathlon</td>
                        <td>$250</td>
                        <td>$900</td>
                    </tr>
                    <tr>
                        <td>Volleyball</td>
                        <td>$150</td>
                        <td>$550</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


    <!-- Footer -->
    <footer class="footer-container">
        <div class="newsletter">
            <h3>Join our Fitness Newsletter</h3>
            <form class="newsletter-form" action="#" method="post">
                <input type="email" placeholder="Enter your email" aria-label="Newsletter Signup" required>
                <button type="submit">Subscribe</button>
            </form>
        </div>
        <hr>
        <div class="footer-content">
            <div class="footer-section">
                <p>Services</p>
                <ul>
                    <li><a href="#">Personal Training</a></li>
                    <li><a href="#">Nutrition Plans</a></li>
                    <li><a href="#">Online Coaching</a></li>
                    <li><a href="#">Fitness Assessments</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <p>About</p>
                <ul>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Success Stories</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">FAQs</a></li>
                </ul>
            </div>
            <div class="footer-section social-media">
                <p>Follow Us</p>
                <div class="social-icons">
                    <a href="#"><img src="images/home/icons8-facebook.svg" alt="Facebook"></a>
                    <a href="#"><img src="images/home/icons8-instagram.svg" alt="Instagram"></a>
                    <a href="#"><img src="images/home/icons8-whatsapp.svg" alt="YouTube"></a>
                </div>
            </div>
        </div>
        <hr>
        <div class="footer-bottom">
            <span class="branding">PERSONAL TRAINING</span>
            <span>STRIVEX</span>
        </div>
    </footer>

</body>

</html>
