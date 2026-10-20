import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShoppingBag, 
  Plus, 
  Check, 
  Star, 
  Flame, 
  Eye, 
  X, 
  Sparkles, 
  ChefHat 
} from 'lucide-react';

const SIGNATURE_MELTS = [
  {
    id: 'classic-cheddar-melt',
    name: 'Classic Cheddar Melt',
    price: 249,
    image: 'assets/images/signature-melt-1.jpg',
    imageAlt: 'Golden toasted sourdough topped with melted cheddar cheese and a sunny-side-up egg',
    badge: 'VEG',
    highlightBadge: '⭐ ICONIC FAVORITE',
    highlightColor: 'yellow',
    description: 'Sharp 18-month Wisconsin yellow and white cheddar melted between thick slices of golden, butter-brushed artisanal brioche toast.',
    details: {
      bread: 'Artisanal Brioche Toast (Butter-Brushed)',
      cheeses: 'Sharp 18-Month Wisconsin Yellow & White Cheddar',
      topping: 'Farm-Fresh Sunny-Side-Up Egg with cracked black pepper & sea salt',
      cookingTemp: '375°F Griddle Seared',
      suggestedDip: 'Fire-Roasted San Marzano Tomato Bisque'
    }
  },
  {
    id: 'three-cheese-deluxe',
    name: 'Three-Cheese Deluxe',
    price: 299,
    image: 'assets/images/signature-melt-2.jpg',
    imageAlt: 'Golden grilled sandwich triangles with visibly melted cheese, served on a white plate',
    badge: 'VEG',
    highlightBadge: '24-INCH PULL',
    highlightColor: 'yellow',
    description: 'An exquisite trio of nutty French Gruyère, aged sharp white cheddar, and whole-milk low-moisture mozzarella crisped inside garlic-herb sourdough.',
    details: {
      bread: 'Garlic-Herb Fermented Sourdough',
      cheeses: 'Nutty French Gruyère, Aged White Cheddar & Low-Moisture Mozzarella',
      topping: 'Parmesan Herb Butter Crust with molten 24-inch cheese stretch',
      cookingTemp: '375°F Cast-Iron Pressed',
      suggestedDip: 'Smoky Garlic Dip & Roasted Tomato Jam'
    }
  },
  {
    id: 'spicy-jalapeno-melt',
    name: 'Spicy Jalapeño Melt',
    price: 329,
    image: 'assets/images/signature-melt-3.jpg',
    imageAlt: 'Gourmet spicy grilled sandwich with roasted jalapeños, colorful fresh ingredients, and a rustic wooden serving board',
    badge: 'VEG',
    highlightBadge: '🌶️ SPICY POPPER',
    highlightColor: 'orange',
    description: 'Fire-roasted charred jalapeños, molten pepper jack, whipped scallion cream cheese, and a crunchy crushed tortilla crust on country sourdough.',
    details: {
      bread: 'Crushed Tortilla-Crusted Country Sourdough',
      cheeses: 'Molten Pepper Jack & Whipped Scallion Cream Cheese',
      topping: 'Charred Fire-Roasted Jalapeño Slices, Fresh Cilantro & Lime Spritz',
      cookingTemp: '375°F Flat Top Seared',
      suggestedDip: 'Cooling Avocado Crema & Chipotle Mayo'
    }
  }
];

export default function SignatureMelts({ onExploreMenu, onNavigateItem }) {
  const [cart, setCart] = useState({});
  const [recentlyAddedId, setRecentlyAddedId] = useState(null);
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Cart actions
  const handleAddToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
    
    // Quick button bounce/check state
    setRecentlyAddedId(item.id);
    setTimeout(() => setRecentlyAddedId(null), 1200);

    // Toast alert
    setToastMessage(`Added 1x ${item.name} to your order! 🧀`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const updateQuantity = (itemId, delta) => {
    setCart((prev) => {
      const nextCount = (prev[itemId] || 0) + delta;
      if (nextCount <= 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: nextCount };
    });
  };

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalCartPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = SIGNATURE_MELTS.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <section 
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors relative"
      style={{ backgroundColor: '#FFF4DE' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#FFE5DD] text-[#C2410C] mb-3">
              <Flame className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>The Main Event</span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 uppercase leading-none">
              SIGNATURE MELTS
            </h2>

            {/* Subtitle */}
            <p className="mt-3.5 text-base sm:text-lg text-neutral-600 font-medium leading-relaxed">
              Handcrafted on our 375°F flat top with edge-to-edge buttered bread and molten centers.
            </p>
          </div>

          {/* Top Right Header Action Button */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => {
                if (onExploreMenu) onExploreMenu();
                else window.location.href = 'menu.html';
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-neutral-900 bg-white/80 hover:bg-white border border-neutral-300 hover:border-neutral-950 shadow-sm transition-all duration-200 group active:scale-95"
            >
              <span>Explore Complete Menu</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Cart Floating Toggle (when items exist) */}
            {totalCartCount > 0 && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold text-neutral-950 bg-[#FFBB35] hover:bg-[#F2AD23] shadow-md transition-all active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>₹{totalCartPrice}</span>
                <span className="w-5 h-5 rounded-full bg-neutral-950 text-white text-xs flex items-center justify-center font-bold">
                  {totalCartCount}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* ================= 3-COLUMN PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SIGNATURE_MELTS.map((item) => {
            const isAdded = recentlyAddedId === item.id;
            const currentItemQty = cart[item.id] || 0;

            return (
              <article
                key={item.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-amber-900/10 shadow-[0_4px_24px_rgba(40,25,10,0.06)] hover:shadow-[0_12px_36px_rgba(40,25,10,0.12)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Badges (VEG + Highlight) */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 flex-wrap z-10">
                    {/* Green VEG Pill */}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wide uppercase bg-emerald-100/95 text-emerald-800 backdrop-blur-sm border border-emerald-300/60 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                      {item.badge}
                    </span>

                    {/* Highlight Badge */}
                    <span 
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold tracking-wide uppercase backdrop-blur-sm shadow-sm border ${
                        item.highlightColor === 'orange'
                          ? 'bg-orange-100/95 text-orange-900 border-orange-300/70'
                          : 'bg-amber-100/95 text-amber-950 border-amber-300/70'
                      }`}
                    >
                      {item.highlightBadge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Product Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight group-hover:text-[#B46B00] transition-colors">
                      {item.name}
                    </h3>

                    {/* Product Description */}
                    <p className="mt-2.5 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Actions Row */}
                  <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between gap-3">
                    {/* Bottom Price in ₹ with accent highlight */}
                    <div className="flex flex-col">
                      <span className="text-xs uppercase font-bold tracking-wider text-neutral-400">Price</span>
                      <span className="text-2xl font-black text-neutral-950 tracking-tight">
                        ₹{item.price}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      {/* "View in Menu" Button */}
                      <button
                        onClick={() => setActiveModalItem(item)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors active:scale-95"
                        title="View ingredients and chef notes"
                      >
                        <Eye className="w-4 h-4 text-neutral-500" />
                        <span>View in Menu</span>
                      </button>

                      {/* "Add to Cart" Button */}
                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 shadow-sm active:scale-95 ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#FFBB35] hover:bg-[#F2AD23] text-neutral-950 hover:shadow-md'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 stroke-[3]" />
                            <span>Add to Cart</span>
                            {currentItemQty > 0 && (
                              <span className="ml-1 w-5 h-5 rounded-full bg-neutral-950 text-white text-xs flex items-center justify-center font-bold">
                                {currentItemQty}
                              </span>
                            )}
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* ================= INTERACTIVE DETAIL MODAL ================= */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200 relative animate-scaleUp">
            {/* Modal Header Image */}
            <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-100 text-emerald-800">
                  {activeModalItem.badge}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/90 text-neutral-900">
                  ₹{activeModalItem.price}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h3 className="text-2xl font-black text-neutral-950">
                {activeModalItem.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {activeModalItem.description}
              </p>

              {/* Chef Breakdown Specs */}
              <div className="mt-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-100 space-y-2 text-xs sm:text-sm">
                <div>
                  <strong className="text-neutral-900">🍞 Artisanal Bread: </strong>
                  <span className="text-neutral-700">{activeModalItem.details.bread}</span>
                </div>
                <div>
                  <strong className="text-neutral-900">🧀 Molten Cheeses: </strong>
                  <span className="text-neutral-700">{activeModalItem.details.cheeses}</span>
                </div>
                <div>
                  <strong className="text-neutral-900">✨ Special Touch: </strong>
                  <span className="text-neutral-700">{activeModalItem.details.topping}</span>
                </div>
                <div>
                  <strong className="text-neutral-900">🥣 Best Paired With: </strong>
                  <span className="text-neutral-700">{activeModalItem.details.suggestedDip}</span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-2xl font-black text-neutral-950">₹{activeModalItem.price}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handleAddToCart(activeModalItem);
                      setActiveModalItem(null);
                    }}
                    className="px-5 py-2.5 rounded-xl text-sm font-bold text-neutral-950 bg-[#FFBB35] hover:bg-[#F2AD23] shadow-md transition-all active:scale-95 flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span>Add to Order</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TOAST NOTIFICATION ================= */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-neutral-950 text-white shadow-2xl border border-neutral-800 animate-slideUp">
          <Sparkles className="w-4 h-4 text-[#FFBB35]" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* ================= INTERACTIVE CART SLIDE-OUT DRAWER ================= */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-6 animate-slideLeft">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#B46B00]" />
                <h3 className="text-xl font-extrabold text-neutral-900">Your Melt Cart</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFF4DE] text-neutral-900">
                  {totalCartCount}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {Object.entries(cart).map(([itemId, qty]) => {
                const item = SIGNATURE_MELTS.find((m) => m.id === itemId);
                if (!item) return null;
                return (
                  <div key={itemId} className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-50 border border-neutral-100">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-neutral-900">{item.name}</h4>
                      <p className="text-xs text-neutral-500 font-medium">₹{item.price} each</p>
                      <div className="mt-2 flex items-center gap-2.5">
                        <button
                          onClick={() => updateQuantity(itemId, -1)}
                          className="w-6 h-6 rounded-md bg-white border border-neutral-300 flex items-center justify-center text-xs font-bold hover:bg-neutral-100"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-neutral-900">{qty}</span>
                        <button
                          onClick={() => updateQuantity(itemId, 1)}
                          className="w-6 h-6 rounded-md bg-white border border-neutral-300 flex items-center justify-center text-xs font-bold hover:bg-neutral-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-extrabold text-neutral-900">₹{item.price * qty}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cart Checkout Summary */}
            <div className="pt-4 border-t border-neutral-100 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-500">Subtotal</span>
                <span className="font-extrabold text-neutral-900 text-lg">₹{totalCartPrice}</span>
              </div>
              <p className="text-xs text-neutral-400">Freshly griddled to order on truck arrival.</p>
              <button
                onClick={() => {
                  alert(`Thank you for ordering ₹${totalCartPrice} of Signature Melts! Proceeding to truck pickup.`);
                  setIsCartOpen(false);
                }}
                className="w-full py-3.5 rounded-xl bg-[#FFBB35] hover:bg-[#F2AD23] text-neutral-950 font-extrabold text-sm shadow-md transition-all active:scale-98"
              >
                Proceed to Checkout (₹{totalCartPrice})
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
