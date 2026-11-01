import { ProductItem, StoreInfo, RepairServiceItem, CustomerReview, PhoneBrandInfo } from '../types';

export const STORE_INFO: StoreInfo = {
  name: "Cover Point",
  tagline: "Where Premium Device Protection Meets High-End Aesthetic",
  phone: "+91 98765 43210",
  whatsapp: "+919051410466",
  address: "Near Mecheda Central Bus Stand, Station Road, Mecheda",
  landmark: "Directly Opposite Mecheda Central Bus Stand (Near Railway Station)",
  city: "Mecheda, Purba Medinipur, West Bengal",
  pincode: "721137",
  timings: "Open Daily: 10:30 AM – 9:30 PM (7 Days a Week)",
  googleMapsUrl: "https://maps.google.com/?q=Mecheda+Bus+Stand",
};

export const POPULAR_PHONE_BRANDS: PhoneBrandInfo[] = [
  {
    brand: "Apple",
    popularModels: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro", "iPhone 13"]
  },
  {
    brand: "Samsung",
    popularModels: ["Galaxy S24 Ultra", "Galaxy S24 Plus", "Galaxy S23 Ultra", "Galaxy Z Fold 5", "Galaxy A55"]
  },
  {
    brand: "OnePlus",
    popularModels: ["OnePlus 12", "OnePlus 12R", "OnePlus 11", "OnePlus Nord 4", "OnePlus Open"]
  },
  {
    brand: "Google Pixel",
    popularModels: ["Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7a", "Pixel 8a"]
  },
  {
    brand: "Xiaomi",
    popularModels: ["Xiaomi 14 Ultra", "Xiaomi 14", "Redmi Note 13 Pro+", "Xiaomi 13 Pro"]
  },
  {
    brand: "Nothing",
    popularModels: ["Nothing Phone (2)", "Nothing Phone (2a)", "Nothing Phone (1)"]
  }
];

// Designs for Shop By Design: 3 designs per phone company for 6 phone brands (18 products)
export const PHONE_DESIGNS: ProductItem[] = [
  // 1. Apple iPhone 15 Pro Max
  {
    id: "ap-01",
    name: "Cyber Neon Matte MagSafe",
    brand: "Apple",
    phoneModel: "iPhone 15 Pro Max",
    category: "backcovers",
    styleCategory: "Matte Cyber",
    description: "Anti-fingerprint nano-matte finish with recessed N52 neodymium magnetic ring.",
    price: 499,
    originalPrice: 799,
    discountPercentage: 38,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["MagSafe", "Matte", "Anti-Scratch", "Fast Seller"]
  },
  {
    id: "ap-02",
    name: "Aero Carbon Fiber Weave",
    brand: "Apple",
    phoneModel: "iPhone 15 Pro Max",
    category: "backcovers",
    styleCategory: "Carbon Fiber",
    description: "Genuine 1500D aramid fiber texture with camera bezel aluminum alloy lip.",
    price: 699,
    originalPrice: 1199,
    discountPercentage: 42,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Carbon Fiber", "Ultra Slim", "Heat Dissipation"]
  },
  {
    id: "ap-03",
    name: "Holographic Cyber Mecha Art",
    brand: "Apple",
    phoneModel: "iPhone 15 Pro Max",
    category: "backcovers",
    styleCategory: "Holographic Art",
    description: "Multi-angle refractive prism print embedded within toughened TPU composite.",
    price: 549,
    originalPrice: 899,
    discountPercentage: 39,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Holographic", "Shockproof Corner", "Art Edition"]
  },

  // 2. Samsung Galaxy S24 Ultra
  {
    id: "sm-01",
    name: "Titanium Armor Rugged Kickstand",
    brand: "Samsung",
    phoneModel: "Galaxy S24 Ultra",
    category: "backcovers",
    styleCategory: "Military Armor",
    description: "Dual-layer MIL-STD-810G certified shell with built-in metal viewing kickstand.",
    price: 649,
    originalPrice: 999,
    discountPercentage: 35,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Armor", "Kickstand", "Heavy Duty", "S-Pen Friendly"]
  },
  {
    id: "sm-02",
    name: "Luxe Cognac Saddle Leather",
    brand: "Samsung",
    phoneModel: "Galaxy S24 Ultra",
    category: "backcovers",
    styleCategory: "Luxe Leather",
    description: "Hand-stitched vegan saddle grain with precision machined metal tactile buttons.",
    price: 599,
    originalPrice: 949,
    discountPercentage: 37,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Leather", "Executive", "Warm Grip"]
  },
  {
    id: "sm-03",
    name: "Diamond Crystal Frost Non-Yellowing",
    brand: "Samsung",
    phoneModel: "Galaxy S24 Ultra",
    category: "backcovers",
    styleCategory: "Crystal Clear",
    description: "Bayer optical acrylic backing that resists UV radiation and never turns yellow.",
    price: 449,
    originalPrice: 699,
    discountPercentage: 36,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Clear", "Non-Yellowing", "Showcase"]
  },

  // 3. OnePlus 12
  {
    id: "op-01",
    name: "Emerald Sandstone Grip Edition",
    brand: "OnePlus",
    phoneModel: "OnePlus 12",
    category: "backcovers",
    styleCategory: "Matte Cyber",
    description: "Classic textured tactile sandstone grip engineered for non-slip gaming sessions.",
    price: 429,
    originalPrice: 699,
    discountPercentage: 38,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Sandstone", "Gaming Grip", "Sweat Resistant"]
  },
  {
    id: "op-02",
    name: "Stealth Kevlar Matrix Shield",
    brand: "OnePlus",
    phoneModel: "OnePlus 12",
    category: "backcovers",
    styleCategory: "Carbon Fiber",
    description: "Real aramid fiber composite shielding the curved camera decagon housing flawlessly.",
    price: 649,
    originalPrice: 999,
    discountPercentage: 35,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Kevlar", "Ultra Thin", "Camera Guard"]
  },
  {
    id: "op-03",
    name: "Cyber Neon Tokyo Wave",
    brand: "OnePlus",
    phoneModel: "OnePlus 12",
    category: "backcovers",
    styleCategory: "Holographic Art",
    description: "Electroluminescent-inspired UV laser art print with impact cushioning inner honeycomb.",
    price: 499,
    originalPrice: 799,
    discountPercentage: 38,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Artwork", "Cyberpunk", "Shock Absorber"]
  },

  // 4. Google Pixel 8 Pro
  {
    id: "px-01",
    name: "Obsidian Visor Shield Matte",
    brand: "Google Pixel",
    phoneModel: "Pixel 8 Pro",
    category: "backcovers",
    styleCategory: "Matte Cyber",
    description: "Full camera bar aluminum protection with ultra-soft liquid silicone exterior.",
    price: 449,
    originalPrice: 749,
    discountPercentage: 40,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Camera Visor Guard", "Liquid Silicone", "Smooth"]
  },
  {
    id: "px-02",
    name: "Heritage Horween Tan Leather",
    brand: "Google Pixel",
    phoneModel: "Pixel 8 Pro",
    category: "backcovers",
    styleCategory: "Luxe Leather",
    description: "Natural patina leather that ages with grace, reinforced with TPU side-bumpers.",
    price: 599,
    originalPrice: 899,
    discountPercentage: 33,
    image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Patina Leather", "Subtle Elegance", "Raised Edges"]
  },
  {
    id: "px-03",
    name: "Tactical Bumper Pro DropSafe",
    brand: "Google Pixel",
    phoneModel: "Pixel 8 Pro",
    category: "backcovers",
    styleCategory: "Military Armor",
    description: "Air-cushion corner bumpers rated for 12-foot drops onto solid concrete surfaces.",
    price: 549,
    originalPrice: 849,
    discountPercentage: 35,
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["12ft Drop Tested", "Tactical", "Reinforced"]
  },

  // 5. Xiaomi 14 Ultra
  {
    id: "xi-01",
    name: "Leica Classic Camera Grip Shell",
    brand: "Xiaomi",
    phoneModel: "Xiaomi 14 Ultra",
    category: "backcovers",
    styleCategory: "Luxe Leather",
    description: "Ergonomic tactile grip contour designed specifically for photography enthusiasts.",
    price: 599,
    originalPrice: 899,
    discountPercentage: 33,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Camera Grip", "Vintage Vibe", "Lens Bezel"]
  },
  {
    id: "xi-02",
    name: "Aerospace Kevlar Ultra Shield",
    brand: "Xiaomi",
    phoneModel: "Xiaomi 14 Ultra",
    category: "backcovers",
    styleCategory: "Carbon Fiber",
    description: "Featherlight 12-gram aramid weave providing impenetrable puncture resistance.",
    price: 649,
    originalPrice: 999,
    discountPercentage: 35,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Aramid Weave", "Ultralight", "Anti-Scratch"]
  },
  {
    id: "xi-03",
    name: "Crystal Tempered Glass Backplate",
    brand: "Xiaomi",
    phoneModel: "Xiaomi 14 Ultra",
    category: "backcovers",
    styleCategory: "Crystal Clear",
    description: "9H scratch-resistant rear glass panel with shock absorbing TPU polymer rim.",
    price: 499,
    originalPrice: 799,
    discountPercentage: 38,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["9H Glass", "Crystal Clarity", "Shock Perimeter"]
  },

  // 6. Nothing Phone (2)
  {
    id: "no-01",
    name: "Glyph Aura Transparent Bumper",
    brand: "Nothing",
    phoneModel: "Nothing Phone (2)",
    category: "backcovers",
    styleCategory: "Crystal Clear",
    description: "Ultra-clarity polycarbonate rear designed to highlight the iconic Glyph LEDs flawlessly.",
    price: 449,
    originalPrice: 699,
    discountPercentage: 36,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Glyph Optimized", "Zero Fogging", "Drop Guard"]
  },
  {
    id: "no-02",
    name: "Cyber Grid Neon Translucent",
    brand: "Nothing",
    phoneModel: "Nothing Phone (2)",
    category: "backcovers",
    styleCategory: "Holographic Art",
    description: "Futuristic printed circuitry accents that illuminate alongside rear LED notifications.",
    price: 499,
    originalPrice: 799,
    discountPercentage: 38,
    image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Futuristic", "Cyber Grid", "Translucent"]
  },
  {
    id: "no-03",
    name: "Matte Smoke Stealth Armor",
    brand: "Nothing",
    phoneModel: "Nothing Phone (2)",
    category: "backcovers",
    styleCategory: "Matte Cyber",
    description: "Semi-frosted smoky black armor frame with tactile clicky anodized buttons.",
    price: 479,
    originalPrice: 749,
    discountPercentage: 36,
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Smoky Matte", "Anodized Buttons", "Minimalist"]
  }
];

// Curated Collections Items (can be filtered by styleCategory)
export const COLLECTIONS_ITEMS: ProductItem[] = [
  ...PHONE_DESIGNS,
  {
    id: "col-01",
    name: "Midnight MagSafe Leather Luxe",
    brand: "Apple",
    phoneModel: "iPhone 15 Pro",
    category: "backcovers",
    styleCategory: "Luxe Leather",
    description: "Full grain European top leather with gold accent metallic camera bezel.",
    price: 649,
    originalPrice: 999,
    discountPercentage: 35,
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Luxe Leather", "MagSafe", "Gold Accent"]
  },
  {
    id: "col-02",
    name: "Sub-Zero Frosted Armor Pro",
    brand: "Samsung",
    phoneModel: "Galaxy S24 Plus",
    category: "backcovers",
    styleCategory: "Military Armor",
    description: "Heavy-duty poly-carbonate chassis with corner dampers for industrial defense.",
    price: 599,
    originalPrice: 899,
    discountPercentage: 33,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Armor", "Impact Ready", "Rugged"]
  },
  {
    id: "col-03",
    name: "Neon Prism Geometric Wave",
    brand: "OnePlus",
    phoneModel: "OnePlus 12R",
    category: "backcovers",
    styleCategory: "Holographic Art",
    description: "Shifting chromatic gradients that dance under sunlight and city neon lights.",
    price: 499,
    originalPrice: 799,
    discountPercentage: 38,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Chromatic", "Prism", "Neon"]
  },
  {
    id: "col-04",
    name: "Pure Optic Anti-Yellowing Clear",
    brand: "Google Pixel",
    phoneModel: "Pixel 8",
    category: "backcovers",
    styleCategory: "Crystal Clear",
    description: "German raw Bayer polycarbonate offering absolute transparency with 0% yellowing.",
    price: 399,
    originalPrice: 599,
    discountPercentage: 33,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Pure Clear", "Anti-Dust", "Bare Minimum"]
  },
  {
    id: "col-05",
    name: "Aerospace Carbon MagArmor",
    brand: "Apple",
    phoneModel: "iPhone 14 Pro",
    category: "backcovers",
    styleCategory: "Carbon Fiber",
    description: "Authentic carbon weave with built-in magnetic array for high-speed wireless docks.",
    price: 699,
    originalPrice: 1099,
    discountPercentage: 36,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["MagSafe", "Carbon Weave", "Military Spec"]
  },
  {
    id: "col-06",
    name: "Nordic Slate Nano-Matte Touch",
    brand: "Samsung",
    phoneModel: "Galaxy S23 Ultra",
    category: "backcovers",
    styleCategory: "Matte Cyber",
    description: "Silky baby-skin texture that repels grease, oil, and sweat during continuous use.",
    price: 449,
    originalPrice: 699,
    discountPercentage: 36,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Nano Matte", "Oleophobic", "Velvet Touch"]
  }
];

// Accessories Area (Fast chargers, cables, powerbanks, earphones, screenguards, camera protectors)
export const ACCESSORIES_ITEMS: ProductItem[] = [
  {
    id: "acc-01",
    name: "65W GaN III Dual USB-C Fast Charger",
    brand: "Cover Point Tech",
    category: "chargers",
    description: "Gallium Nitride high-efficiency pocket charger for iPhones, MacBooks, and Androids.",
    price: 999,
    originalPrice: 1599,
    discountPercentage: 38,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["GaN Tech", "Dual Port", "65W Fast Charge"]
  },
  {
    id: "acc-02",
    name: "ArmorBraid 100W PD Type-C to C Cable (1.8m)",
    brand: "Cover Point Tech",
    category: "accessory-wires",
    description: "Bulletproof Kevlar braided wire tested for 30,000+ bends with LED wattage indicator.",
    price: 349,
    originalPrice: 599,
    discountPercentage: 42,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["100W PD", "Kevlar Braided", "Digital Display"]
  },
  {
    id: "acc-03",
    name: "MagSprint 10,000mAh Magnetic Powerbank",
    brand: "Cover Point Tech",
    category: "powerbanks",
    description: "Strong 15W wireless snap-on magnetic pack with pass-through charging and kickstand.",
    price: 1499,
    originalPrice: 2299,
    discountPercentage: 35,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["15W MagSafe", "10000mAh", "Slim Pocket"]
  },
  {
    id: "acc-04",
    name: "StudioBass Type-C Hi-Res Metal Earphones",
    brand: "Cover Point Tech",
    category: "earphones",
    description: "Lossless DAC chip inside, aircraft-grade metal chamber with deep thumping bass.",
    price: 499,
    originalPrice: 899,
    discountPercentage: 44,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Built-in DAC", "Hi-Res Audio", "Noise Isolating"]
  },
  {
    id: "acc-05",
    name: "Sapphire 9H Camera Lens Diamond Ring (Set)",
    brand: "Cover Point Tech",
    category: "screenguards",
    description: "Individual titanium rim protectors with anti-reflective AR coating for zero flash glare.",
    price: 299,
    originalPrice: 499,
    discountPercentage: 40,
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Sapphire 9H", "Zero Glare", "Precision Fit"]
  },
  {
    id: "acc-06",
    name: "MagHold 360° Magnetic Car Air Vent Mount",
    brand: "Cover Point Tech",
    category: "accessory-wires",
    description: "Industrial strength 20x N52 magnets that keep phone rock steady on rocky Indian roads.",
    price: 449,
    originalPrice: 799,
    discountPercentage: 44,
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["360 Rotation", "Super Strong N52", "Anti-Vibrate"]
  },
  {
    id: "acc-07",
    name: "UV Liquid Full Glue Curved Tempered Glass",
    brand: "Cover Point Tech",
    category: "screenguards",
    description: "Edge-to-edge optical clear adhesive glass installed with store UV curing machine.",
    price: 399,
    originalPrice: 699,
    discountPercentage: 43,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Edge-to-Edge", "In-Store UV Curing", "Full Touch Sensitive"]
  },
  {
    id: "acc-08",
    name: "3-in-1 Aluminum Fast Multi-Charging Cable",
    brand: "Cover Point Tech",
    category: "accessory-wires",
    description: "Charges Lightning, Type-C, and Micro-USB devices concurrently with 3.5A total power.",
    price: 299,
    originalPrice: 499,
    discountPercentage: 40,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["3-in-1", "Tangle Free", "Universal"]
  }
];

// One product example of each flagship category for the Categories Section
export const CATEGORY_SHOWCASE = [
  {
    category: "Mobile Backcovers",
    slug: "backcovers",
    productName: "Cyber Neon Matte MagSafe",
    price: 499,
    originalPrice: 799,
    tagline: "Ultra-slim shock absorption with designer aesthetics",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=700&q=80",
    highlight: "1000+ Models in Stock"
  },
  {
    category: "Screen Guards & Tempered",
    slug: "screenguards",
    productName: "9H Edge-to-Edge Privacy Diamond Shield",
    price: 299,
    originalPrice: 499,
    tagline: "Free in-store bubble-free machine alignment in 3 minutes",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80",
    highlight: "Free Store Fitting"
  },
  {
    category: "Customized Backcovers",
    slug: "custom-backcovers",
    productName: "Personalized Photo / Monogram Glass Case",
    price: 549,
    originalPrice: 899,
    tagline: "Bring your photo, artwork, or logo - ready in 20 minutes!",
    image: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?auto=format&fit=crop&w=700&q=80",
    highlight: "Ready in 20 Mins"
  },
  {
    category: "Fast Chargers & Adapters",
    slug: "chargers",
    productName: "65W GaN III Fast Multi-Port Adapter",
    price: 999,
    originalPrice: 1599,
    tagline: "Universal PD 3.0 charge for phones, tabs & laptops",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80",
    highlight: "6 Months Replacement"
  },
  {
    category: "Durable Accessory Wires",
    slug: "accessory-wires",
    productName: "100W ArmorBraid Kevlar Cables",
    price: 349,
    originalPrice: 599,
    tagline: "Triple-reinforced alloy joints tested for 30,000 bends",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=700&q=80",
    highlight: "Bend Resistant"
  },
  {
    category: "Wireless Powerbanks",
    slug: "powerbanks",
    productName: "MagSprint 10,000mAh Magnetic Wireless",
    price: 1499,
    originalPrice: 2299,
    tagline: "Strong magnetic hold with fast wireless charge on the go",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=700&q=80",
    highlight: "Pocket Slim"
  },
  {
    category: "Hi-Res Earphones",
    slug: "earphones",
    productName: "StudioBass DAC Type-C Wired Earphones",
    price: 499,
    originalPrice: 899,
    tagline: "Crystal clear call clarity & deep rich punchy acoustic bass",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
    highlight: "Studio Quality"
  },
  {
    category: "Express Phone Repairing",
    slug: "repairing",
    productName: "Express Display & Battery Replacement",
    price: 799,
    originalPrice: 1299,
    tagline: "Certified technicians with on-the-spot walk-in repairs",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    highlight: "30-Min Fast Turnaround"
  }
];

// Screen Guards Specific Catalog Data for phone search
export const SCREEN_GUARDS_CATALOG: ProductItem[] = [
  {
    id: "sg-01",
    name: "9D Curved Edge Tempered Glass",
    brand: "Universal / All Brands",
    category: "screenguards",
    description: "Oleophobic coated 9H hardness tempered glass with silk-print curved bezel.",
    price: 249,
    originalPrice: 449,
    discountPercentage: 44,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["9H Hardness", "Silk Bezel", "Free Fit"]
  },
  {
    id: "sg-02",
    name: "2-Way Privacy Anti-Peeping Glass",
    brand: "Universal / All Brands",
    category: "screenguards",
    description: "28-degree micro-louver technology keeps your confidential chats hidden from neighbors.",
    price: 349,
    originalPrice: 599,
    discountPercentage: 42,
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Privacy", "Anti-Spy", "High Clarity"]
  },
  {
    id: "sg-03",
    name: "Matte Anti-Glare Gamer Membrane",
    brand: "Universal / All Brands",
    category: "screenguards",
    description: "Zero fingerprint residue and zero light reflections for buttery smooth mobile gaming.",
    price: 299,
    originalPrice: 499,
    discountPercentage: 40,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["Matte", "Anti-Fingerprint", "Gaming"]
  },
  {
    id: "sg-04",
    name: "UV Optically Clear Adhesive Curved Guard",
    brand: "Universal / All Brands",
    category: "screenguards",
    description: "Liquid adhesive cured under store UV lamp, engineered for Samsung Ultra curved displays.",
    price: 499,
    originalPrice: 849,
    discountPercentage: 41,
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=700&q=80",
    inStock: true,
    tags: ["UV Liquid", "Curved Screen", "Store Installation"]
  }
];

// Express Repair Services
export const REPAIR_SERVICES: RepairServiceItem[] = [
  {
    id: "rep-01",
    title: "Display & Touch Screen Replacement",
    duration: "30 - 45 Minutes",
    warranty: "6 Months Warranty",
    priceStartingAt: 1299,
    description: "OEM Grade & Original displays with TrueTone / High Refresh Rate retention.",
    iconName: "Smartphone"
  },
  {
    id: "rep-02",
    title: "Battery Health Restoration & Replacement",
    duration: "20 - 30 Minutes",
    warranty: "1 Year Replacement Warranty",
    priceStartingAt: 899,
    description: "Brand new high-density battery cells restoring 100% capacity and zero heating.",
    iconName: "BatteryCharging"
  },
  {
    id: "rep-03",
    title: "Charging Port & Mic IC Repair",
    duration: "25 Minutes",
    warranty: "3 Months Warranty",
    priceStartingAt: 499,
    description: "Solves slow charging, loose connection, and intermittent microphone sound issues.",
    iconName: "Zap"
  },
  {
    id: "rep-04",
    title: "Rear Back Glass Laser Repair",
    duration: "45 Minutes",
    warranty: "Workmanship Guarantee",
    priceStartingAt: 999,
    description: "Precision non-invasive laser separation preventing internal component heat damage.",
    iconName: "ShieldCheck"
  },
  {
    id: "rep-05",
    title: "Camera Lens & OIS Sensor Realignment",
    duration: "20 Minutes",
    warranty: "6 Months Warranty",
    priceStartingAt: 399,
    description: "Fix cracked external camera glasses, foggy pictures, and lens jittering vibrations.",
    iconName: "Camera"
  },
  {
    id: "rep-06",
    title: "Water Ingress Ultrasonic Diagnostics",
    duration: "60 Minutes",
    warranty: "Diagnostic Inspection",
    priceStartingAt: 599,
    description: "Ultrasonic chemical circuit board bath removing corrosion and short circuits.",
    iconName: "Droplets"
  }
];

// Verified Customer Reviews
export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-01",
    author: "Rohan Verma",
    device: "iPhone 15 Pro",
    servicePurchased: "Aramid Carbon Case + Privacy Guard",
    rating: 5,
    comment: "The staff at Cover Point fitted the privacy tempered glass without a single bubble in just 2 minutes! Also picked up the carbon case. Hands down the best offline shop in Cyber Hub.",
    date: "3 days ago",
    verifiedWalkIn: true
  },
  {
    id: "rev-02",
    author: "Pooja Malhotra",
    device: "Samsung S24 Ultra",
    servicePurchased: "UV Curved Glass + Camera Lens Protector",
    rating: 5,
    comment: "I was terrified of getting bubbles on my S24 Ultra curved screen. Cover Point used an actual UV curing box and it looks factory fitted. Price was nearly half of showroom quotes!",
    date: "1 week ago",
    verifiedWalkIn: true
  },
  {
    id: "rev-03",
    author: "Amanpreet Singh",
    device: "OnePlus 11",
    servicePurchased: "Express Display Replacement",
    rating: 5,
    comment: "Dropped my phone and the screen went completely black. They fixed it right in front of me in 35 minutes! Colors and 120Hz refresh rate look identical to original.",
    date: "2 weeks ago",
    verifiedWalkIn: true
  },
  {
    id: "rev-04",
    author: "Kriti Sharma",
    device: "Pixel 8 Pro",
    servicePurchased: "Custom Monogram Leather Case",
    rating: 5,
    comment: "Got a customized backcover with my initials printed. The quality feels so luxurious and premium. Every friend of mine has asked where I got it!",
    date: "3 weeks ago",
    verifiedWalkIn: true
  }
];

