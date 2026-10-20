/**
 * THE MELT DISTRICT - Shopping Cart Engine
 * Manages Cart State, localStorage persistence, Drawer UI,
 * Quantity controls, Promo codes, and Checkout Demo Modal.
 */

(function () {
  'use strict';

  const CART_STORAGE_KEY = 'melt_district_cart';
  let cart = [];
  let appliedDiscount = 0; // percentage or fixed
  let promoCodeName = '';

  // Load cart from localStorage
  function loadCart() {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      cart = saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Could not parse cart from storage', e);
      cart = [];
    }
    updateCartUI();
  }

  // Save cart to localStorage
  function saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart', e);
    }
    updateCartUI();
  }

  // Open & Close Drawer
  window.openCartDrawer = function () {
    const drawer = document.querySelector('.cart-drawer');
    const backdrop = document.querySelector('.drawer-backdrop');
    if (drawer && backdrop) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeCartDrawer = function () {
    const drawer = document.querySelector('.cart-drawer');
    const backdrop = document.querySelector('.drawer-backdrop');
    if (drawer && backdrop) {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Add Item to Cart
  window.addToMeltCart = function (product) {
    if (!product || !product.id) return;

    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      cart[existingIndex].qty += (product.qty || 1);
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
        category: product.category || 'Melt',
        qty: product.qty || 1
      });
    }

    saveCart();

    // Visual bump on cart icon
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(b => {
      b.classList.add('bump');
      setTimeout(() => b.classList.remove('bump'), 400);
    });

    if (typeof window.showMeltToast === 'function') {
      window.showMeltToast(`🧀 Added "${product.name}" to cart!`, 'success');
    }
  };

  // Update item quantity
  function updateItemQty(id, delta) {
    const index = cart.findIndex(item => item.id === id);
    if (index > -1) {
      cart[index].qty += delta;
      if (cart[index].qty <= 0) {
        cart.splice(index, 1);
      }
      saveCart();
    }
  }

  // Remove item
  function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    if (typeof window.showMeltToast === 'function') {
      window.showMeltToast('Item removed from cart', 'info');
    }
  }

  // Calculate totals
  function getCartTotals() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discountAmount = 0;

    if (appliedDiscount > 0) {
      discountAmount = Math.round(subtotal * (appliedDiscount / 100));
    }

    const total = Math.max(0, subtotal - discountAmount);

    return { count, subtotal, discountAmount, total };
  }

  // Render Cart UI
  function updateCartUI() {
    const { count, subtotal, discountAmount, total } = getCartTotals();

    // 1. Update Badge counts
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });

    // 2. Render Drawer Body
    const cartBody = document.querySelector('.cart-drawer-body');
    const cartFooter = document.querySelector('.cart-drawer-footer');

    if (!cartBody) return;

    if (cart.length === 0) {
      cartBody.innerHTML = `
        <div class="cart-empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <h3 style="font-size:1.15rem;margin-bottom:0.4rem;">Your Melt Cart is Empty</h3>
          <p style="color:var(--text-muted);font-size:0.9rem;margin-bottom:1.25rem;">The griddle is blazing hot! Add some golden grilled cheese goodness.</p>
          <a href="menu.html" class="btn btn-primary btn-sm" onclick="closeCartDrawer()">Explore Menu</a>
        </div>
      `;
      if (cartFooter) cartFooter.style.display = 'none';
      return;
    }

    if (cartFooter) cartFooter.style.display = 'block';

    let itemsHtml = '';
    cart.forEach(item => {
      itemsHtml += `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='assets/images/signature-melt-2.jpg'">
          <div class="cart-item-details">
            <h4>${item.name}</h4>
            <div class="cart-item-price">₹${item.price} each</div>
            <div class="cart-qty-ctrl">
              <button class="qty-btn qty-minus" data-id="${item.id}" aria-label="Decrease quantity">−</button>
              <span style="font-weight:700;font-size:0.9rem;min-width:20px;text-align:center;">${item.qty}</span>
              <button class="qty-btn qty-plus" data-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          </button>
        </div>
      `;
    });

    cartBody.innerHTML = itemsHtml;

    // Attach listeners inside drawer
    cartBody.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', () => updateItemQty(btn.getAttribute('data-id'), -1));
    });

    cartBody.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', () => updateItemQty(btn.getAttribute('data-id'), 1));
    });

    cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => removeItem(btn.getAttribute('data-id')));
    });

    // 3. Render Footer Totals
    const subtotalEl = document.querySelector('.cart-subtotal-val');
    const discountLine = document.querySelector('.cart-discount-line');
    const discountEl = document.querySelector('.cart-discount-val');
    const totalEl = document.querySelector('.cart-total-val');

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
    if (totalEl) totalEl.textContent = `₹${total}`;

    if (discountLine && discountEl) {
      if (appliedDiscount > 0) {
        discountLine.style.display = 'flex';
        discountEl.textContent = `-₹${discountAmount} (${promoCodeName})`;
      } else {
        discountLine.style.display = 'none';
      }
    }
  }

  // --- CHECKOUT DEMO MODAL ---
  function showCheckoutModal() {
    const { subtotal, discountAmount, total } = getCartTotals();
    if (cart.length === 0) {
      window.showMeltToast('Your cart is empty! Add items first.', 'error');
      return;
    }

    let modal = document.querySelector('.checkout-demo-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'checkout-demo-modal';
      modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.65);
        backdrop-filter: blur(6px); z-index: 3500; display: flex;
        align-items: center; justify-content: center; padding: 1.5rem;
      `;
      document.body.appendChild(modal);
    }

    const orderId = 'MELT-' + Math.floor(100000 + Math.random() * 900000);

    modal.innerHTML = `
      <div style="background:var(--bg-card);max-width:500px;width:100%;border-radius:var(--radius-lg);padding:2rem;box-shadow:var(--shadow-lg);border:1px solid var(--border-color);position:relative;">
        <div style="text-align:center;margin-bottom:1.5rem;">
          <div style="width:60px;height:60px;background:var(--cheddar-light);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;color:var(--cheddar-hover);margin-bottom:0.75rem;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 style="font-family:var(--font-display);font-size:2rem;margin-bottom:0.25rem;">GRILLED TO PERFECTION!</h3>
          <p style="color:var(--text-secondary);font-size:0.9rem;">Order Reference: <strong style="color:var(--cheddar-hover);">${orderId}</strong></p>
        </div>

        <div style="background:var(--bg-secondary);padding:1rem;border-radius:var(--radius-md);margin-bottom:1.25rem;font-size:0.9rem;">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.4rem;">
            <span>Items (${cart.length}):</span>
            <strong>₹${subtotal}</strong>
          </div>
          ${appliedDiscount > 0 ? `
          <div style="display:flex;justify-content:space-between;margin-bottom:0.4rem;color:var(--sage);">
            <span>Discount:</span>
            <strong>-₹${discountAmount}</strong>
          </div>` : ''}
          <div style="display:flex;justify-content:space-between;font-size:1.1rem;font-weight:800;border-top:1px dashed var(--border-color);padding-top:0.4rem;">
            <span>Total Payable:</span>
            <span style="color:var(--cheddar-hover);">₹${total}</span>
          </div>
        </div>

        <div style="background:#FEF3C7;border:1px solid #FCD34D;color:#92400E;padding:0.85rem;border-radius:var(--radius-sm);font-size:0.85rem;margin-bottom:1.5rem;display:flex;gap:0.5rem;align-items:center;">
          <span>ℹ️</span>
          <span><strong>Notice:</strong> This is a front-end demonstration website. No real credit card or payment was processed.</span>
        </div>

        <div style="display:flex;gap:0.75rem;">
          <button id="close-checkout-modal" class="btn btn-primary" style="flex:1;">Awesome, Clear Cart</button>
        </div>
      </div>
    `;

    document.getElementById('close-checkout-modal').addEventListener('click', () => {
      cart = [];
      appliedDiscount = 0;
      promoCodeName = '';
      saveCart();
      modal.remove();
      window.closeCartDrawer();
      window.showMeltToast('🎉 Thank you! See you at the Food Truck!', 'success');
    });
  }

  // --- INITIALIZE CART CONTROLS ON DOM LOAD ---
  document.addEventListener('DOMContentLoaded', () => {
    loadCart();

    // Open cart drawer triggers
    document.querySelectorAll('.open-cart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.openCartDrawer();
      });
    });

    // Close cart drawer button
    const closeBtn = document.querySelector('.cart-drawer-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', window.closeCartDrawer);
    }

    // Promo Code Application
    const promoForm = document.querySelector('.cart-promo-box');
    if (promoForm) {
      const applyBtn = promoForm.querySelector('button');
      const input = promoForm.querySelector('input');

      if (applyBtn && input) {
        applyBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const code = input.value.trim().toUpperCase();
          if (!code) return;

          if (code === 'CHEDDAR20') {
            appliedDiscount = 20;
            promoCodeName = '20% OFF';
            window.showMeltToast('🧀 Promo applied! 20% discount added.', 'success');
            updateCartUI();
          } else if (code === 'MELT10') {
            appliedDiscount = 10;
            promoCodeName = '10% OFF';
            window.showMeltToast('🧀 Promo applied! 10% discount added.', 'success');
            updateCartUI();
          } else {
            window.showMeltToast('Invalid promo code. Try "CHEDDAR20"', 'error');
          }
        });
      }
    }

    // Checkout Button
    const checkoutBtn = document.querySelector('.cart-checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showCheckoutModal();
      });
    }

    // Listen for direct "Add to Cart" buttons across pages
    document.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.add-to-cart-btn');
      if (addBtn) {
        e.preventDefault();
        const id = addBtn.getAttribute('data-id');
        const name = addBtn.getAttribute('data-name');
        const price = addBtn.getAttribute('data-price');
        const image = addBtn.getAttribute('data-image');
        const category = addBtn.getAttribute('data-category');

        if (id && name && price) {
          window.addToMeltCart({ id, name, price, image, category });
        }
      }
    });
  });
})();
