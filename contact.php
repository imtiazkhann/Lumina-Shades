<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact - HerbalGlow</title>
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
      <li><a href="blog.php">Blog</a></li>
      <li><a href="contact.php" class="active">Contact</a></li>
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
  <h1>Contact Us</h1>
  <p>Home / Contact</p>
</section>

<section class="contact-page">
  <div class="contact-container">
    <div class="contact-info" data-aos="fade-right">
      <h2>Get In Touch</h2>
      <p>We would love to hear from you. Whether you have a question about our products, need skincare advice, or just want to say hello.</p>
      <div class="contact-details">
        <div class="contact-item"><span>📧</span><div><h4>Email</h4><p>ShifaSaeedAWKUM@gmail.com</p></div></div>
        <div class="contact-item"><span>📞</span><div><h4>Phone</h4><p>03xxxxxxx76</p></div></div>
        <div class="contact-item"><span>📍</span><div><h4>Location</h4><p>Pakistan</p></div></div>
      </div>
      <div class="social-links-contact">
        <h4>Follow Us</h4>
        <a href="#">📘 Facebook</a> <a href="#">📸 Instagram</a> <a href="#">🐦 Twitter</a>
      </div>
    </div>
    <div class="contact-form" data-aos="fade-left">
      <form onsubmit="sendMessage(event)">
        <label>Name</label>
        <input type="text" placeholder="Your name" required>
        <label>Email</label>
        <input type="email" placeholder="Your email" required>
        <label>Phone</label>
        <input type="tel" placeholder="Your phone number">
        <label>Message</label>
        <textarea placeholder="How can we help you?" rows="5" required></textarea>
        <button type="submit" class="btn btn-primary">Send Message →</button>
      </form>
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