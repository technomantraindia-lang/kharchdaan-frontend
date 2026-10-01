export const ALL_PRODUCTS = [
  {
    id: 'prod-atta-1',
    name: 'Aashirvaad Superior MP Shudh Chakki Atta',
    brand: 'Aashirvaad',
    weight: '5 Kg',
    price: 245,
    mrp: 290,
    discount: '15% OFF',
    category: 'Daily Needs',
    subCategory: 'Flour & Grains',
    image: '/images/aashirvaad-atta.jpg',
    images: [
      '/images/aashirvaad-atta.jpg',
      '/images/aashirvaad-atta.jpg'
    ],
    cashbackPercent: 100,
    cashbackAmount: 25,
    pvPoints: 45,
    rating: 4.9,
    reviews: 328,
    inStock: true,
    featured: true,
    shortDescription: '100% pure whole wheat grain ground in traditional chakki process for ultra-soft, fluffy rotis.',
    description: 'Aashirvaad Shudh Chakki Atta is made from the grains which are heavy on the palm, golden amber in colour and hard in bite. It is carefully ground using modern chakki process which ensures that Aashirvaad Atta contains 0% Maida and 100% pure Sampoorna Atta.',
    variants: [
      { id: 'v1', size: '1 Kg', price: 58, mrp: 65 },
      { id: 'v2', size: '5 Kg', price: 245, mrp: 290, isDefault: true },
      { id: 'v3', size: '10 Kg', price: 475, mrp: 560 }
    ],
    specifications: {
      'Brand': 'Aashirvaad (ITC Ltd.)',
      'Diet Type': 'Vegetarian',
      'Form': 'Flour (Chakki Ground)',
      'Storage Instructions': 'Store in a cool, dry and hygienic airtight container',
      'Country of Origin': 'India',
      'FSSAI License': '10012031000085'
    },
    ingredients: '100% Whole Wheat Grain (Triticum aestivum), Zero Maida, Natural Dietary Fibre.'
  },
  {
    id: 'prod-oil-2',
    name: 'Fortune Sunlite Refined Sunflower Oil',
    brand: 'Fortune',
    weight: '1 Litre',
    price: 165,
    mrp: 195,
    discount: '15% OFF',
    category: 'Daily Needs',
    subCategory: 'Cooking Oils & Ghee',
    image: '/images/fortune-oil.jpg',
    images: [
      '/images/fortune-oil.jpg'
    ],
    cashbackPercent: 100,
    cashbackAmount: 18,
    pvPoints: 32,
    rating: 4.8,
    reviews: 215,
    inStock: true,
    featured: true,
    shortDescription: 'Light and healthy refined sunflower oil enriched with Vitamins A, D & E.',
    description: 'Fortune Sunlite Refined Sunflower Oil is a light, healthy and easily digestible cooking oil. Rich in natural antioxidants and Vitamin E, it keeps your heart healthy while maintaining the natural flavors of authentic Indian cooking.',
    variants: [
      { id: 'v1', size: '1 Litre', price: 165, mrp: 195, isDefault: true },
      { id: 'v2', size: '5 Litres (Jar)', price: 790, mrp: 950 }
    ],
    specifications: {
      'Brand': 'Fortune (Adani Wilmar)',
      'Diet Type': 'Vegetarian',
      'Form': 'Liquid Oil',
      'Specialty': 'Rich in Vitamin A, D, E',
      'Country of Origin': 'India'
    },
    ingredients: 'Refined Sunflower Oil, Vitamin A, Vitamin D, Natural Antioxidants.'
  },
  {
    id: 'prod-tea-5',
    name: 'Tata Tea Premium Desh Ki Chai Blend',
    brand: 'Tata Tea',
    weight: '250 g',
    price: 135,
    mrp: 160,
    discount: '16% OFF',
    category: 'Daily Needs',
    subCategory: 'Tea & Coffee',
    image: '/images/tata-tea.jpg',
    images: [
      '/images/tata-tea.jpg'
    ],
    cashbackPercent: 100,
    cashbackAmount: 15,
    pvPoints: 28,
    rating: 4.9,
    reviews: 276,
    inStock: true,
    featured: true,
    shortDescription: 'Unique blend of fine tea leaves and big strong grains for unmatched aroma and taste.',
    description: 'Tata Tea Premium gives you the unique combination of bada daana for exquisite strength and chhota daana for superb aroma. Expertly selected by tea masters from Assam and Dooars gardens.',
    variants: [
      { id: 'v1', size: '250 g', price: 135, mrp: 160, isDefault: true },
      { id: 'v2', size: '500 g', price: 260, mrp: 310 },
      { id: 'v3', size: '1 Kg', price: 495, mrp: 590 }
    ],
    specifications: {
      'Brand': 'Tata Consumer Products',
      'Caffeine Content': 'Medium',
      'Country of Origin': 'India'
    },
    ingredients: '100% Black CTC Tea Granules.'
  },
  {
    id: 'prod-surf-4',
    name: 'Surf Excel Easy Wash Detergent Powder',
    brand: 'Surf Excel',
    weight: '1 Kg',
    price: 175,
    mrp: 210,
    discount: '17% OFF',
    category: 'Home',
    subCategory: 'Laundry & Cleaning',
    image: '/images/surf-excel.jpg',
    images: [
      '/images/surf-excel.jpg'
    ],
    cashbackPercent: 100,
    cashbackAmount: 20,
    pvPoints: 35,
    rating: 4.9,
    reviews: 189,
    inStock: true,
    featured: true,
    shortDescription: 'Superfine powder with power of 10 hands to remove tough stains effortlessly.',
    description: 'Surf Excel Easy Wash delivers ultra-fast stain removal with advanced cleaning particles that penetrate deep into fabrics, keeping your family clothes sparkling white and fresh.',
    variants: [
      { id: 'v1', size: '1 Kg', price: 175, mrp: 210, isDefault: true },
      { id: 'v2', size: '3 Kg (Economy Pack)', price: 485, mrp: 580 }
    ],
    specifications: {
      'Brand': 'Surf Excel (Hindustan Unilever)',
      'Item Form': 'Fine Granular Powder',
      'Country of Origin': 'India'
    },
    ingredients: 'Biodegradable Active Surfactants, Optical Brighteners, Stain Dislodging Enzymes, Fresh Fragrance.'
  },
  {
    id: 'prod-dettol-6',
    name: 'Dettol Skincare Germ Protection Handwash',
    brand: 'Dettol',
    weight: '200 ml',
    price: 120,
    mrp: 145,
    discount: '17% OFF',
    category: 'Health',
    subCategory: 'Personal Care & Hygiene',
    image: '/images/dettol-handwash.jpg',
    images: [
      '/images/dettol-handwash.jpg'
    ],
    cashbackPercent: 100,
    cashbackAmount: 14,
    pvPoints: 24,
    rating: 4.8,
    reviews: 194,
    inStock: true,
    featured: true,
    shortDescription: '10x better protection against illness-causing germs with moisturizing glycerine.',
    description: 'Dettol Skincare Liquid Handwash is specially formulated with added moisture to help protect against 100 illness-causing germs while keeping your hands soft, smooth and delicately fragrant.',
    variants: [
      { id: 'v1', size: '200 ml (Pump)', price: 120, mrp: 145, isDefault: true },
      { id: 'v2', size: '750 ml (Refill Pouch)', price: 195, mrp: 240 }
    ],
    specifications: {
      'Brand': 'Dettol (Reckitt Benckiser)',
      'Form': 'Liquid Soap',
      'Country of Origin': 'India'
    },
    ingredients: 'Aqua, Sodium Laureth Sulfate, Glycerine, PCMX Antibacterial Active, Skin Conditioning Emollients.'
  },
  {
    id: 'prod-choc-3',
    name: 'Cadbury Dairy Milk Silk Chocolate Bar',
    brand: 'Cadbury',
    weight: '100 g',
    price: 70,
    mrp: 85,
    discount: '18% OFF',
    category: 'Food',
    subCategory: 'Confectionery & Sweets',
    image: '/images/cadbury-dairy-milk.jpg',
    images: [
      '/images/cadbury-dairy-milk.jpg'
    ],
    cashbackPercent: 100,
    cashbackAmount: 8,
    pvPoints: 15,
    rating: 5.0,
    reviews: 412,
    inStock: true,
    featured: true,
    shortDescription: 'Creamy and smooth milk chocolate bar crafted with the finest cocoa beans.',
    description: 'Indulge in the rich, delicious taste of Cadbury Dairy Milk. Made from 100% sustainably sourced cocoa, providing a melt-in-the-mouth texture loved by Indian families.',
    variants: [
      { id: 'v1', size: '100 g', price: 70, mrp: 85, isDefault: true },
      { id: 'v2', size: '150 g (Silk Edition)', price: 110, mrp: 135 }
    ],
    specifications: {
      'Brand': 'Cadbury (Mondelez India)',
      'Flavor': 'Milk Chocolate',
      'Country of Origin': 'India'
    },
    ingredients: 'Sugar, Milk Solids, Cocoa Butter, Cocoa Solids, Permitted Emulsifiers and Flavors.'
  },
  {
    id: 'prod-rice-7',
    name: 'Daawat Rozana Gold Basmati Rice',
    brand: 'Daawat',
    weight: '5 Kg',
    price: 360,
    mrp: 440,
    discount: '18% OFF',
    category: 'Daily Needs',
    subCategory: 'Flour & Grains',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&auto=format&fit=crop&q=80'
    ],
    cashbackPercent: 100,
    cashbackAmount: 40,
    pvPoints: 65,
    rating: 4.8,
    reviews: 145,
    inStock: true,
    featured: false,
    shortDescription: 'Fluffy, long grain aromatic basmati rice for daily family meals and biryanis.',
    description: 'Daawat Rozana Gold is pure basmati rice specially processed for daily cooking. Each grain elongates to double its size, non-sticky and filled with authentic aroma.',
    variants: [
      { id: 'v1', size: '1 Kg', price: 85, mrp: 100 },
      { id: 'v2', size: '5 Kg', price: 360, mrp: 440, isDefault: true }
    ],
    specifications: {
      'Brand': 'Daawat (LT Foods)',
      'Grain Type': 'Long Grain Basmati',
      'Country of Origin': 'India'
    },
    ingredients: '100% Aged Basmati Rice Grains.'
  },
  {
    id: 'prod-ghee-8',
    name: 'Amul Pure Desi Cow Ghee (Tin Pack)',
    brand: 'Amul',
    weight: '1 Litre',
    price: 580,
    mrp: 650,
    discount: '11% OFF',
    category: 'Daily Needs',
    subCategory: 'Cooking Oils & Ghee',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&auto=format&fit=crop&q=80'
    ],
    cashbackPercent: 100,
    cashbackAmount: 50,
    pvPoints: 95,
    rating: 5.0,
    reviews: 388,
    inStock: true,
    featured: false,
    shortDescription: 'Traditional granular golden desi cow ghee for wholesome family nutrition and aroma.',
    description: 'Amul Cow Ghee is made from pure cow milk fat. Rich in natural Fat Soluble Vitamins A, D, E and K, giving an authentic aroma to dal tadka, sweets, and parathas.',
    variants: [
      { id: 'v1', size: '500 ml', price: 300, mrp: 335 },
      { id: 'v2', size: '1 Litre (Tin)', price: 580, mrp: 650, isDefault: true }
    ],
    specifications: {
      'Brand': 'Amul (GCMMF)',
      'Diet Type': 'Vegetarian',
      'Country of Origin': 'India'
    },
    ingredients: 'Pure Cow Milk Fat (Desi Ghee).'
  }
];

export const SERVICES_PACKAGES = [
  {
    id: 'service-pkg-1',
    title: 'Monthly Family Grocery Hamper (Super Saver)',
    tag: 'MOST POPULAR SUBSCRIPTION',
    badgeColor: 'orange',
    price: 1999,
    mrp: 2450,
    discount: '₹451 SAVINGS',
    cashback: '₹200 Instant Cashback',
    pv: '350 PV Matrix Points',
    image: '/images/aashirvaad-atta.jpg',
    itemsIncluded: [
      'Aashirvaad Shudh Chakki Atta (5 Kg)',
      'Fortune Sunlite Sunflower Oil (2 Litres)',
      'Tata Tea Premium (500 g)',
      'Daawat Rozana Basmati Rice (2 Kg)',
      'Surf Excel Easy Wash Detergent (1 Kg)',
      'Dettol Skincare Handwash (200 ml)'
    ],
    description: 'Complete monthly grocery package curated for a family of 4. Automatically delivered to your doorstep every month with maximum 20-level compensation team royalty.'
  },
  {
    id: 'service-pkg-2',
    title: 'Neighbourhood Kirana Merchant Partner QR Program',
    tag: 'MERCHANT ONBOARDING',
    badgeColor: 'green',
    price: 0,
    mrp: 0,
    discount: '100% FREE',
    cashback: 'Zero Transaction Fee',
    pv: 'Unlimited Customer Footfalls',
    image: '/images/retail-owner.jpg',
    itemsIncluded: [
      'Official KharchDaan Merchant QR Standee',
      'Free Listing on KharchDaan Merchant App',
      'Direct Wallet Settlement via Instant UPI',
      'Earn Commission on every consumer scan'
    ],
    description: 'Transform your local grocery store into a digital powerhouse. Receive customer orders and payments from 25,000+ local KharchDaan members.'
  },
  {
    id: 'service-pkg-3',
    title: 'Family Health & Ayurvedic Care Hamper',
    tag: 'WELLNESS BUNDLE',
    badgeColor: 'purple',
    price: 1499,
    mrp: 1850,
    discount: '₹351 SAVINGS',
    cashback: '₹150 Instant Cashback',
    pv: '280 PV Matrix Points',
    image: '/images/dettol-handwash.jpg',
    itemsIncluded: [
      'Dabur Chyawanprash Immunity Booster (1 Kg)',
      'Patanjali Pure Honey (500 g)',
      'Organic Tulsi Green Tea Pack (25 Bags)',
      'Dettol Handwash Skincare Pack (2x200 ml)',
      'Ayurvedic Herbal Toothpaste (200 g)'
    ],
    description: 'Daily herbal and ayurvedic wellness essentials bundle for complete family immunity, backed by Geeta Sevashram Pratishthan wellness guidelines.'
  }
];
