// ========== GLOBAL VARIABLES ==========
let cart = JSON.parse(localStorage.getItem('sunglassesCart')) || [];
updateCartUI();

// ========== ADD TO CART ==========
function addToCart(name, price, img) {
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`${name} added to cart 🕶️`);
  animateCartIcon();
}

// ========== REMOVE FROM CART ==========
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

// ========== SAVE CART ==========
function saveCart() {
  localStorage.setItem('sunglassesCart', JSON.stringify(cart));
}

// ========== UPDATE CART UI ==========
function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.innerText = count;

  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const totalPriceEl = document.getElementById('totalPrice');

  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p style="color:#aaa;text-align:center;margin-top:40px;">Your cart is empty 😢</p>`;
    if (cartTotalEl) cartTotalEl.style.display = 'none';
  } else {
    let html = '';
    let total = 0;

    cart.forEach((item, i) => {
      html += `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>Rs. ${item.price} × ${item.qty}</p>
          </div>
          <span class="cart-item-remove" onclick="removeFromCart(${i})">🗑️</span>
        </div>
      `;
      total += item.price * item.qty;
    });

    cartItemsEl.innerHTML = html;

    if (cartTotalEl) cartTotalEl.style.display = 'block';
    if (totalPriceEl) totalPriceEl.innerText = total;
  }
}

// ========== CART SIDEBAR ==========
function showCart() {document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('overlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  document.body.style.overflow = '';
}

// ========== CHECKOUT ==========
function checkout() {
  if (cart.length === 0) {
    showToast('Your cart is empty 😢');
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  showToast(`Order placed! Total: Rs. ${total} 🎉`);

  cart = [];
  saveCart();
  updateCartUI();
  closeCart();
}

// ========== CART ICON ANIMATION ==========
function animateCartIcon() {
  const icon = document.querySelector('.cart-icon');
  if (icon) {
    icon.style.transform = 'scale(1.3)';
    setTimeout(() => icon.style.transform = 'scale(1)', 250);
  }
}

// ========== TOAST ==========
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = msg;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOutToast 0.4s forwards';
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// ========== MOBILE MENU ==========
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// ========== SUBSCRIBE ==========
function subscribe(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');

  if (input.value) {
    showToast('Subscribed successfully 📩');
    input.value = '';
  }
}

// ========== CONTACT ==========
function sendMessage(e) {
  e.preventDefault();
  showToast('Message sent successfully 💬');
  e.target.reset();
}

// ========== FILTER PRODUCTS ==========
function filterProducts(category) {
  const cards = document.querySelectorAll('.product-card');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  event.target.classList.add('active');

  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else if (card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// ========== PRICE FILTER ==========
function filterByPrice(max) {
  document.getElementById('priceValue').innerText = max;

  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    const priceEl = card.querySelector('.sale-price');
    if (!priceEl) return;

    const price = parseInt(priceEl.innerText.replace(/[^0-9]/g, ''));
    card.style.display = price <= max ? 'block' : 'none';
  });
}

// ========== STYLE FILTER (Men / Women / Types) ==========
function filterStyle() {
  const checked = Array.from(
    document.querySelectorAll('.sidebar input[type="checkbox"]:checked')
  ).map(cb => cb.value.toLowerCase());

  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    const classes = card.className.toLowerCase();

    const match = checked.length === 0 || checked.some(type => classes.includes(type));
    card.style.display = match ? 'block' : 'none';
  });
}

// ========== NAVBAR SCROLL ==========
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 25px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
  }
});

// ========== ANIMATIONS ==========
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('[data-aos]').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = '0.6s';
  observer.observe(el);
});

// ========== INIT ==========
console.log('🕶️ Sunglasses Store Loaded');
console.log('🛒 Cart:', cart.length ? `${cart.length} items` : 'Empty');