/**
 * THE MELT DISTRICT - Menu Page Controller
 * Category Filtering, Real-time Search, Dietary Filters, Quick View Modal.
 */

(function () {
  'use strict';

  // Menu Catalog Database
  const MENU_ITEMS = [
    // 1. Prompt Required Dishes
    {
      id: 'melt-classic-grilled-cheese',
      name: 'Classic Grilled Cheese',
      category: 'signature',
      categoryName: 'Signature Grilled Cheese',
      price: 249,
      isVeg: true,
      isChefSpecial: true,
      isSpicy: false,
      image: 'assets/images/signature-melt-1.jpg',
      description: 'Golden toasted artisan country sourdough buttered edge-to-edge with melted sharp Wisconsin yellow and white cheddar.',
      cheeses: 'Sharp Yellow & White Cheddar',
      bread: 'Country Sourdough',
      calories: '490 kcal'
    },
    {
      id: 'melt-three-cheese',
      name: 'Three-Cheese Melt',
      category: 'signature',
      categoryName: 'Signature Grilled Cheese',
      price: 289,
      isVeg: true,
      isChefSpecial: true,
      isSpicy: false,
      image: 'assets/images/signature-melt-2.jpg',
      description: 'A rich molten blend of aged sharp cheddar, Swiss Gruyère, and Wisconsin mozzarella on thick levain sourdough.',
      cheeses: 'Aged Cheddar, Swiss Gruyère, Mozzarella',
      bread: 'Artisanal Levain',
      calories: '530 kcal'
    },
    {
      id: 'melt-spicy-jalapeno',
      name: 'Spicy Jalapeño Melt',
      category: 'signature',
      categoryName: 'Signature Grilled Cheese',
      price: 319,
      isVeg: true,
      isChefSpecial: false,
      isSpicy: true,
      image: 'assets/images/signature-melt-3.jpg',
      description: 'Fire-roasted jalapeño peppers, spicy Monterey pepper jack, whipped cream cheese, and sharp cheddar with crunchy crust.',
      cheeses: 'Monterey Pepper Jack, Cheddar, Cream Cheese',
      bread: 'Crusted Sourdough',
      calories: '560 kcal'
    },
    {
      id: 'melt-bbq-chicken',
      name: 'BBQ Chicken Grilled Cheese',
      category: 'gourmet',
      categoryName: 'Gourmet Melts',
      price: 369,
      isVeg: false,
      isChefSpecial: true,
      isSpicy: true,
      image: 'assets/images/signature-melt-4-bbq.jpg',
      description: 'Tender chicken breast tossed in sweet and smoky hickory barbecue sauce, melted Dutch gouda, and red onion jam on Texas toast.',
      cheeses: 'Smoked Gouda & Monterey Jack',
      bread: 'Thick Texas Toast',
      calories: '640 kcal'
    },
    {
      id: 'comfort-creamy-tomato-soup',
      name: 'Creamy Tomato Soup',
      category: 'comfort',
      categoryName: 'Classic Comfort Food',
      price: 189,
      isVeg: true,
      isChefSpecial: true,
      isSpicy: false,
      image: 'assets/images/comfort-tomato-soup.jpg',
      description: 'Slow-roasted San Marzano plum tomatoes, fresh basil purée, roasted garlic cream, served piping hot with sourdough croutons.',
      cheeses: 'Parmigiano-Reggiano Garnish',
      bread: 'Crispy Sourdough Croutons',
      calories: '280 kcal'
    },
    {
      id: 'side-loaded-comfort-fries',
      name: 'Loaded Comfort Fries',
      category: 'sides',
      categoryName: 'Sides & Snacks',
      price: 219,
      isVeg: true,
      isChefSpecial: true,
      isSpicy: false,
      image: 'assets/images/comfort-fries.jpg',
      description: 'Crispy double-fried Idaho russet fries smothered in warm molten cheddar cheese sauce, herb butter, and scallions.',
      cheeses: 'Warm Molten Cheddar Sauce',
      bread: 'None',
      calories: '420 kcal'
    },
    {
      id: 'drink-fresh-lemonade',
      name: 'Fresh Lemonade',
      category: 'drinks',
      categoryName: 'Drinks & Shakes',
      price: 129,
      isVeg: true,
      isChefSpecial: false,
      isSpicy: false,
      image: 'assets/images/comfort-drinks.jpg',
      description: 'Hand-squeezed Meyer lemons, real cane sugar syrup, cold filtered water, and fresh garden mint leaves over crushed ice.',
      cheeses: 'None',
      bread: 'None',
      calories: '140 kcal'
    },

    // 3. Classic Comfort Food
    {
      id: 'comfort-roasted-tomato-soup',
      name: 'Fire-Roasted Tomato Bisque Bowl',
      category: 'comfort',
      categoryName: 'Classic Comfort Food',
      price: 199,
      isVeg: true,
      isChefSpecial: true,
      isSpicy: false,
      image: 'assets/images/home2-side-bisque.jpg',
      description: 'Slow-simmered San Marzano tomatoes, fresh basil ribbons, roasted garlic cream, served with sourdough dipping soldiers.',
      cheeses: 'Parmigiano-Reggiano Garnish',
      bread: 'Crispy Dipping Soldiers',
      calories: '280 kcal'
    },
    {
      id: 'comfort-skillet-mac',
      name: 'Cast Iron Four-Cheese Mac',
      category: 'comfort',
      categoryName: 'Classic Comfort Food',
      price: 299,
      isVeg: true,
      isChefSpecial: false,
      isSpicy: false,
      image: 'assets/images/menu-four-cheese-mac.jpg',
      description: 'Elbow macaroni folded in velvety Mornay cheese sauce, topped with garlic panko crumbs and oven-baked golden.',
      cheeses: 'Cheddar, Fontina, Gruyère & Pecorino',
      bread: 'None',
      calories: '620 kcal'
    },
    {
      id: 'comfort-tater-tots-poutine',
      name: 'Cheesy Tater Tots Loaded Poutine',
      category: 'comfort',
      categoryName: 'Classic Comfort Food',
      price: 269,
      isVeg: true,
      isChefSpecial: false,
      isSpicy: true,
      image: 'assets/images/menu-tater-tots-poutine.jpg',
      description: 'Golden crispy tots smothered in squeaky cheese curds, rich mushroom herb gravy, and pickled jalapeños.',
      cheeses: 'Fresh Wisconsin Cheese Curds',
      bread: 'None',
      calories: '530 kcal'
    },

    // 4. Sides and Snacks
    {
      id: 'side-parmesan-truffle-fries',
      name: 'Parmesan Herb Truffle Fries',
      category: 'sides',
      categoryName: 'Sides & Snacks',
      price: 219,
      isVeg: true,
      isChefSpecial: true,
      isSpicy: false,
      image: 'assets/images/menu-parmesan-truffle-fries.jpg',
      description: 'Hand-cut Idaho russet fries tossed in white truffle oil, grated aged Parmesan, and chopped flat-leaf parsley.',
      cheeses: 'Aged 24-Month Parmesan',
      bread: 'None',
      calories: '390 kcal'
    },
    {
      id: 'side-cheddar-mozzarella-sticks',
      name: 'Craft Beer-Battered Cheese Sticks',
      category: 'sides',
      categoryName: 'Sides & Snacks',
      price: 239,
      isVeg: true,
      isChefSpecial: false,
      isSpicy: false,
      image: 'assets/images/menu-cheese-sticks.jpg',
      description: 'Thick hand-cut mozzarella logs encased in crunchy seasoned herb panko crust, served with marinara dip.',
      cheeses: 'Whole Milk Low-Moisture Mozzarella',
      bread: 'None',
      calories: '450 kcal'
    },
    {
      id: 'side-crispy-onion-rings',
      name: 'Beer-Battered Sweet Onion Rings',
      category: 'sides',
      categoryName: 'Sides & Snacks',
      price: 189,
      isVeg: true,
      isChefSpecial: false,
      isSpicy: false,
      image: 'assets/images/menu-onion-rings.jpg',
      description: 'Giant Vidalia sweet onion rings dunked in IPA batter and fried crisp, served with chipotle cheese dip.',
      cheeses: 'Chipotle Cheese Dip on Side',
      bread: 'None',
      calories: '340 kcal'
    },

    // 5. Drinks and Shakes
    {
      id: 'drink-salted-caramel-shake',
      name: 'Salted Butter Caramel Thickshake',
      category: 'drinks',
      categoryName: 'Drinks & Shakes',
      price: 229,
      isVeg: true,
      isChefSpecial: true,
      isSpicy: false,
      image: 'assets/images/menu-caramel-shake.jpg',
      description: 'Churned vanilla bean gelato, Maldon sea salt, slow-cooked butterscotch caramel, and whipped chantilly cream.',
      cheeses: 'None',
      bread: 'None',
      calories: '480 kcal'
    },
    {
      id: 'drink-blackberry-mint-lemonade',
      name: 'Sparkling Blackberry Mint Lemonade',
      category: 'drinks',
      categoryName: 'Drinks & Shakes',
      price: 169,
      isVeg: true,
      isChefSpecial: false,
      isSpicy: false,
      image: 'assets/images/menu-blackberry-lemonade.jpg',
      description: 'Hand-muddled wild blackberries, fresh garden mint, cold-pressed lemon juice, and fizzy mineral water.',
      cheeses: 'None',
      bread: 'None',
      calories: '120 kcal'
    },
    {
      id: 'drink-craft-rootbeer-float',
      name: 'Classic Craft Root Beer Float',
      category: 'drinks',
      categoryName: 'Drinks & Shakes',
      price: 189,
      isVeg: true,
      isChefSpecial: false,
      isSpicy: false,
      image: 'assets/images/menu-root-beer-float.jpg',
      description: 'Draft sarsaparilla root beer poured over double scoops of Madagascar vanilla bean ice cream.',
      cheeses: 'None',
      bread: 'None',
      calories: '290 kcal'
    },

    // 6. Seasonal Specials
    {
      id: 'special-cuban-medianoche-melt',
      name: 'Autumn Applewood Smoked Bacon & Fig',
      category: 'seasonal',
      categoryName: 'Seasonal Specials',
      price: 399,
      isVeg: false,
      isChefSpecial: true,
      isSpicy: false,
      image: 'assets/images/gallery-golden-crust.jpg',
      description: 'Crisp maple-glazed bacon, mission fig jam, aged Gorgonzola crumbles, and melted Havarti cheese on sourdough.',
      cheeses: 'Havarti & Aged Gorgonzola',
      bread: 'Artisanal Sourdough',
      calories: '610 kcal'
    },
    {
      id: 'special-ghost-pepper-extreme',
      name: 'The Griddle Monster (Ghost Pepper Challenge)',
      category: 'seasonal',
      categoryName: 'Seasonal Specials',
      price: 369,
      isVeg: true,
      isChefSpecial: true,
      isSpicy: true,
      image: 'assets/images/comfort-sandwiches.jpg',
      description: 'Triple-decker stacked with Bhut Jolokia ghost pepper cheddar, habanero salsa, cream cheese shield, and crushed Flamin Cheetos.',
      cheeses: 'Ghost Pepper Cheddar & Cream Cheese',
      bread: 'Triple Decker Sourdough',
      calories: '740 kcal'
    }
  ];

  let currentCategory = 'all';
  let currentDiet = 'all';
  let searchQuery = '';

  // Render items into container
  function renderMenuItems() {
    const grid = document.getElementById('menu-items-grid');
    const countDisplay = document.getElementById('menu-results-count');
    if (!grid) return;

    const filtered = MENU_ITEMS.filter(item => {
      // Category check
      if (currentCategory !== 'all' && item.category !== currentCategory) {
        return false;
      }
      // Diet check
      if (currentDiet === 'veg' && !item.isVeg) return false;
      if (currentDiet === 'nonveg' && item.isVeg) return false;

      // Search check
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCat = item.categoryName.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      return true;
    });

    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${MENU_ITEMS.length} dishes`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem;">🧀🔍</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No Craving Found!</h3>
          <p style="color: var(--text-secondary); max-width: 450px; margin-inline: auto; margin-bottom: 1.5rem;">
            We couldn't find any menu items matching your filter criteria. Try adjusting the search or category filters!
          </p>
          <button id="reset-menu-filters" class="btn btn-primary btn-sm">Reset All Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById('reset-menu-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          currentDiet = 'all';
          searchQuery = '';
          const searchInput = document.querySelector('.menu-search-input');
          if (searchInput) searchInput.value = '';
          document.querySelectorAll('.category-tabs .tab-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-category') === 'all');
          });
          document.querySelectorAll('.diet-filter-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-diet') === 'all');
          });
          renderMenuItems();
        });
      }
      return;
    }

    let html = '';
    filtered.forEach(item => {
      const vegTag = item.isVeg
        ? `<span class="badge badge-veg"><span style="font-size:0.6rem;">🟢</span> VEG</span>`
        : `<span class="badge badge-nonveg"><span style="font-size:0.6rem;">🔴</span> NON-VEG</span>`;

      const chefTag = item.isChefSpecial
        ? `<span class="badge badge-chef">⭐ CHEF SPECIAL</span>`
        : '';

      const spicyTag = item.isSpicy
        ? `<span class="badge badge-spicy">🌶️ SPICY</span>`
        : '';

      const rightTags = (chefTag || spicyTag) ? `<div style="display:flex;gap:0.35rem;margin-inline-start:auto;">${chefTag}${spicyTag}</div>` : '';

      html += `
        <div class="food-card is-revealed" style="opacity: 1; transform: translateY(0); visibility: visible;">
          <div class="food-card-thumb-wrap">
            <img src="${item.image}" alt="${item.name}" class="food-card-img" loading="lazy" onerror="this.src='assets/images/signature-melt-2.jpg'">
            <div class="food-card-tags">
              ${vegTag}
              ${rightTags}
            </div>
          </div>
          <div class="food-card-body">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--cheddar-hover); text-transform: uppercase; margin-bottom: 0.2rem;">
              ${item.categoryName}
            </div>
            <h3 class="food-card-title">${item.name}</h3>
            <p class="food-card-desc">${item.description}</p>
            <div class="food-card-footer">
              <span class="food-card-price">₹${item.price}</span>
              <div class="food-card-actions">
                <button class="btn btn-outline btn-sm quick-view-btn" data-id="${item.id}" style="padding: 0.4rem 0.85rem;">
                  Details
                </button>
                <button class="btn btn-primary btn-sm add-to-cart-btn" 
                  data-id="${item.id}" 
                  data-name="${item.name}" 
                  data-price="${item.price}" 
                  data-image="${item.image}" 
                  data-category="${item.categoryName}">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;

    // Attach quick view click listeners
    grid.querySelectorAll('.quick-view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = MENU_ITEMS.find(m => m.id === id);
        if (item) showQuickViewModal(item);
      });
    });
  }

  // Quick View Modal
  function showQuickViewModal(item) {
    let modal = document.querySelector('.quick-view-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'quick-view-modal';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="quick-view-dialog" role="dialog" aria-modal="true" aria-label="${item.name} Details">
        <div class="quick-view-image-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <button id="close-quickview-btn" class="quick-view-close-btn" aria-label="Close dialog">
            ✕
          </button>
          <div class="quick-view-price-badge">
            ₹${item.price}
          </div>
        </div>
        <div class="quick-view-content">
          <div class="quick-view-badges">
            ${item.isVeg ? '<span class="badge badge-veg" style="font-size:0.72rem;padding:0.2rem 0.55rem;">🟢 VEG</span>' : '<span class="badge badge-nonveg" style="font-size:0.72rem;padding:0.2rem 0.55rem;">🔴 NON-VEG</span>'}
            ${item.isChefSpecial ? '<span class="badge badge-chef" style="font-size:0.72rem;padding:0.2rem 0.55rem;">⭐ CHEF SPECIAL</span>' : ''}
          </div>
          <h3 class="quick-view-title">${item.name}</h3>
          <p class="quick-view-desc">${item.description}</p>
          
          <div class="quick-view-specs">
            <div>
              <span>Cheese Blend:</span>
              <strong>${item.cheeses}</strong>
            </div>
            <div>
              <span>Artisan Bread:</span>
              <strong>${item.bread}</strong>
            </div>
            <div>
              <span>Est. Nutrition:</span>
              <strong>${item.calories}</strong>
            </div>
            <div>
              <span>Griddle Prep Time:</span>
              <strong>6 - 8 Minutes</strong>
            </div>
          </div>

          <div class="quick-view-actions">
            <button class="btn btn-primary add-to-cart-btn" style="width:100%;padding:0.75rem 1rem;font-size:0.95rem;font-weight:700;display:flex;align-items:center;justify-content:center;gap:0.5rem;"
              data-id="${item.id}" 
              data-name="${item.name}" 
              data-price="${item.price}" 
              data-image="${item.image}" 
              data-category="${item.categoryName}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add to Cart • ₹${item.price}
            </button>
          </div>
        </div>
      </div>
    `;

    const closeModal = () => {
      modal.remove();
      document.removeEventListener('keydown', onKeyDown);
    };

    const closeBtn = document.getElementById('close-quickview-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    const modalAddBtn = modal.querySelector('.add-to-cart-btn');
    if (modalAddBtn) {
      modalAddBtn.addEventListener('click', () => {
        setTimeout(closeModal, 300);
      });
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKeyDown);
  }

  // Delegated listener for all Details buttons across the page
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.quick-view-btn');
    if (btn) {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      const item = MENU_ITEMS.find(m => m.id === id);
      if (item) showQuickViewModal(item);
    }
  });

  // --- INITIALIZE MENU CONTROLS ---
  document.addEventListener('DOMContentLoaded', () => {
    // Only run if on menu page
    if (!document.getElementById('menu-items-grid')) return;

    renderMenuItems();

    // Deep-linking: auto-open item details if URL param ?item=... or hash #... is provided
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const reqId = urlParams.get('item') || (window.location.hash ? window.location.hash.substring(1) : '');
      if (reqId) {
        const reqItem = MENU_ITEMS.find(m => m.id === reqId);
        if (reqItem) {
          setTimeout(() => showQuickViewModal(reqItem), 100);
        }
      }
    } catch (_) {}

    // Category Tabs click
    document.querySelectorAll('.category-tabs .tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.category-tabs .tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category') || 'all';
        renderMenuItems();
      });
    });

    // Diet Filter clicks (Veg/NonVeg/All)
    document.querySelectorAll('.diet-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.diet-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentDiet = btn.getAttribute('data-diet');
        renderMenuItems();
      });
    });

    // Search bar input
    const searchInput = document.querySelector('.menu-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderMenuItems();
      });
    }
  });
})();
