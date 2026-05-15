<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Products - HerbalGlow</title>
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
      <li><a href="products.php" class="active">Products</a></li>
      <li><a href="about.php">About</a></li>
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

<!-- CART SIDEBAR -->
<div class="cart-sidebar" id="cartSidebar">
  <div class="cart-header"><h3>Your Cart 🛒</h3><span onclick="closeCart()" style="cursor:pointer;font-size:22px;">✕</span></div>
  <div class="cart-items" id="cartItems"><p style="color:#aaa;text-align:center;margin-top:40px;">Your cart is empty</p></div>
  <div class="cart-total" id="cartTotal" style="display:none;"><strong>Total: Rs. <span id="totalPrice">0</span></strong><button onclick="checkout()">Checkout</button></div>
</div>
<div class="overlay" id="overlay" onclick="closeCart()"></div>

<!-- PAGE HEADER -->
<section class="page-header">
  <h1>Our Products</h1>
  <p>Home / Products</p>
</section>

<!-- PRODUCTS WITH SIDEBAR -->
<section class="products-page">
  <div class="sidebar">
    <h3>Filter By Category</h3>
    <ul class="filter-list">
      <li><button class="filter-btn active" onclick="filterProducts('all')">All Products</button></li>
      <li><button class="filter-btn" onclick="filterProducts('face')">Face Wash</button></li>
      <li><button class="filter-btn" onclick="filterProducts('cream')">Herbal Cream</button></li>
      <li><button class="filter-btn" onclick="filterProducts('moisturizer')">Moisturizer</button></li>
      <li><button class="filter-btn" onclick="filterProducts('sun')">Sunscreen</button></li>
      <li><button class="filter-btn" onclick="filterProducts('serum')">Serum</button></li>
      <li><button class="filter-btn" onclick="filterProducts('acne')">Acne Care</button></li>
      <li><button class="filter-btn" onclick="filterProducts('dry')">Dry Skin Care</button></li>
      <li><button class="filter-btn" onclick="filterProducts('oily')">Oily Skin Care</button></li>
      <li><button class="filter-btn" onclick="filterProducts('men')">Men Skin Care</button></li>
      <li><button class="filter-btn" onclick="filterProducts('women')">Women Beauty Care</button></li>
    </ul>

    <h3>Price Range</h3>
    <input type="range" min="0" max="2000" value="2000" step="100" id="priceRange" oninput="filterByPrice(this.value)">
    <p>0 — Rs. <span id="priceValue">2000</span></p>

    <h3>Skin Type</h3>
    <ul class="filter-list">
      <li><label><input type="checkbox" onchange="filterSkinType()"> Dry</label></li>
      <li><label><input type="checkbox" onchange="filterSkinType()"> Oily</label></li>
      <li><label><input type="checkbox" onchange="filterSkinType()"> Combination</label></li>
      <li><label><input type="checkbox" onchange="filterSkinType()"> Sensitive</label></li>
    </ul>
  </div>

  <div class="products-grid">
    <div class="product-card face" data-aos="fade-up">
      <span class="badge bestseller">BESTSELLER</span>
      <img src="https://placehold.co/400x400/e8f5e9/2d6a4f?text=Herbal+Face+Wash" alt="Herbal Face Wash" loading="lazy">
      <h3>Herbal Face Wash</h3>
      <div class="rating">★★★★☆ <small>(234)</small></div>
      <p><span class="sale-price">Rs. 799</span> <span class="original-price">Rs. 999</span></p>
      <button onclick="addToCart('Herbal Face Wash', 799, 'https://placehold.co/400x400/e8f5e9/2d6a4f?text=Herbal+Face+Wash')">Add to Cart</button>
    </div>
    <div class="product-card cream" data-aos="fade-up">
      <span class="badge new">NEW</span>
      <img src="https://placehold.co/400x400/f0fdf4/1b4332?text=Aloe+Vera+Gel" alt="Aloe Vera Gel" loading="lazy">
      <h3>Aloe Vera Gel</h3>
      <div class="rating">★★★★☆ <small>(142)</small></div>
      <p><span class="sale-price">Rs. 599</span> <span class="original-price">Rs. 749</span></p>
      <button onclick="addToCart('Aloe Vera Gel', 599, 'https://placehold.co/400x400/f0fdf4/1b4332?text=Aloe+Vera+Gel')">Add to Cart</button>
    </div>
    <div class="product-card serum" data-aos="fade-up">
      <span class="badge premium">PREMIUM</span>
      <img src="https://placehold.co/400x400/fff7ed/f4a261?text=Vitamin+C+Serum" alt="Vitamin C Serum" loading="lazy">
      <h3>Vitamin C Serum</h3>
      <div class="rating">★★★★★ <small>(189)</small></div>
      <p><span class="sale-price">Rs. 1,499</span> <span class="original-price">Rs. 1,899</span></p>
      <button onclick="addToCart('Vitamin C Serum', 1499, 'https://placehold.co/400x400/fff7ed/f4a261?text=Vitamin+C+Serum')">Add to Cart</button>
    </div>
    <div class="product-card sun" data-aos="fade-up">
      <span class="badge bestseller">HOT</span>
      <img src="https://placehold.co/400x400/fffbeb/f59e0b?text=Sunscreen+SPF+50" alt="Sunscreen SPF 50" loading="lazy">
      <h3>Sunscreen SPF 50</h3>
      <div class="rating">★★★★★ <small>(356)</small></div>
      <p><span class="sale-price">Rs. 1,299</span> <span class="original-price">Rs. 1,599</span></p>
      <button onclick="addToCart('Sunscreen SPF 50', 1299, 'https://placehold.co/400x400/fffbeb/f59e0b?text=Sunscreen+SPF+50')">Add to Cart</button>
    </div>
    <div class="product-card moisturizer" data-aos="fade-up">
      <img src="https://placehold.co/400x400/e8f5e9/2d6a4f?text=Herbal+Moisturizer" alt="Herbal Moisturizer" loading="lazy">
      <h3>Herbal Moisturizer</h3>
      <div class="rating">★★★★☆ <small>(278)</small></div>
      <p><span class="sale-price">Rs. 999</span> <span class="original-price">Rs. 1,199</span></p>
      <button onclick="addToCart('Herbal Moisturizer', 999, 'https://placehold.co/400x400/e8f5e9/2d6a4f?text=Herbal+Moisturizer')">Add to Cart</button>
    </div>
    <div class="product-card acne" data-aos="fade-up">
      <span class="badge new">POPULAR</span>
      <img src="https://placehold.co/400x400/fef2f2/e63946?text=Acne+Care+Cream" alt="Acne Care Cream" loading="lazy">
      <h3>Acne Care Cream</h3>
      <div class="rating">★★★★☆ <small>(167)</small></div>
      <p><span class="sale-price">Rs. 899</span> <span class="original-price">Rs. 1,099</span></p>
      <button onclick="addToCart('Acne Care Cream', 899, 'https://placehold.co/400x400/fef2f2/e63946?text=Acne+Care+Cream')">Add to Cart</button>
    </div>
    <div class="product-card face" data-aos="fade-up">
      <img src="https://placehold.co/400x400/e8f5e9/2d6a4f?text=Neem+Face+Wash" alt="Neem Face Wash" loading="lazy">
      <h3>Neem Face Wash</h3>
      <div class="rating">★★★★☆ <small>(98)</small></div>
      <p><span class="sale-price">Rs. 649</span></p>
      <button onclick="addToCart('Neem Face Wash', 649, 'https://placehold.co/400x400/e8f5e9/2d6a4f?text=Neem+Face+Wash')">Add to Cart</button>
    </div>
    <div class="product-card cream" data-aos="fade-up">
      <img src="https://placehold.co/400x400/f0fdf4/1b4332?text=Night+Repair+Cream" alt="Night Repair Cream" loading="lazy">
      <h3>Night Repair Cream</h3>
      <div class="rating">★★★★★ <small>(203)</small></div>
      <p><span class="sale-price">Rs. 1,199</span> <span class="original-price">Rs. 1,499</span></p>
      <button onclick="addToCart('Night Repair Cream', 1199, 'https://placehold.co/400x400/f0fdf4/1b4332?text=Night+Repair+Cream')">Add to Cart</button>
    </div>
    <div class="product-card sun" data-aos="fade-up">
      <img src="https://placehold.co/400x400/fffbeb/f59e0b?text=Sunscreen+Spray" alt="Sunscreen Spray" loading="lazy">
      <h3>Sunscreen Spray SPF 30</h3>
      <div class="rating">★★★★☆ <small>(145)</small></div>
      <p><span class="sale-price">Rs. 1,099</span></p>
      <button onclick="addToCart('Sunscreen Spray SPF 30', 1099, 'https://placehold.co/400x400/fffbeb/f59e0b?text=Sunscreen+Spray')">Add to Cart</button>
    </div>
  </div>
</section>

<!-- FOOTER -->
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
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact Us</h4>
      <p>📧 ShifaSaeedAWKUM@gmail.com</p>
      <p>📞 03xxxxxxx76</p>
    </div>
    <div class="footer-col">
      <h4>Stay Updated</h4>
      <form class="footer-newsletter" onsubmit="subscribe(event)">
        <input type="email" placeholder="Your email" required>
        <button type="submit">→</button>
      </form>
    </div>
  </div>
  <div class="footer-bottom"><p>© 2026 HerbalGlow. All rights reserved. | Glow Naturally 🌿</p></div>
</footer>

<script src="script.js"></script>
</body>
</html>