* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html { scroll-behavior: smooth; }

body {
  background: #fdfdfd;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
}

/* ========== NAVBAR ========== */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 60px;
  background: rgba(255,255,255,0.97);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  backdrop-filter: blur(10px);
  transition: 0.3s;
}

.logo {
  font-size: 26px;
  font-weight: 700;
  color: #2d6a4f;
  letter-spacing: -1px;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 30px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  font-size: 15px;
  transition: 0.3s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #2d6a4f;
  transition: 0.3s;
}

.nav-links a:hover::after,
.nav-links a.active::after { width: 100%; }

.nav-links a:hover,
.nav-links a.active { color: #2d6a4f; }

.nav-icons {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
}

.cart-icon {
  position: relative;
  cursor: pointer;
  transition: 0.3s;
}

.cart-icon:hover { transform: scale(1.1); }

#cartCount {
  position: absolute;
  top: -8px;
  right: -12px;
  background: #e63946;
  color: white;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 50%;
  font-weight: 600;
}

.hamburger { display: none; font-size: 24px; cursor: pointer; }

/* ========== CART SIDEBAR ========== */
.cart-sidebar {
  position: fixed;
  top: 0;
  right: -400px;
  width: 380px;
  height: 100vh;
  background: white;
  z-index: 2000;
  box-shadow: -5px 0 30px rgba(0,0,0,0.15);
  transition: 0.4s ease;
  display: flex;
  flex-direction: column;
}

.cart-sidebar.open { right: 0; }

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.cart-item {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
}

.cart-item img { width: 60px; height: 60px; border-radius: 8px; object-fit: cover; }
.cart-item-info { flex: 1; }
.cart-item-info h4 { font-size: 14px; }
.cart-item-info p { font-size: 13px; color: #2d6a4f; font-weight: 600; }
.cart-item-remove { color: #e63946; cursor: pointer; font-size: 18px; }

.cart-total {
  padding: 20px;
  border-top: 2px solid #eee;
  text-align: center;
}

.cart-total button {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  background: #2d6a4f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: 0.3s;
}

.cart-total button:hover { background: #1b4332; }

.overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1500;
  display: none;
}

.overlay.show { display: block; }

/* ========== PAGE HEADER ========== */
.page-header {
  padding: 130px 20px 50px;
  text-align: center;
  background: linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%);
}

.page-header h1 {
  font-size: 40px;
  color: #1b4332;
  margin-bottom: 5px;
}

.page-header p { color: #888; font-size: 14px; }

/* ========== HERO ========== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #e8f5e9 0%, #ffffff 50%, #f1f8e9 100%);
  padding: 120px 20px 60px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%);
  top: -100px; right: -100px;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.hero::after {
  content: '';
  position: absolute;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(45,106,79,0.06) 0%, transparent 70%);
  bottom: -50px; left: -50px;
  border-radius: 50%;
  animation: float 8s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

.hero-content {
  max-width: 750px;
  position: relative;
  z-index: 1;
  animation: fadeInUp 1s ease;
}

.hero h1 {
  font-size: 56px;
  font-weight: 700;
  color: #1b4332;
  margin-bottom: 15px;
  line-height: 1.15;
}

.hero p {
  font-size: 17px;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.7;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.btn {
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}

.btn-primary {
  background: #2d6a4f;
  color: white;
}

.btn-primary:hover {
  background: #1b4332;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(45,106,79,0.35);
}

.btn-outline {
  border-color: #2d6a4f;
  color: #2d6a4f;
  background: transparent;
}

.btn-outline:hover {
  background: #2d6a4f;
  color: white;
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
}

.stat {
  font-size: 14px;
  color: #555;
  font-weight: 500;
  text-align: center;
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  color: #2d6a4f;
}

/* ========== CATEGORIES ========== */
.categories {
  padding: 80px 60px;
  text-align: center;
}

.categories h2 {
  font-size: 36px;
  color: #1b4332;
  margin-bottom: 10px;
}

.categories > p { color: #666; margin-bottom: 45px; font-size: 15px; }

.category-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  max-width: 1100px;
  margin: auto;
}

.cat-card {
  background: #f9faf9;
  padding: 35px 15px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e8e8e8;
}

.cat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border-color: #2d6a4f;
  background: white;
}

.cat-card span { font-size: 42px; display: block; margin-bottom: 12px; }
.cat-card h3 { font-size: 15px; color: #333; margin-bottom: 5px; }
.cat-card p { font-size: 13px; color: #888; }

/* ========== BESTSELLERS / PRODUCT GRID ========== */
.bestsellers {
  padding: 80px 60px;
  background: #fafdfa;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto 45px;
}

.section-header h2 { font-size: 36px; color: #1b4332; }

.view-all {
  color: #2d6a4f;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  transition: 0.3s;
}

.view-all:hover { color: #1b4332; text-decoration: underline; }

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  max-width: 1100px;
  margin: auto;
}

.product-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid #eee;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

.product-card img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 15px;
  transition: 0.3s;
}

.product-card:hover img { transform: scale(1.05); }

.badge {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 2;
}

.bestseller { background: #e63946; }
.new { background: #2d6a4f; }
.premium { background: #f4a261; }

.product-card h3 { font-size: 16px; color: #333; margin-bottom: 6px; }

.rating { color: #f4a261; font-size: 14px; margin-bottom: 6px; }
.rating small { color: #aaa; font-size: 12px; }

.sale-price {
  font-size: 19px;
  font-weight: 700;
  color: #2d6a4f;
}

.original-price {
  font-size: 14px;
  color: #bbb;
  text-decoration: line-through;
  margin-left: 6px;
}

.product-card button {
  margin-top: 12px;
  padding: 11px 22px;
  background: #2d6a4f;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s ease;
}

.product-card button:hover {
  background: #1b4332;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(45,106,79,0.3);
}

/* ========== WHY US ========== */
.why-us {
  padding: 80px 60px;
  text-align: center;
}

.why-us h2 { font-size: 36px; color: #1b4332; margin-bottom: 10px; }
.why-us > p { color: #666; margin-bottom: 45px; font-size: 15px; }

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 1100px;
  margin: auto;
}

.feature-card {
  background: #f9faf9;
  padding: 35px 25px;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid #e8e8e8;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 35px rgba(0,0,0,0.08);
  background: white;
  border-color: #2d6a4f;
}

.feature-card span { font-size: 44px; display: block; margin-bottom: 14px; }
.feature-card h3 { font-size: 18px; color: #1b4332; margin-bottom: 10px; }
.feature-card p { font-size: 14px; color: #666; line-height: 1.7; }

/* ========== TESTIMONIALS ========== */
.testimonials {
  padding: 80px 60px;
  background: linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%);
  text-align: center;
}

.testimonials h2 { font-size: 36px; color: #1b4332; margin-bottom: 45px; }

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 1100px;
  margin: auto;
}

.testimonial-card {
  background: white;
  padding: 30px 25px;
  border-radius: 16px;
  text-align: left;
  box-shadow: 0 8px 25px rgba(0,0,0,0.05);
  transition: 0.3s;
}

.testimonial-card:hover { transform: translateY(-6px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }

.stars { color: #f4a261; margin-bottom: 12px; font-size: 16px; }

.testimonial-card p {
  font-size: 14px;
  color: #555;
  font-style: italic;
  margin-bottom: 15px;
  line-height: 1.7;
}

.testimonial-card h4 { color: #2d6a4f; font-weight: 600; font-size: 14px; }

/* ========== BLOG PREVIEW ========== */
.blog-preview {
  padding: 80px 60px;
  text-align: center;
}

.blog-preview h2 { font-size: 36px; color: #1b4332; margin-bottom: 45px; }

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 1100px;
  margin: auto;
}

.blog-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  text-align: left;
  border: 1px solid #eee;
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 35px rgba(0,0,0,0.1);
}

.blog-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: 0.3s;
}

.blog-card:hover img { transform: scale(1.05); }

.blog-card-content { padding: 20px; }

.blog-card-content h3 {
  font-size: 17px;
  color: #1b4332;
  margin-bottom: 8px;
}

.blog-card-content p {
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
  line-height: 1.6;
}

.blog-card-content span {
  font-size: 12px;
  color: #2d6a4f;
  font-weight: 500;
  display: block;
}

.blog-card-content small { color: #aaa; font-size: 11px; }

/* ========== NEWSLETTER ========== */
.newsletter {
  padding: 70px 60px;
  background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
  text-align: center;
  color: white;
}

.newsletter h2 { font-size: 34px; margin-bottom: 10px; }
.newsletter p { margin-bottom: 25px; opacity: 0.9; font-size: 15px; }

.newsletter-form {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.newsletter-form input {
  padding: 14px 22px;
  border-radius: 50px;
  border: none;
  width: 320px;
  font-size: 14px;
  outline: none;
}

.newsletter-form button {
  padding: 14px 28px;
  background: white;
  color: #2d6a4f;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-form button:hover {
  background: #e8f5e9;
  transform: scale(1.05);
}

.newsletter small {
  display: block;
  margin-top: 15px;
  opacity: 0.7;
  font-size: 12px;
}

/* ========== FAQ ========== */
.faq {
  padding: 80px 60px;
  max-width: 800px;
  margin: auto;
}

.faq h2 { font-size: 36px; color: #1b4332; text-align: center; margin-bottom: 45px; }

.faq-list details {
  background: #f9faf9;
  padding: 20px 24px;
  border-radius: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: 0.3s;
}

.faq-list details:hover { border-color: #2d6a4f; }

.faq-list summary {
  font-weight: 600;
  color: #333;
  font-size: 15px;
  list-style: none;
}

.faq-list summary::-webkit-details-marker { display: none; }

.faq-list details p {
  margin-top: 12px;
  font-size: 14px;
  color: #666;
  line-height: 1.7;
}

/* ========== PRODUCTS PAGE ========== */
.products-page {
  display: flex;
  gap: 30px;
  padding: 60px;
  max-width: 1300px;
  margin: auto;
}

.sidebar {
  width: 260px;
  flex-shrink: 0;
}

.sidebar h3 {
  font-size: 18px;
  color: #1b4332;
  margin-bottom: 15px;
  margin-top: 25px;
}

.sidebar h3:first-child { margin-top: 0; }

.filter-list { list-style: none; }

.filter-list li { margin-bottom: 8px; }

.filter-btn {
  width: 100%;
  padding: 10px 15px;
  text-align: left;
  background: #f5f5f5;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  transition: 0.3s;
  color: #555;
}

.filter-btn:hover,
.filter-btn.active {
  background: #2d6a4f;
  color: white;
}

.sidebar input[type="range"] { width: 100%; margin: 10px 0; accent-color: #2d6a4f; }

.sidebar label { font-size: 13px; color: #555; cursor: pointer; display: block; margin-bottom: 5px; }
.sidebar input[type="checkbox"] { margin-right: 8px; accent-color: #2d6a4f; }

.products-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

/* ========== ABOUT PAGE ========== */
.about-page { max-width: 1100px; margin: auto; padding: 60px; }

.about-hero {
  display: flex;
  gap: 50px;
  align-items: center;
  margin-bottom: 70px;
}

.about-text { flex: 1; }

.about-text h2 { font-size: 34px; color: #1b4332; margin-bottom: 20px; }

.about-text p {
  font-size: 15px;
  color: #555;
  margin-bottom: 15px;
  line-height: 1.8;
}

.about-text blockquote {
  font-size: 18px;
  color: #2d6a4f;
  font-style: italic;
  border-left: 4px solid #2d6a4f;
  padding-left: 20px;
  margin: 20px 0;
}

.about-stat {
  font-size: 16px;
  font-weight: 600;
  color: #1b4332;
  margin-top: 20px;
}

.about-stat span { font-size: 36px; color: #2d6a4f; display: block; }

.about-image { flex: 1; }

.about-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.values-section { text-align: center; margin-bottom: 60px; }

.values-section h2 { font-size: 34px; color: #1b4332; margin-bottom: 10px; }
.values-section > p { color: #666; margin-bottom: 40px; }

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.value-card {
  background: #f9faf9;
  padding: 30px 20px;
  border-radius: 16px;
  transition: 0.3s;
  border: 1px solid #e8e8e8;
}

.value-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.08); }

.value-card span { font-size: 40px; display: block; margin-bottom: 12px; }
.value-card h3 { font-size: 17px; color: #1b4332; margin-bottom: 8px; }
.value-card p { font-size: 13px; color: #666; }

.contact-cta {
  text-align: center;
  padding: 40px;
  background: #e8f5e9;
  border-radius: 16px;
}

.contact-cta h2 { color: #1b4332; margin-bottom: 10px; }
.contact-cta p { color: #555; margin-bottom: 5px; }

/* ========== BLOG PAGE ========== */
.blog-page { padding: 60px; }
.blog-grid-full {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1100px;
  margin: auto;
}

/* ========== CONTACT PAGE ========== */
.contact-page { padding: 60px; }
.contact-container {
  display: flex;
  gap: 50px;
  max-width: 1100px;
  margin: auto;
}

.contact-info { flex: 1; }

.contact-info h2 { font-size: 32px; color: #1b4332; margin-bottom: 15px; }
.contact-info > p { color: #666; margin-bottom: 30px; font-size: 14px; }

.contact-details { margin-bottom: 30px; }

.contact-item {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.contact-item span { font-size: 28px; }

.contact-item h4 { font-size: 16px; color: #333; }
.contact-item p { font-size: 14px; color: #666; }

.social-links-contact h4 { margin-bottom: 10px; color: #333; }
.social-links-contact a {
  display: inline-block;
  margin-right: 12px;
  color: #2d6a4f;
  text-decoration: none;
  font-weight: 500;
}

.contact-form {
  flex: 1;
  background: #f9faf9;
  padding: 35px;
  border-radius: 16px;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form label { font-weight: 600; font-size: 14px; color: #333; }

.contact-form input,
.contact-form textarea {
  padding: 13px 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  transition: 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus { border-color: #2d6a4f; box-shadow: 0 0 0 3px rgba(45,106,79,0.1); }

/* ========== FOOTER ========== */
footer {
  background: #1b1b1b;
  color: #ccc;
  padding: 60px 60px 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 30px;
  max-width: 1200px;
  margin: auto;
}

.footer-col h3,
.footer-col h4 { color: white; margin-bottom: 15px; }
.footer-col h3 { font-size: 22px; }
.footer-col p { font-size: 13px; margin-bottom: 10px; line-height: 1.7; }

.social-links { display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; }
.social-links a {
  color: #aaa;
  text-decoration: none;
  font-size: 13px;
  transition: 0.3s;
}

.social-links a:hover { color: #2d6a4f; }

.footer-col ul { list-style: none; }
.footer-col ul li { margin-bottom: 8px; }

.footer-col ul a {
  color: #aaa;
  text-decoration: none;
  font-size: 13px;
  transition: 0.3s;
}

.footer-col ul a:hover { color: white; }

.footer-newsletter {
  display: flex;
  gap: 8px;
}

.footer-newsletter input {
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  flex: 1;
  font-size: 13px;
  outline: none;
}

.footer-newsletter button {
  padding: 10px 16px;
  background: #2d6a4f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.footer-newsletter button:hover { background: #1b4332; }

.footer-bottom {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #333;
  font-size: 13px;
  color: #888;
}

/* ========== NOTIFICATION ========== */
.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #1b4332;
  color: white;
  padding: 14px 24px;
  border-radius: 12px;
  font-weight: 600;
  z-index: 9999;
  animation: slideInToast 0.4s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
}

@keyframes slideInToast {
  from { opacity: 0; transform: translateX(120px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideOutToast {
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(120px); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ========== RESPONSIVE ========== */
@media (max-width: 1024px) {
  .category-grid { grid-template-columns: repeat(3, 1fr); }
  .product-grid { grid-template-columns: repeat(2, 1fr); }
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .testimonial-grid { grid-template-columns: 1fr; }
  .blog-grid { grid-template-columns: 1fr; }
  .blog-grid-full { grid-template-columns: 1fr; }
  .footer-content { grid-template-columns: 1fr 1fr; }
  .values-grid { grid-template-columns: repeat(2, 1fr); }
  .about-hero { flex-direction: column; }
  .contact-container { flex-direction: column; }
  .products-page { flex-direction: column; }
  .sidebar { width: 100%; }
}

@media (max-width: 768px) {
  .navbar { padding: 15px 20px; }
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  .nav-links.active { display: flex; }
  .hamburger { display: block; }
  .hero h1 { font-size: 38px; }
  .hero-stats { gap: 20px; }
  .categories, .bestsellers, .why-us, .testimonials, .blog-preview, .newsletter, .faq,
  .products-page, .about-page, .blog-page, .contact-page { padding: 40px 20px; }
  .category-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .product-grid { grid-template-columns: 1fr; max-width: 350px; margin: auto; }
  .products-grid { grid-template-columns: 1fr; }
  .features-grid { grid-template-columns: 1fr; }
  .values-grid { grid-template-columns: 1fr; }
  .section-header { flex-direction: column; gap: 10px; text-align: center; }
  .footer-content { grid-template-columns: 1fr; }
  .cart-sidebar { width: 300px; }
}