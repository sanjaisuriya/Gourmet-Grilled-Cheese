/**
 * THE MELT DISTRICT - Blog Controller
 * Dynamic Article Loading, Category Filtering, Live Search, Social Sharing,
 * and Unique Non-Duplicating Related Food Stories.
 */

(function () {
  'use strict';

  // --- COMPREHENSIVE 18-ARTICLE REPOSITORY ---
  const MELT_ARTICLES = [
    {
      id: 1,
      category: 'science',
      categoryName: 'Cheese Melt Science',
      badgeClass: 'badge-science',
      readTime: '4 Min Read',
      date: 'October 16, 2026',
      title: 'The Art of the Perfect Cheese Pull',
      lead: 'The physics and temperature dynamics behind achieving an elastic, 24-inch cheese pull with Wisconsin cheddar and alpine gruyere.',
      image: 'assets/images/journal-cheese-pull-molten.jpg',
      featureImage: 'assets/images/journal-cheese-pull-molten.jpg',
      featureCaption: 'A continuous, elastic 24-inch cheese pull achieved by balancing whole-milk mozzarella and Wisconsin aged cheddar.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Always grate cheese from cold whole blocks. Pre-shredded cheese contains potato starch and cellulose anti-caking dust that interferes with casein protein strands from fusing into a glossy, uninterrupted 24-inch ribbon.',
      sections: [
        {
          title: '1. The Protein Matrix: Casein Micelles in Motion',
          content: 'When cheese melts, calcium phosphate bonds between casein protein micelles loosen. Low-moisture whole-milk mozzarella and young alpine cheeses have the ideal protein-to-fat ratio that allows them to stretch into long, continuous ribbons without snapping.'
        },
        {
          title: '2. The 145°F Serving Window',
          content: 'Pull your sandwich too hot (above 170°F) and the cheese flows like liquid soup. Let it cool below 125°F and the fats re-solidify. The sweet spot for an elastic, camera-ready cheese pull is between 140°F and 148°F.'
        },
        {
          title: '3. Dual-Layer Stacking for Tensile Strength',
          content: 'We place shredded low-moisture mozzarella directly against both toasted sourdough faces to anchor the stretch, while layering sharp 18-month Wisconsin cheddar in the molten center for intense flavor.'
        }
      ]
    },
    {
      id: 2,
      category: 'tips',
      categoryName: 'Grilled Cheese Tips',
      badgeClass: 'badge-tips',
      readTime: '5 Min Read',
      date: 'October 14, 2026',
      title: 'The Ultimate Butter-Toasting Guide: Butter vs. Mayo Decoded',
      lead: 'We subjected 100 test melts to scientific heat testing on our food truck griddle to see which spread creates the crispiest bite.',
      image: 'assets/images/journal-butter-guide.jpg',
      featureImage: 'assets/images/journal-butter-guide.jpg',
      featureCaption: 'Searing artisan sourdough melts with whipped cultured compound butter on the 375°F commercial flat-top.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Always use room-temperature, cultured salted butter. Cold butter tears the delicate crumb of your artisan sourdough, creating uneven contact pockets on the flat-top.',
      sections: [
        {
          title: '1. The Smoke Point Chemistry: Milk Solids vs. Emulsion',
          content: 'Standard butter contains butterfat, water, and milk solids. When heated gently on our seasoned flat-top, milk solids toast into caramelized hazelnut notes (beurre noisette) providing unrivaled depth of flavor.'
        },
        {
          title: '2. The Mayonnaise Argument: Convenience vs. Flavor',
          content: 'While mayonnaise has a higher smoke point and browns evenly, in blind taste tests with our food truck guests, 84% preferred butter because mayonnaise adds an unwanted acidic vinegar tang that clashes with fine cheeses.'
        },
        {
          title: '3. The Verdict: The Hybrid Compound Butter Method',
          content: 'At The Melt District, our signature spread is 85% grass-fed cultured butter whipped with 10% cold-pressed olive oil (which raises the smoke point) and 5% confit garlic paste and sea salt.'
        }
      ]
    },
    {
      id: 3,
      category: 'behind-the-scenes',
      categoryName: 'Behind the Scenes',
      badgeClass: 'badge-bts',
      readTime: '6 Min Read',
      date: 'October 13, 2026',
      title: 'Behind the Scenes at Our Food Truck',
      lead: 'A 5:00 AM look into our commissary prep kitchen—sourcing rustic sourdough loaves and staging small-batch dairy.',
      image: 'assets/images/journal-behind-scenes.jpg',
      featureImage: 'assets/images/journal-behind-scenes.jpg',
      featureCaption: 'Early morning flat-top calibration and small-batch cheese prep inside the commissary mobile kitchen.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Maintaining strict commissary temperature control ensures our cheese blends retain their delicate aromatic fats before hitting the 375°F griddle.',
      sections: [
        {
          title: '1. The Early Morning Commissary Routine',
          content: 'Before the city wakes up, our prep team is already slicing 60 loaves of fresh artisan sourdough delivered from our neighborhood partner bakery.'
        },
        {
          title: '2. Calibrating the Flat-Top Steel',
          content: 'A mobile kitchen is subject to outdoor weather fluctuations. Every morning we calibrate our high-recovery chrome flat-top griddles using laser surface thermometers.'
        },
        {
          title: '3. Sourcing Small-Batch Wheels',
          content: 'We break down 10-kilogram wheels of aged Wisconsin cheddar and Swiss Gruyère every morning so the cheese is as fresh and aromatic as possible.'
        }
      ]
    },
    {
      id: 4,
      category: 'cheese-flavor',
      categoryName: 'Cheese & Flavor',
      badgeClass: 'badge-flavor',
      readTime: '5 Min Read',
      date: 'October 11, 2026',
      title: 'Finding Your Perfect Cheese Combination',
      lead: 'Balancing sharp, nutty, and creamy flavor profiles across fontina, taleggio, and aged farmhouse cheddars.',
      image: 'assets/images/journal-cheese-flavor-combinations.jpg',
      featureImage: 'assets/images/journal-cheese-flavor-combinations.jpg',
      featureCaption: 'An artisanal cheese board featuring wedges of aged cheddar, nutty gruyère, creamy brie, and gouda with walnuts and cheese slicer.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Never use more than three cheeses in a single sandwich. Too many varieties muddle the flavor profile into indistinct saltiness.',
      sections: [
        {
          title: '1. The Golden Ratio: Melter vs. Flavor Driver',
          content: 'A great gourmet melt requires two distinct roles: a high-moisture Melter (like young Fontina or Mozzarella) and a low-moisture Flavor Driver (like 18-Month Sharp Cheddar or Gruyère).'
        },
        {
          title: '2. The Role of Acidity and Salt',
          content: 'Pairing rich fats with a hint of lactic acidity cuts through the dairy heaviness, making every bite as lively and craving-inducing as the first.'
        },
        {
          title: '3. Experimenting with Pungent Washed-Rind Cheeses',
          content: 'For adventurous palates, adding just 10% Taleggio or Brie creates a creamy mushroom aroma that elevates grilled cheese into fine dining territory.'
        }
      ]
    },
    {
      id: 5,
      category: 'culture',
      categoryName: 'Street Food Culture',
      badgeClass: 'badge-culture',
      readTime: '4 Min Read',
      date: 'October 09, 2026',
      title: 'The Street Food Moments We Love',
      lead: 'Late-night pop-ups, curbside laughs, and the wonderful neighborhood regulars that make our truck feel like home.',
      image: 'assets/images/journal-street-food-moments.jpg',
      featureImage: 'assets/images/journal-street-food-moments.jpg',
      featureCaption: 'A lively curbside food truck gathering at twilight with community dining at wooden picnic tables under warm glowing festoon lights.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Eating street food curbside while it is piping hot from the steel delivers 10x the crunch compared to takeout trapped in steam boxes.',
      sections: [
        {
          title: '1. The Open Window Connection',
          content: 'There is no glass dining room separating the cook from the diner. When we pass a hot parchment-wrapped melt through the window, we see the immediate smile and anticipation.'
        },
        {
          title: '2. The Curbside Dining Community',
          content: 'Street food transforms a plain sidewalk into a spontaneous community festival. Strangers share tables, recommend dipping sauces, and bond over comfort food.'
        },
        {
          title: '3. The Romance of the Night Shift',
          content: 'Operating under warm glowing festoon lights as twilight turns to midnight is where the true heartbeat of the food truck lifestyle lives.'
        }
      ]
    },
    {
      id: 6,
      category: 'inspiration',
      categoryName: 'Food & Inspiration',
      badgeClass: 'badge-inspiration',
      readTime: '5 Min Read',
      date: 'October 07, 2026',
      title: 'Comfort Food for Every Occasion',
      lead: 'Why piping hot tomato bisque and griddled cheese remains the undisputed king of soul-warming comfort combos.',
      image: 'assets/images/journal-comfort-food-pairings.jpg',
      featureImage: 'assets/images/journal-comfort-food-pairings.jpg',
      featureCaption: 'A golden crispy artisanal sourdough grilled cheese melt with gooey molten cheese paired with velvety roasted tomato bisque and crispy potato wedges.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Cut your grilled cheese diagonally! Triangular cuts provide two sharp corners that fit perfectly into narrow soup cups for the ultimate dip.',
      sections: [
        {
          title: '1. The Nostalgia Factor',
          content: 'Grilled cheese and tomato soup is etched into universal comfort food memory. Our goal is to honor that childhood memory using world-class culinary technique.'
        },
        {
          title: '2. The Contrast of Texture and Temperature',
          content: 'Diagonally sliced crunchy golden sourdough plunged into velvety, sweet-tart roasted tomato soup creates an irresistible contrast of crunchy, gooey, and warm.'
        },
        {
          title: '3. Modern Twists on Classic Pairings',
          content: 'We finish our tomato bisque with roasted garlic cream and micro-basil, providing a sophisticated backdrop for artisanal melted cheeses.'
        }
      ]
    },
    {
      id: 7,
      category: 'science',
      categoryName: 'Cheese Melt Science',
      badgeClass: 'badge-science',
      readTime: '5 Min Read',
      date: 'October 05, 2026',
      title: 'The Crust Chemistry: Sourdough vs Brioche',
      lead: 'Analyzing crumb porosity, sugar caramelization, and structure to see which bread withstands heavy molten fillings.',
      image: 'assets/images/journal-crust-sourdough-brioche.jpg',
      featureImage: 'assets/images/journal-crust-sourdough-brioche.jpg',
      featureCaption: 'Artisan rustic sourdough loaf with aerated crumb slices beside golden braided brioche on a baker table.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Brush bread with fat right up to the very crust edges. Bare edges dry out and become tough rather than shattering crisp.',
      sections: [
        {
          title: '1. Sourdough: The Structural Heavyweight',
          content: 'With wild yeast fermentation and a resilient gluten network, sourdough provides an open yet sturdy crumb that never turns soggy under molten cheese.'
        },
        {
          title: '2. Brioche: The Rich and Delicate Contender',
          content: 'Enriched with butter and egg yolks, brioche caramelizes rapidly due to higher sugar content, requiring lower griddle heat to prevent burning.'
        },
        {
          title: '3. The Crispness Test on Steel',
          content: 'Our flattop tests proved sourdough holds its crunch for 25 minutes after grilling, whereas brioche softens within 8 minutes.'
        }
      ]
    },
    {
      id: 8,
      category: 'tips',
      categoryName: 'Grilled Cheese Tips',
      badgeClass: 'badge-tips',
      readTime: '6 Min Read',
      date: 'October 03, 2026',
      title: 'Mastering the Flattop Griddle: Heat Zones & Steam Domes',
      lead: 'How a dual-temperature sear zone and stainless steam cover achieves gooey core melts without scorching bread.',
      image: 'assets/images/journal-flattop-steam-dome.jpg',
      featureImage: 'assets/images/journal-flattop-steam-dome.jpg',
      featureCaption: 'Stainless steel steam melting dome on a commercial flattop griddle with steaming sizzling artisan grilled cheese.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Never press down forcefully on a grilled cheese! Gentle, even weight gives edge-to-edge golden browning without squeezing out the melted cheese.',
      sections: [
        {
          title: '1. The Two-Zone Griddle Layout',
          content: 'Zone 1 is set to a blistering 375°F for the initial crunch and golden Maillard crust. Zone 2 stays gentle at 300°F for steady, through-and-through core melting.'
        },
        {
          title: '2. The Power of the Steam Dome',
          content: 'Trapping a tablespoon of water vapor under a stainless dome envelops the sandwich in 212°F moist heat, melting stubborn thick cheese without drying the crust.'
        },
        {
          title: '3. Iron Weight Secrets',
          content: 'Applying a medium cast-iron press ensures uniform bread-to-steel contact without compressing the delicate airy sourdough crumb.'
        }
      ]
    },
    {
      id: 9,
      category: 'behind-the-scenes',
      categoryName: 'Behind the Scenes',
      badgeClass: 'badge-bts',
      readTime: '5 Min Read',
      date: 'October 01, 2026',
      title: 'From Farm to Griddle: Sourcing Small-Batch Cheeses',
      lead: 'Partnering with regional dairy farms to bring grass-fed curd, alpine wheels, and artisanal provolone to street food.',
      image: 'assets/images/journal-farm-small-batch-cheese.jpg',
      featureImage: 'assets/images/journal-farm-small-batch-cheese.jpg',
      featureCaption: 'Artisan cheesemaker inspecting a golden aged farmhouse cheddar wheel in a rustic cheese cave cellar.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Grass-fed dairy cheeses have a rich golden hue naturally caused by beta-carotene in fresh pasture grasses.',
      sections: [
        {
          title: '1. Championing Regional Dairies',
          content: 'Industrial pre-packaged cheese lacks personality. We partner directly with artisan dairies committed to ethical grass-fed herds.'
        },
        {
          title: '2. The Aging Process',
          content: 'Our cheddar is aged for a minimum of 18 months, developing crystalline calcium lactate deposits that provide a delightful crunch and intense savory punch.'
        },
        {
          title: '3. Testing Melt Profiles in the Commissary',
          content: 'Every seasonal batch of milk produces slight differences in fat content. We test each cheese wheel on our flat-top before putting it on the truck.'
        }
      ]
    },
    {
      id: 10,
      category: 'cheese-flavor',
      categoryName: 'Cheese & Flavor',
      badgeClass: 'badge-flavor',
      readTime: '4 Min Read',
      date: 'September 28, 2026',
      title: 'Alpine Melts & Forest Truffles: Elevating Comfort',
      lead: 'Pairing pungent earthy black truffle glaze with creamy fontina and sautéed cremini for a decadent street bite.',
      image: 'assets/images/journal-alpine-truffle-melt.jpg',
      featureImage: 'assets/images/journal-alpine-truffle-melt.jpg',
      featureCaption: 'Pan-seared thyme cremini mushrooms, white truffle oil, and molten fontina on country sourdough.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Add truffle oil or glaze only at the very end of cooking. Excessive heat destroys delicate truffle aroma volatiles.',
      sections: [
        {
          title: '1. The Earthy Synergy of Truffle and Dairy',
          content: 'Truffle aroma compounds bind naturally to milk fats, amplifying both the musk of the mushroom and the sweetness of the cheese.'
        },
        {
          title: '2. The Role of Italian Fontina',
          content: 'Fontina melts with exceptional creaminess without releasing excess grease, providing the perfect silky vehicle for shaved truffles.'
        },
        {
          title: '3. Thyme and Garlic Nuances',
          content: 'We sauté our cremini mushrooms in brown butter, thyme sprigs, and garlic to create deep umami notes that cut through the richness.'
        }
      ]
    },
    {
      id: 11,
      category: 'culture',
      categoryName: 'Street Food Culture',
      badgeClass: 'badge-culture',
      readTime: '5 Min Read',
      date: 'September 25, 2026',
      title: 'Midnight Griddle Runs: Late-Night Food Truck Vibes',
      lead: 'The curbside energy after concerts and night shifts—serving hungry crowds under warm string lights.',
      image: 'assets/images/journal-midnight-griddle-vibes.jpg',
      featureImage: 'assets/images/journal-midnight-griddle-vibes.jpg',
      featureCaption: 'The vibrant hum of late-night crowds gathered curbside under ambient festoon lights after hours.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Our late-night grilled cheese wraps feature double-thick parchment to keep melts steaming hot down to the final bite.',
      sections: [
        {
          title: '1. The Late-Night Rush',
          content: 'At 11:00 PM, the concert halls let out, and the food truck queue forms in minutes. There is an electric camaraderie in the night air.'
        },
        {
          title: '2. Comfort Food as a Night Cap',
          content: 'Nothing revives the soul after an energetic night out like sizzling melted cheese and hot crunchy fries eaten in the crisp night breeze.'
        },
        {
          title: '3. Stories from the Service Window',
          content: 'Musicians, night nurses, artists, and students gather curbside, sharing laughs and music recommendations while their melts sear.'
        }
      ]
    },
    {
      id: 12,
      category: 'inspiration',
      categoryName: 'Food & Inspiration',
      badgeClass: 'badge-inspiration',
      readTime: '4 Min Read',
      date: 'September 22, 2026',
      title: 'The Perfect Pair: Why Tomato Bisque & Melts Belong Together',
      lead: 'The gastronomic science of contrasting rich dairy lipids with bright, acid-forward roasted San Marzano tomatoes.',
      image: 'assets/images/journal-perfect-pair-bisque-melt.jpg',
      featureImage: 'assets/images/journal-perfect-pair-bisque-melt.jpg',
      featureCaption: 'Balancing bright roasted tomato acidity with rich cultured butterfat and aged melted cheese.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'A touch of heavy cream in tomato bisque rounds off high acid edges without dulling the bright tomato punch.',
      sections: [
        {
          title: '1. Lipid and Acid Balance',
          content: 'Heavy cheese coats the palate with delicious butterfat. The bright acidity of roasted San Marzano tomatoes cleanses the palate, resetting tastebuds for the next bite.'
        },
        {
          title: '2. Slow Roasting for Natural Sweetness',
          content: 'We roast our tomatoes with garlic and sweet onions for 6 hours, caramelizing natural sugars and eliminating bitter canned metallic notes.'
        },
        {
          title: '3. Dipping Mechanics: The Capillary Action',
          content: 'The porous crumb of toasted sourdough acts like a sponge, drawing in velvety bisque while the melted cheese acts as a delicious barrier.'
        }
      ]
    },
    {
      id: 13,
      category: 'science',
      categoryName: 'Cheese Melt Science',
      badgeClass: 'badge-science',
      readTime: '4 Min Read',
      date: 'September 19, 2026',
      title: 'The Chemistry of the Cheese Skirt: Perfecting Griddled Frico',
      lead: 'Discover how allowing overflow cheese to sizzle directly on the hot steel flattop creates a crisp, deeply savory frico lace skirt.',
      image: 'assets/images/journal-cheese-skirt-frico.jpg',
      featureImage: 'assets/images/journal-cheese-skirt-frico.jpg',
      featureCaption: 'Deliberate cheese overhang sizzling into a brittle, umami-packed golden lace frico skirt.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Use an aged, low-moisture hard cheese like Parmesan or 2-year Cheddar for the crispiest, longest-lasting frico skirt.',
      sections: [
        {
          title: '1. What is Frico?',
          content: 'Originating in northern Italy, frico is shredded cheese crisped on a dry pan until it forms a golden, brittle, savory lace wafer.'
        },
        {
          title: '2. The Fat-Protein Separation Point',
          content: 'As cheese melts on 375°F steel, moisture boils off rapidly and butterfat separates, essentially deep-frying the remaining milk proteins into a crunchy skirt.'
        },
        {
          title: '3. Achieving the Perfect Overhang',
          content: 'We deliberately extend shredded aged cheddar 1/2 inch beyond the bread crust so it contacts the steel griddle directly.'
        }
      ]
    },
    {
      id: 14,
      category: 'tips',
      categoryName: 'Grilled Cheese Tips',
      badgeClass: 'badge-tips',
      readTime: '5 Min Read',
      date: 'September 16, 2026',
      title: 'Crisp Pressing Secrets: Panini Ribs vs Flat-Top Searing',
      lead: 'Understand the textural differences between ridged contact grills and heavy cast-iron presses when melting multi-layer gourmet sandwiches.',
      image: 'assets/images/journal-panini-ribs-pressing.jpg',
      featureImage: 'assets/images/journal-panini-ribs-pressing.jpg',
      featureCaption: 'Applying calibrated cast-iron weight for complete flat-top sear contact without crushing the crumb.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Always preheat your sandwich weight! A cold press pulls heat away from the top bread slice, doubling cooking time.',
      sections: [
        {
          title: '1. Contact Area: 100% Searing vs Ribbed Contact',
          content: 'A flat-top griddle provides 100% surface contact for complete, uniform caramelization, whereas ribbed panini presses toast only 40% of the bread.'
        },
        {
          title: '2. When Panini Ridges Shine',
          content: 'For sandwiches with hefty cured meats or roast veggies, ribbed presses create steam escape channels that prevent sogginess.'
        },
        {
          title: '3. The Cast-Iron Press Technique',
          content: 'Placing a warmed, seasoned cast-iron weight atop the sandwich prevents bread bowing without squeezing out molten cheese.'
        }
      ]
    },
    {
      id: 15,
      category: 'behind-the-scenes',
      categoryName: 'Behind the Scenes',
      badgeClass: 'badge-bts',
      readTime: '5 Min Read',
      date: 'September 12, 2026',
      title: 'The Window Connection: Why Food Truck Hospitality Feels Personal',
      lead: 'There is no dining room wall separating cook from guest—just an open service window where friendships and warm smiles are shared.',
      image: 'assets/images/journal-window-hospitality-truck.jpg',
      featureImage: 'assets/images/journal-window-hospitality-truck.jpg',
      featureCaption: 'Eye-to-eye hospitality and personal connections forged over hot melts passed through the service window.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Greeting guests by name and remembering their favorite melt combination is the secret sauce of food truck hospitality.',
      sections: [
        {
          title: '1. Eye-to-Eye Hospitality',
          content: 'In traditional restaurants, cooks work behind swinging stainless steel doors. In our food truck, we look every customer in the eye from order to pickup.'
        },
        {
          title: '2. Instant Customer Feedback',
          content: 'When someone takes their first bite right outside the truck window, their honest facial reaction tells us everything about our cook quality.'
        },
        {
          title: '3. Building Neighborhood Traditions',
          content: 'Seeing the same families, couples, and regulars week after week turns our mobile truck into an indispensable part of the neighborhood fabric.'
        }
      ]
    },
    {
      id: 16,
      category: 'cheese-flavor',
      categoryName: 'Cheese & Flavor',
      badgeClass: 'badge-flavor',
      readTime: '6 Min Read',
      date: 'September 08, 2026',
      title: 'The Umami Equilibrium: Blending Sharp Cheddar with Gruyère',
      lead: 'Why pairing high-tang lactic acidity with a nutty, elastic alpine cheese delivers the deepest, most well-rounded gourmet melt profile.',
      image: 'assets/images/journal-umami-cheddar-gruyere.jpg',
      featureImage: 'assets/images/journal-umami-cheddar-gruyere.jpg',
      featureCaption: 'The 60/40 golden ratio: punchy sharp cheddar married with nutty, silky cave-aged Gruyère.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Add a pinch of fresh thyme leaves directly onto the cheese layer before closing the sandwich. Thymes herbal aroma cuts through the deep dairy umami.',
      sections: [
        {
          title: '1. The Flavor Geometry: Tang vs Nutty Sweetness',
          content: 'Aged Wisconsin cheddar brings punchy lactic acidity and sharp pungency, while Swiss Gruyère brings buttery hazelnut sweetness and elastic stretch.'
        },
        {
          title: '2. Melting Synergies',
          content: 'Cheddar alone can melt greasy if aged past 18 months. Gruyère contains higher moisture and natural emulsifiers that bind cheddar fat into silky fondue.'
        },
        {
          title: '3. The 60/40 Ratio',
          content: 'Through extensive blind tastings, our kitchen discovered the ultimate ratio: 60% aged sharp cheddar to 40% Cave-Aged Swiss Gruyère.'
        }
      ]
    },
    {
      id: 17,
      category: 'culture',
      categoryName: 'Street Food Culture',
      badgeClass: 'badge-culture',
      readTime: '5 Min Read',
      date: 'September 04, 2026',
      title: 'The Evolution of Food Truck Culture: From Novelty to Gourmet',
      lead: 'How modern street food transformed from quick grab-and-go into artisan culinary hubs where chefs craft high-technique comfort foods on wheels.',
      image: 'assets/images/journal-foodtruck-culture-gourmet.jpg',
      featureImage: 'assets/images/journal-foodtruck-culture-gourmet.jpg',
      featureCaption: 'Modern mobile culinary hubs bringing artisan technique and communal gathering to city streets.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'Food trucks allow chefs to focus 100% of their energy on food quality rather than table settings and formal dining service.',
      sections: [
        {
          title: '1. The Culinary Revolution on Wheels',
          content: 'Food trucks have moved far beyond greasy spoons. Today, passionate culinary artisans choose trucks to innovate without corporate restrictions.'
        },
        {
          title: '2. Nimble Seasonal Menus',
          content: 'Without the overhead of a brick-and-mortar dining room, mobile kitchens can change menus weekly, collaborating with local organic farms and micro-bakers.'
        },
        {
          title: '3. Creating Communal Gathering Spaces',
          content: 'Food trucks revitalize dead urban corners, transforming parking lots and parks into vibrant open-air dining plazas with string lights and music.'
        }
      ]
    },
    {
      id: 18,
      category: 'inspiration',
      categoryName: 'Food & Inspiration',
      badgeClass: 'badge-inspiration',
      readTime: '4 Min Read',
      date: 'August 30, 2026',
      title: 'Curating a Gourmet Melt Bar: Food Truck Catering for Events',
      lead: 'Why couples, private parties, and corporate events are swapping traditional catering buffets for interactive, made-to-order curbside grilled cheese bars.',
      image: 'assets/images/journal-event-catering-melt-bar.jpg',
      featureImage: 'assets/images/journal-event-catering-melt-bar.jpg',
      featureCaption: 'Fresh-to-order interactive grilled cheese bars elevating weddings, corporate galas, and private parties.',
      author: 'Chef Kabir Saxena',
      authorImg: 'assets/images/mobile-story-chef.jpg',
      chefTip: 'When booking a food truck for private catering, allocate 3 standard parking spaces on level ground for smooth kitchen operation.',
      sections: [
        {
          title: '1. Ditching the Lukewarm Chafing Dish',
          content: 'Traditional catering buffets suffer from lukewarm food that sits under Sterno flames for hours. Our truck cooks every single sandwich fresh to order in 90 seconds.'
        },
        {
          title: '2. The Interactive Midnight Wedding Snack',
          content: 'At wedding receptions, having an illuminated food truck roll up at 11 PM brings unmatched energy and surprise to the party.'
        },
        {
          title: '3. Customizable Flavor Stations',
          content: 'From truffle fry flights and soup shooter bars to artisanal craft sodas, guests can personalize their comfort food experience curbside.'
        }
      ]
    }
  ];

  document.addEventListener('DOMContentLoaded', () => {
    // --- 1. BLOG LISTING PAGE (FILTER & SEARCH) ---
    const blogGrid = document.getElementById('blog-posts-grid');
    const blogSearchInput = document.getElementById('blog-search-input');
    const blogCategoryTabs = document.querySelectorAll('.blog-tab-btn');

    if (blogGrid) {
      let currentCategory = 'all';
      let searchQuery = '';

      function filterBlogCards() {
        const cards = blogGrid.querySelectorAll('.blog-card');
        let visibleCount = 0;

        cards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          const title = card.querySelector('.blog-card-title')?.textContent.toLowerCase() || '';
          const excerpt = card.querySelector('.blog-card-excerpt')?.textContent.toLowerCase() || '';

          const matchCat = (currentCategory === 'all' || cardCat === currentCategory);
          const matchSearch = (!searchQuery || title.includes(searchQuery) || excerpt.includes(searchQuery));

          if (matchCat && matchSearch) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        const noResultsEl = document.getElementById('blog-no-results');
        if (noResultsEl) {
          noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
        }
      }

      if (blogSearchInput) {
        blogSearchInput.addEventListener('input', (e) => {
          searchQuery = e.target.value.trim().toLowerCase();
          filterBlogCards();
        });
      }

      blogCategoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          blogCategoryTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          currentCategory = tab.getAttribute('data-category');
          filterBlogCards();
        });
      });
    }

    // --- 2. DYNAMIC BLOG DETAILS PAGE (MATCH CLICKED ARTICLE & PREVENT DUPLICATE IMAGES) ---
    const heroTitle = document.getElementById('article-hero-title');
    if (heroTitle) {
      const heroBanner = document.getElementById('article-hero-banner');
      const heroLead = document.getElementById('article-hero-lead');
      const heroBreadcrumb = document.getElementById('article-breadcrumb-title');
      const eyebrow = document.getElementById('article-eyebrow');
      const heroImage = document.getElementById('article-hero-image');
      const metaInfo = document.getElementById('article-meta-info');
      const bodyContent = document.getElementById('article-body-content');
      const tocNav = document.getElementById('article-toc-nav');
      const relatedGrid = document.getElementById('related-articles-grid');

      // Parse article ID from URL (e.g., blog-details.html?id=16)
      const urlParams = new URLSearchParams(window.location.search);
      const articleId = parseInt(urlParams.get('id'), 10) || 1;
      const article = MELT_ARTICLES.find(a => a.id === articleId) || MELT_ARTICLES[0];

      // A. Update Document Title, Breadcrumb & Header
      document.title = `${article.title} | The Melt District`;
      if (heroTitle) heroTitle.textContent = article.title.toUpperCase();
      if (heroLead) heroLead.textContent = article.lead;
      if (heroBreadcrumb) heroBreadcrumb.textContent = article.title;
      if (eyebrow) eyebrow.textContent = article.categoryName;
      if (metaInfo) metaInfo.textContent = `Published ${article.date} • ${article.readTime}`;

      // B. Update Banner Background & Main Hero Image with the EXACT clicked article image
      if (heroBanner) {
        heroBanner.classList.remove('hero-bg-blog-details');
        heroBanner.style.backgroundImage = `linear-gradient(rgba(18, 16, 14, 0.45), rgba(18, 16, 14, 0.65)), url('${article.image}')`;
        heroBanner.style.backgroundSize = 'cover';
        heroBanner.style.backgroundPosition = 'center center';
        heroBanner.style.backgroundRepeat = 'no-repeat';
      }
      if (heroImage) {
        heroImage.src = article.image;
        heroImage.alt = article.title;
        const heroWrap = heroImage.closest('.reveal-on-scroll');
        if (heroWrap) heroWrap.classList.add('is-revealed');
      }

      // C. Render Article Story Sections & Table of Contents
      if (bodyContent && article.sections) {
        let bodyHtml = `<p style="font-size:1.2rem;color:var(--text-primary);font-weight:500;margin-bottom:2rem;line-height:1.7;">${article.lead}</p>`;
        let tocHtml = '';

        article.sections.forEach((sec, idx) => {
          const secId = `section-${article.id}-${idx + 1}`;
          tocHtml += `<a href="#${secId}" class="toc-link ${idx === 0 ? 'active' : ''}" style="color:var(--text-secondary);">${sec.title}</a>`;
          bodyHtml += `
            <h2 id="${secId}" style="font-family:var(--font-display);font-size:2rem;color:var(--text-primary);margin-top:2.5rem;margin-bottom:1rem;line-height:1.2;">
              ${sec.title.toUpperCase()}
            </h2>
            <p style="margin-bottom:1.5rem;line-height:1.8;">${sec.content}</p>
          `;

          // Insert Chef Tip callout box after first section
          if (idx === 0 && article.chefTip) {
            bodyHtml += `
              <div style="background:var(--cheddar-light);border-inline-start:4px solid var(--cheddar-hover);padding:1.5rem;border-radius:var(--radius-sm);margin-bottom:2rem;color:var(--text-primary);">
                <strong style="font-size:1rem;display:block;margin-bottom:0.25rem;">🧀 Food Truck Chef Tip:</strong>
                <p style="font-size:0.95rem;margin:0;line-height:1.6;">${article.chefTip}</p>
              </div>
            `;
          }
        });

        // Dedicated live feature photo break (authentic local asset matching this specific article)
        const featureImgSrc = article.featureImage || 'assets/images/perfect-cheese-melt-feature.jpg';
        const featureImgCaption = article.featureCaption || `Inside The Melt District food truck — ${article.title}`;

        bodyHtml += `
          <div style="border-radius:var(--radius-md);overflow:hidden;margin-block:2.5rem;box-shadow:var(--shadow-md);">
            <img src="${featureImgSrc}" alt="${featureImgCaption}" style="width:100%;height:auto;max-height:520px;object-fit:cover;display:block;">
            <div style="background:var(--bg-card);padding:0.75rem 1.25rem;font-size:0.88rem;color:var(--text-muted);font-style:italic;border-top:1px solid var(--border-color);line-height:1.5;">
              ${featureImgCaption}
            </div>
          </div>
        `;

        // Author Signature Bio
        bodyHtml += `
          <div style="background:var(--bg-card);border:1px solid var(--border-color);padding:2rem;border-radius:var(--radius-md);margin-top:3.5rem;display:flex;gap:1.5rem;align-items:center;">
            <img src="assets/images/mobile-story-chef.jpg" alt="Chef Kabir" style="width:72px;height:72px;border-radius:50%;object-fit:cover;border:3px solid var(--cheddar);">
            <div>
              <h4 style="font-size:1.2rem;margin-bottom:0.25rem;">About Chef Kabir Saxena</h4>
              <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.5;margin:0;">
                Culinary director and co-founder of The Melt District. Obsessed with cheese science, local dairy sourcing, and the perfect golden sear.
              </p>
            </div>
          </div>
        `;

        bodyContent.innerHTML = bodyHtml;
        if (tocNav) tocNav.innerHTML = tocHtml;
      }

      // D. Render Related Food Stories (STRICTLY NO DUPLICATE IMAGES!)
      if (relatedGrid) {
        // Exclude current article and its image completely
        const available = MELT_ARTICLES.filter(a => a.id !== article.id && a.image !== article.image);
        const sameCategory = available.filter(a => a.category === article.category);
        const otherCategory = available.filter(a => a.category !== article.category);

        const picked = [];
        const usedImages = new Set([article.image, article.featureImage]);

        // Prioritize same category first
        for (const item of sameCategory) {
          if (picked.length < 3 && !usedImages.has(item.image)) {
            picked.push(item);
            usedImages.add(item.image);
          }
        }

        // Fill remaining with other categories
        for (const item of otherCategory) {
          if (picked.length < 3 && !usedImages.has(item.image)) {
            picked.push(item);
            usedImages.add(item.image);
          }
        }

        let relHtml = '';
        picked.forEach((rel, i) => {
          relHtml += `
            <div class="food-card reveal-on-scroll is-revealed delay-${i + 1}" style="display:flex;flex-direction:column;border-radius:var(--radius-lg);overflow:hidden;background:var(--bg-card);border:1px solid var(--border-color);box-shadow:var(--shadow-sm);transition:transform 0.3s ease, box-shadow 0.3s ease;">
              <div class="food-card-thumb-wrap" style="aspect-ratio:4/3;overflow:hidden;background:var(--bg-secondary);position:relative;">
                <img src="${rel.image}" alt="${rel.title}" class="food-card-img" loading="lazy" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;">
                <div class="food-card-tags" style="position:absolute;top:12px;left:12px;z-index:2;">
                  <span class="badge ${rel.badgeClass}" style="font-weight:700;font-size:0.75rem;padding:0.25rem 0.75rem;border-radius:var(--radius-full);">${rel.categoryName.toUpperCase()}</span>
                </div>
              </div>
              <div class="food-card-body" style="padding:1.5rem;display:flex;flex-direction:column;flex:1;">
                <div style="font-size:0.82rem;color:var(--text-muted);font-weight:600;margin-bottom:0.4rem;display:flex;align-items:center;gap:0.35rem;">
                  ⏱️ ${rel.readTime}
                </div>
                <h4 style="font-size:1.15rem;margin-bottom:0.5rem;line-height:1.35;font-weight:700;">
                  <a href="blog-details.html?id=${rel.id}" style="color:var(--text-primary);text-decoration:none;">${rel.title}</a>
                </h4>
                <p style="font-size:0.88rem;color:var(--text-secondary);margin-bottom:1.25rem;flex:1;line-height:1.55;">
                  ${rel.lead}
                </p>
                <div class="food-card-footer" style="margin-top:auto;padding-top:0.75rem;border-top:1px solid var(--border-color);">
                  <a href="blog-details.html?id=${rel.id}" class="btn btn-outline btn-sm" style="width:100%;text-align:center;font-weight:700;border-radius:var(--radius-sm);">
                    Read Article &rarr;
                  </a>
                </div>
              </div>
            </div>
          `;
        });

        relatedGrid.innerHTML = relHtml;
        if (typeof window.refreshScrollReveal === 'function') {
          window.refreshScrollReveal();
        }
      }
    }

    // --- 3. NEWSLETTER FORM HANDLER ---
    const newsletterForm = document.getElementById('journal-newsletter-form');
    const newsletterInput = document.getElementById('journal-email');
    const newsletterFeedback = document.getElementById('journal-newsletter-feedback');

    if (newsletterForm && newsletterInput && newsletterFeedback) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
          newsletterFeedback.className = 'journal-feedback-msg error';
          newsletterFeedback.textContent = 'Please enter your email address.';
          newsletterInput.focus();
          return;
        }

        if (!emailRegex.test(email)) {
          newsletterFeedback.className = 'journal-feedback-msg error';
          newsletterFeedback.textContent = 'Please enter a valid email address.';
          newsletterInput.focus();
          return;
        }

        newsletterFeedback.className = 'journal-feedback-msg success';
        newsletterFeedback.textContent = "🧀 You're on the list! Watch your inbox for secret melts & street food stories.";
        newsletterInput.value = '';
        if (typeof window.showMeltToast === 'function') {
          window.showMeltToast('Welcome to The Melt Club! 🎉', 'success');
        }
      });
    }

    // --- 4. SOCIAL SHARE BUTTONS ---
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const network = btn.getAttribute('data-network');
        const pageUrl = window.location.href;
        const pageTitle = document.title;

        if (network === 'copy') {
          navigator.clipboard.writeText(pageUrl).then(() => {
            if (typeof window.showMeltToast === 'function') {
              window.showMeltToast('🔗 Article link copied to clipboard!', 'success');
            }
          }).catch(() => {
            if (typeof window.showMeltToast === 'function') {
              window.showMeltToast('Unable to copy automatically.', 'info');
            }
          });
        } else if (network === 'twitter') {
          window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(pageUrl)}`, '_blank');
        } else if (network === 'facebook') {
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`, '_blank');
        } else if (network === 'whatsapp') {
          window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle + ' ' + pageUrl)}`, '_blank');
        }
      });
    });

    // --- 5. SMOOTH TOC SCROLLING ---
    document.addEventListener('click', (e) => {
      const tocLink = e.target.closest('.toc-link');
      if (tocLink) {
        const targetId = tocLink.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
            tocLink.classList.add('active');
          }
        }
      }
    });

  });
})();
