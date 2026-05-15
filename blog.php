<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Blog - HerbalGlow</title>
<link rel="stylesheet" href="style.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

<header>
<div class="navbar">
  <h2 class="logo">🌿 HerbalGlow</h2>
  <nav>
    <ul class="nav-links">
      <li><a href="index.php">Home</a></li>
      <li><a href="products.php">Products</a></li>
      <li><a href="about.php">About</a></li>
      <li><a href="blog.php" class="active">Blog</a></li>
      <li><a href="contact.php">Contact</a></li>
    </ul>
  </nav>
  <div class="nav-icons">
    <div class="cart-icon" onclick="showCart()">🛒 <span id="cartCount">0</span></div>
    <span class="hamburger" onclick="toggleMenu()">☰</span>
  </div>
</div>
</header>

<div class="cart-sidebar" id="cartSidebar">
  <div class="cart-header"><h3>Your Cart 🛒</h3><span onclick="closeCart()" style="cursor:pointer;font-size:22px;">✕</span></div>
  <div class="cart-items" id="cartItems"><p style="color:#aaa;text-align:center;margin-top:40px;">Your cart is empty</p></div>
  <div class="cart-total" id="cartTotal" style="display:none;"><strong>Total: Rs. <span id="totalPrice">0</span></strong><button onclick="checkout()">Checkout</button></div>
</div>
<div class="overlay" id="overlay" onclick="closeCart()"></div>

<section class="page-header">
  <h1>Our Blog</h1>
  <p>Home / Blog</p>
</section>

<section class="blog-page">
  <div class="blog-grid-full">
    <div class="blog-card" data-aos="fade-up">
      <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600" alt="Skincare Routine" loading="lazy">
      <div class="blog-card-content">
        <h3>5 Steps Daily Skin Care Routine</h3>
        <p>Discover the essential 5-step skincare routine that dermatologists recommend for healthy, glowing skin. From cleansing to moisturizing, we cover it all.</p>
        <span>Dr. Amrita Patel • 5 min read</span>
        <small>April 15, 2025</small>
      </div>
    </div>
    <div class="blog-card" data-aos="fade-up">
      <img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600" alt="Herbal Products" loading="lazy">
      <div class="blog-card-content">
        <h3>Why Herbal Products Are Better</h3>
        <p>Learn why switching to herbal skincare products can transform your skin health with safe, natural, and time-tested ingredients.</p>
        <span>Sarah Johnson • 7 min read</span>
        <small>April 10, 2025</small>
      </div>
    </div>
    <div class="blog-card" data-aos="fade-up">
      <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600" alt="Summer Skincare" loading="lazy">
      <div class="blog-card-content">
        <h3>Top Summer Skin Care Tips</h3>
        <p>Protect your skin this summer with these expert tips on hydration, sun protection, and maintaining a healthy glow in hot weather.</p>
        <span>Dr. Rajesh Gupta • 4 min read</span>
        <small>April 5, 2025</small>
      </div>
    </div>
    <div class="blog-card" data-aos="fade-up">
      <img src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=600" alt="Sunscreen Importance" loading="lazy">
      <div class="blog-card-content">
        <h3>Importance of Sunscreen</h3>
        <p>Sunscreen is your skin's best defense. Understand why daily SPF application is non-negotiable for preventing premature aging and skin damage.</p>
        <span>Dr. Priya Mathur • 6 min read</span>
        <small>March 28, 2025</small>
      </div>
    </div>
    <div class="blog-card" data-aos="fade-up">
      <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600" alt="Acne Treatment" loading="lazy">
      <div class="blog-card-content">
        <h3>How To Remove Acne Naturally</h3>
        <p>Say goodbye to acne with natural remedies and herbal treatments that work. Learn the proven methods for clear, blemish-free skin.</p>
        <span>Dr. Lisa Chen • 8 min read</span>
        <small>March 20, 2025</small>
      </div>
    </div>
    <div class="blog-card" data-aos="fade-up">
      <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600" alt="Natural Ingredients" loading="lazy">
      <div class="blog-card-content">
        <h3>Benefits of Aloe Vera For Skin</h3>
        <p>Aloe vera is nature's miracle plant for skin. Discover the amazing benefits and how to incorporate it into your daily routine.</p>
        <span>Sarah Johnson • 5 min read</span>
        <small>March 15, 2025</small>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="footer-content">
    <div class="footer-col">
      <h3>🌿 HerbalGlow</h3><p>Premium herbal skincare products made with natural ingredients.</p>
      <div class="social-links"><a href="#">📘 Facebook</a> <a href="#">📸 Instagram</a> <a href="#">🐦 Twitter</a></div>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul><li><a href="index.html">Home</a></li><li><a href="products.html">Products</a></li><li><a href="about.html">About</a></li><li><a href="blog.html">Blog</a></li><li><a href="contact.html">Contact</a></li></ul>
    </div>
    <div class="footer-col">
      <h4>Contact Us</h4><p>📧 ShifaSaeedAWKUM@gmail.com</p><p>📞 03xxxxxxx76</p>
    </div>
    <div class="footer-col">
      <h4>Stay Updated</h4>
      <form class="footer-newsletter" onsubmit="subscribe(event)">
        <input type="email" placeholder="Your email" required><button type="submit">→</button>
      </form>
    </div>
  </div>
  <div class="footer-bottom"><p>© 2026 HerbalGlow. All rights reserved. | Glow Naturally 🌿</p></div>
</footer>

<script src="script.js"></script>
</body>
</html>