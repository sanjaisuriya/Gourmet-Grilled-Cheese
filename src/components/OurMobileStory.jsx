import React, { useEffect, useRef, useState } from 'react';
import { 
  Flame, 
  Truck, 
  Clock, 
  ChefHat, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function OurMobileStory({ onFindTruck, onExploreMenu }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="our-mobile-story"
      className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden transition-colors"
      style={{ backgroundColor: '#FFF7EA' }}
    >
      {/* Decorative ambient subtle circle blur in background */}
      <div 
        className="absolute top-1/4 -left-24 w-96 h-96 rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{ backgroundColor: '#F8B735' }}
      />
      <div 
        className="absolute bottom-10 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-25 blur-3xl"
        style={{ backgroundColor: '#F8B735' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          
          {/* ================= LEFT COLUMN: LARGE ROUNDED FOOD TRUCK KITCHEN PHOTOGRAPH ================= */}
          <div className="lg:col-span-6 order-1">
            <div className="relative group">
              
              {/* Outer Glow / Shadow Accent */}
              <div 
                className="absolute -inset-2 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500"
                style={{ backgroundColor: '#F8B735' }}
              />

              {/* Main Image Frame with Thin White Border & Shadow */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(37,37,37,0.12)] bg-neutral-100">
                <img
                  src="assets/images/mobile-story-chef.jpg"
                  alt="Professional head chef and team preparing gourmet grilled cheese on flat top griddle in mobile kitchen"
                  className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlaid Bottom Pill: Live Griddle Station Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-amber-900/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF2D6] text-[#B46B00] flex items-center justify-center shrink-0">
                    <ChefHat className="w-5 h-5 text-[#8A5200]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <strong className="text-xs sm:text-sm font-extrabold text-[#252525]">
                        Live Flat-Top Cooking
                      </strong>
                    </div>
                    <p className="text-[11px] text-neutral-500 font-medium">
                      375°F Chrome Steel • 36-Hr Sourdough
                    </p>
                  </div>
                </div>
              </div>

              {/* Top-Right Floater Badge: Vintage Step-Van */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-md border border-neutral-200/80 items-center gap-2">
                <Truck className="w-4 h-4 text-[#8A5200]" />
                <span className="text-xs font-bold text-[#252525] tracking-wide">
                  1974 Vintage Step-Van Kitchen
                </span>
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: EDITORIAL STORYTELLING CONTENT ================= */}
          <div className="lg:col-span-6 order-2">
            
            {/* Small Rounded Label above Heading */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase mb-5 shadow-sm border border-[#F0CA75]/60 bg-[#FFF2D6] text-[#8A5200]">
              <Sparkles className="w-3.5 h-3.5 text-[#8A5200]" />
              <span>OUR MOBILE STORY</span>
            </div>

            {/* Large Bold Uppercase Heading with Line Breaks */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#252525] uppercase leading-[1.1] mb-6">
              BORN ON THE CURBSIDE,
              <span className="block mt-1 text-[#252525]">
                PERFECTED ON THE GRIDDLE
              </span>
            </h2>

            {/* Decorative Golden-Yellow Accent Divider */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-14 h-1 rounded-full bg-[#F8B735]" />
              <span className="w-2.5 h-1 rounded-full bg-[#F8B735]/60" />
              <span className="w-1.5 h-1 rounded-full bg-[#F8B735]/40" />
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#252525]/85 leading-relaxed font-normal">
              <p>
                The Melt District started with a simple belief: nostalgic comfort food deserves Michelin-level culinary care. We transformed a vintage 1974 step-van into a mobile high-heat kitchen, equipped with commercial chrome steel griddles and steam dome stations.
              </p>
              <p>
                Every morning at 5:00 AM, our crew collects freshly baked 36-hour fermented sourdough from artisan bakers, grates aged cheese wheels by hand, and slow-roasts San Marzano tomatoes into a rich tomato bisque before heading out to city streets, office plazas, and festival rallies.
              </p>
              <p className="font-semibold text-[#252525]">
                Our mission is simple: serve unforgettable gourmet melts made with premium ingredients, handcrafted with passion, and grilled to golden perfection.
              </p>
            </div>

            {/* Craftsmanship Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-8 pt-6 border-t border-amber-900/10">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/70 border border-amber-900/5 shadow-xs">
                <Clock className="w-4 h-4 text-[#8A5200] shrink-0" />
                <span className="text-xs font-bold text-[#252525]">5:00 AM Fresh Prep</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/70 border border-amber-900/5 shadow-xs">
                <Flame className="w-4 h-4 text-[#8A5200] shrink-0" />
                <span className="text-xs font-bold text-[#252525]">375°F Cast Griddle</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/70 border border-amber-900/5 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#8A5200] shrink-0" />
                <span className="text-xs font-bold text-[#252525]">100% Real Cheeses</span>
              </div>
            </div>

            {/* CTA Button Group */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  if (onFindTruck) onFindTruck();
                  else window.location.href = 'find-the-truck.html';
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-extrabold text-[#252525] bg-[#F8B735] hover:bg-[#EBA725] shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group"
              >
                <Truck className="w-4 h-4" />
                <span>Find Our Truck Today</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  if (onExploreMenu) onExploreMenu();
                  else window.location.href = 'menu.html';
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-bold text-[#252525] bg-white/80 hover:bg-white border border-neutral-300 hover:border-neutral-900 shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>View Daily Menu</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
