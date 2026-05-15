<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About - HerbalGlow</title>
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
      <li><a href="about.php" class="active">About</a></li>
      <li><a href="blog.php">Blog</a></li>
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
  <h1>About Us</h1>
  <p>Home / About</p>
</section>

<section class="about-page">
  <div class="about-hero">
    <div class="about-text" data-aos="fade-right">
      <h2>Natural Beauty, Naturally Delivered</h2>
      <p>HerbalGlow is a trusted skincare brand dedicated to natural beauty. We provide herbal skincare products made with safe ingredients to help customers achieve glowing healthy skin. Our mission is purity, quality and confidence through nature. We believe skincare should be safe, affordable and effective for everyone.</p>
      <p>Founded with a vision to bring nature's best to your daily skincare routine, HerbalGlow has grown from a small passion project into a beloved brand trusted by thousands. Every product is carefully crafted using time-tested herbal formulations combined with modern skincare science.</p>
      <blockquote>"Our mission is purity, quality and confidence through nature."</blockquote>
      <div class="about-stat"><span>2000+</span> Happy Customers</div>
    </div>
    <div class="about-image" data-aos="fade-left">
      <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600" alt="HerbalGlow Products" loading="lazy">
    </div>
  </div>

  <div class="values-section">
    <h2>Our Values</h2>
    <p>The principles that guide everything we do</p>
    <div class="values-grid">
      <div class="value-card" data-aos="zoom-in">
        <span>🌿</span><h3>Purity</h3>
        <p>Only the purest natural ingredients make it into our products. No compromises.</p>
      </div>
      <div class="value-card" data-aos="zoom-in" data-aos-delay="100">
        <span>⭐</span><h3>Quality</h3>
        <p>Every batch is tested and verified to meet our premium quality standards.</p>
      </div>
      <div class="value-card" data-aos="zoom-in" data-aos-delay="200">
        <span>💪</span><h3>Confidence</h3>
        <p>We empower you to feel confident in your own naturally beautiful skin.</p>
      </div>
      <div class="value-card" data-aos="zoom-in" data-aos-delay="300">
        <span>🌍</span><h3>Sustainability</h3>
        <p>Eco-friendly packaging and responsibly sourced ingredients always.</p>
      </div>
    </div>
  </div>

  <div class="contact-cta">
    <h2>Get In Touch</h2>
    <p>📧 ShifaSaeedAWKUM@gmail.com</p>
    <p>📞 03xxxxxxx76</p>
  </div>
</section>

<footer>
  <div class="footer-content">
    <div class="footer-col">
      <h3>🌿 HerbalGlow</h3>
      <p>Premium herbal skincare products made with natural ingredients.</p>
      <div class="social-links">
        <a href="#">📘 Facebook</a> <a href="#">📸 Instagram</a> <a href="#">🐦 Twitter</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html">Home</a></li><li><a href="products.html">Products</a></li><li><a href="about.html">About</a></li><li><a href="blog.html">Blog</a></li><li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact Us</h4>
      <p>📧 ShifaSaeedAWKUM@gmail.com</p><p>📞 03xxxxxxx76</p>
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