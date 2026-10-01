export const ALL_PRODUCTS = [
  // ==========================================
  // 1. GROCERY & STAPLES (Daily Needs)
  // ==========================================
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
    images: ['/images/aashirvaad-atta.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 25,
    pvPoints: 45,
    rating: 4.9,
    reviews: 328,
    inStock: true,
    featured: true,
    shortDescription: '100% pure whole wheat grain ground in traditional chakki process for ultra-soft, fluffy rotis.',
    description: 'Aashirvaad Shudh Chakki Atta is made from the grains which are heavy on the palm, golden amber in colour and hard in bite. Ground using modern chakki process which ensures 0% Maida and 100% pure Sampoorna Atta.',
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
    images: ['/images/fortune-oil.jpg'],
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
    id: 'prod-oil-mustard',
    name: 'Fortune Kachi Ghani Pure Mustard Oil',
    brand: 'Fortune',
    weight: '1 Litre',
    price: 175,
    mrp: 205,
    discount: '15% OFF',
    category: 'Daily Needs',
    subCategory: 'Cooking Oils & Ghee',
    image: '/images/fortune-oil.jpg',
    images: ['/images/fortune-oil.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 20,
    pvPoints: 35,
    rating: 4.9,
    reviews: 184,
    inStock: true,
    featured: false,
    shortDescription: 'Cold-pressed authentic mustard oil with strong pungency and high smoking point.',
    description: 'Fortune Kachi Ghani Mustard Oil is traditionally cold pressed from the finest quality mustard seeds, preserving natural pungency, aroma and essential omega fatty acids.',
    variants: [
      { id: 'v1', size: '1 Litre Pouch', price: 175, mrp: 205, isDefault: true },
      { id: 'v2', size: '5 Litre Jar', price: 825, mrp: 980 }
    ],
    specifications: {
      'Brand': 'Fortune (Adani Wilmar)',
      'Extraction Method': 'Cold Pressed (Kachi Ghani)',
      'Country of Origin': 'India'
    },
    ingredients: '100% Pure Mustard Oil.'
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
    image: '/images/daawat-rice.jpg',
    images: ['/images/daawat-rice.jpg'],
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
    id: 'prod-dal-toor',
    name: 'Tata Sampann Unpolished Toor Dal',
    brand: 'Tata Consumer',
    weight: '1 Kg',
    price: 175,
    mrp: 215,
    discount: '19% OFF',
    category: 'Daily Needs',
    subCategory: 'Pulses & Dals',
    image: '/images/tata-dal.jpg',
    images: ['/images/tata-dal.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 20,
    pvPoints: 34,
    rating: 4.9,
    reviews: 260,
    inStock: true,
    featured: true,
    shortDescription: '100% unpolished toor dal rich in natural plant protein and dietary fiber.',
    description: 'Tata Sampann Dals do not undergo any artificial polishing with water, oil or leather, thereby retaining their natural protein goodness and wholesome taste.',
    variants: [
      { id: 'v1', size: '1 Kg', price: 175, mrp: 215, isDefault: true },
      { id: 'v2', size: '2 Kg Pack', price: 340, mrp: 420 }
    ],
    specifications: {
      'Brand': 'Tata Sampann',
      'Type': 'Unpolished Pigeon Pea (Toor Dal)',
      'Country of Origin': 'India'
    },
    ingredients: '100% Pure Unpolished Toor Dal.'
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
    image: '/images/amul-ghee.jpg',
    images: ['/images/amul-ghee.jpg'],
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
  },

  // ==========================================
  // 2. FOOD & BEVERAGES (Food)
  // ==========================================
  {
    id: 'prod-tea-5',
    name: 'Tata Tea Premium Desh Ki Chai Blend',
    brand: 'Tata Tea',
    weight: '250 g',
    price: 135,
    mrp: 160,
    discount: '16% OFF',
    category: 'Food',
    subCategory: 'Tea & Coffee',
    image: '/images/tata-tea.jpg',
    images: ['/images/tata-tea.jpg'],
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
    id: 'prod-tea-gold',
    name: 'Tata Tea Gold Rich Aroma & Flavor',
    brand: 'Tata Tea',
    weight: '500 g',
    price: 310,
    mrp: 375,
    discount: '17% OFF',
    category: 'Food',
    subCategory: 'Tea & Coffee',
    image: '/images/tata-tea.jpg',
    images: ['/images/tata-tea.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 35,
    pvPoints: 55,
    rating: 5.0,
    reviews: 342,
    inStock: true,
    featured: true,
    shortDescription: 'Gently rolled 15% long tea leaves blended with Assam CTC for irresistible aroma.',
    description: 'Tata Tea Gold is an exquisite blend of high-grown Assam black tea with 15% gently rolled long tea leaves that release rich taste and captivating aroma with every brew.',
    variants: [
      { id: 'v1', size: '500 g', price: 310, mrp: 375, isDefault: true },
      { id: 'v2', size: '1 Kg Value Pack', price: 590, mrp: 720 }
    ],
    specifications: {
      'Brand': 'Tata Consumer Products',
      'Aroma': 'Exquisite Long Leaf Aroma',
      'Country of Origin': 'India'
    },
    ingredients: 'Assam CTC Tea with 15% Long Tea Leaves.'
  },
  {
    id: 'prod-choc-3',
    name: 'Cadbury Dairy Milk Silk Chocolate Bar',
    brand: 'Cadbury',
    weight: '150 g',
    price: 110,
    mrp: 135,
    discount: '18% OFF',
    category: 'Food',
    subCategory: 'Chocolates & Sweets',
    image: '/images/cadbury-dairy-milk.jpg',
    images: ['/images/cadbury-dairy-milk.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 12,
    pvPoints: 22,
    rating: 5.0,
    reviews: 412,
    inStock: true,
    featured: true,
    shortDescription: 'Creamy and smooth milk chocolate bar crafted with the finest cocoa beans.',
    description: 'Indulge in the rich, delicious taste of Cadbury Dairy Milk Silk. Made from 100% sustainably sourced cocoa, providing a melt-in-the-mouth texture loved by Indian families.',
    variants: [
      { id: 'v1', size: '60 g Regular', price: 45, mrp: 55 },
      { id: 'v2', size: '150 g (Silk Edition)', price: 110, mrp: 135, isDefault: true }
    ],
    specifications: {
      'Brand': 'Cadbury (Mondelez India)',
      'Flavor': 'Milk Chocolate',
      'Country of Origin': 'India'
    },
    ingredients: 'Sugar, Milk Solids, Cocoa Butter, Cocoa Solids, Permitted Emulsifiers and Flavors.'
  },
  {
    id: 'prod-choc-celeb',
    name: 'Cadbury Celebrations Rich Chocolate Gift Pack',
    brand: 'Cadbury',
    weight: '350 g',
    price: 240,
    mrp: 295,
    discount: '19% OFF',
    category: 'Food',
    subCategory: 'Chocolates & Sweets',
    image: '/images/cadbury-dairy-milk.jpg',
    images: ['/images/cadbury-dairy-milk.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 25,
    pvPoints: 48,
    rating: 4.9,
    reviews: 198,
    inStock: true,
    featured: false,
    shortDescription: 'Festive assortment of Dairy Milk, 5-Star, and Gems for celebrations and gifting.',
    description: 'Cadbury Celebrations brings joy to every family gathering with an iconic mix of favorite Cadbury treats in a royal gift box.',
    variants: [
      { id: 'v1', size: '180 g Mini Box', price: 130, mrp: 160 },
      { id: 'v2', size: '350 g Festive Gift Box', price: 240, mrp: 295, isDefault: true }
    ],
    specifications: {
      'Brand': 'Cadbury (Mondelez India)',
      'Occasion': 'Festive & Family Gifting',
      'Country of Origin': 'India'
    },
    ingredients: 'Assorted Cadbury chocolates and confectionery treats.'
  },
  {
    id: 'prod-snack-maggi',
    name: 'Maggi 2-Minute Masala Instant Noodles',
    brand: 'Maggi',
    weight: 'Pack of 12 (840g)',
    price: 155,
    mrp: 192,
    discount: '19% OFF',
    category: 'Food',
    subCategory: 'Biscuits & Snacks',
    image: '/images/maggi-noodles.jpg',
    images: ['/images/maggi-noodles.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 16,
    pvPoints: 30,
    rating: 4.8,
    reviews: 512,
    inStock: true,
    featured: true,
    shortDescription: 'India’s favorite instant noodle with authentic blend of 20 roasted spices and herbs.',
    description: 'Maggi 2-Minute Masala Noodles provide quick, delicious, iron-fortified noodles that bring smiles to snack time.',
    variants: [
      { id: 'v1', size: 'Pack of 6', price: 80, mrp: 96 },
      { id: 'v2', size: 'Pack of 12 (Mega Saver)', price: 155, mrp: 192, isDefault: true }
    ],
    specifications: {
      'Brand': 'Maggi (Nestle India)',
      'Fortification': 'Iron Enriched',
      'Country of Origin': 'India'
    },
    ingredients: 'Refined Wheat Flour, Palm Oil, Spices (Chilli, Cumin, Coriander, Turmeric), Minerals.'
  },

  // ==========================================
  // 3. PERSONAL & HOUSEHOLD CARE (Home)
  // ==========================================
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
    images: ['/images/surf-excel.jpg'],
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
    ingredients: 'Biodegradable Active Surfactants, Optical Brighteners, Stain Dislodging Enzymes.'
  },
  {
    id: 'prod-surf-matic',
    name: 'Surf Excel Matic Top Load Liquid Detergent',
    brand: 'Surf Excel',
    weight: '2 Litres',
    price: 365,
    mrp: 440,
    discount: '17% OFF',
    category: 'Home',
    subCategory: 'Laundry & Cleaning',
    image: '/images/surf-excel.jpg',
    images: ['/images/surf-excel.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 40,
    pvPoints: 68,
    rating: 4.9,
    reviews: 214,
    inStock: true,
    featured: false,
    shortDescription: 'Liquid detergent designed specifically for washing machines, produces 3x less foam.',
    description: 'Surf Excel Matic Liquid Detergent dissolves instantly in water, leaving zero residue on clothes while protecting machine parts and removing hard grease stains in 1 wash.',
    variants: [
      { id: 'v1', size: '1 Litre Bottle', price: 195, mrp: 235 },
      { id: 'v2', size: '2 Litres (Economy Pouch)', price: 365, mrp: 440, isDefault: true }
    ],
    specifications: {
      'Brand': 'Surf Excel (Hindustan Unilever)',
      'Machine Compatibility': 'Top Load / Front Load',
      'Country of Origin': 'India'
    },
    ingredients: 'Advanced Liquid Active Surfactants, Fragrance, Machine Care Protectors.'
  },
  {
    id: 'prod-vim-gel',
    name: 'Vim Dishwash Gel Lemon Power',
    brand: 'Vim',
    weight: '750 ml',
    price: 145,
    mrp: 180,
    discount: '19% OFF',
    category: 'Home',
    subCategory: 'Kitchen & Cleaning',
    image: '/images/vim-gel.jpg',
    images: ['/images/vim-gel.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 15,
    pvPoints: 26,
    rating: 4.8,
    reviews: 310,
    inStock: true,
    featured: true,
    shortDescription: 'Concentrated gel with 100 real lemon power that removes oily grease in 1 spoon.',
    description: 'Vim Gel has power of 100 lemons. It cleans tough grease from stainless steel, non-stick cookware and glassware without scratching surfaces.',
    variants: [
      { id: 'v1', size: '500 ml Bottle', price: 105, mrp: 130 },
      { id: 'v2', size: '750 ml Bottle', price: 145, mrp: 180, isDefault: true }
    ],
    specifications: {
      'Brand': 'Vim (Hindustan Unilever)',
      'Form': 'Concentrated Liquid Gel',
      'Country of Origin': 'India'
    },
    ingredients: 'Natural Lemon Extracts, Anionic Surfactants, Fragrance, Water.'
  },
  {
    id: 'prod-colgate',
    name: 'Colgate Strong Teeth Calcium Anticavity Toothpaste',
    brand: 'Colgate',
    weight: '500 g (Saver Pack)',
    price: 195,
    mrp: 245,
    discount: '20% OFF',
    category: 'Home',
    subCategory: 'Oral Care & Hygiene',
    image: '/images/colgate-maxfresh.jpg',
    images: ['/images/colgate-maxfresh.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 20,
    pvPoints: 36,
    rating: 4.9,
    reviews: 375,
    inStock: true,
    featured: false,
    shortDescription: 'Amino Shakti formula adds natural calcium to make teeth 2x stronger against cavities.',
    description: 'Colgate Strong Teeth with Amino Shakti strengthens teeth enamel from within and provides all-day fresh breath.',
    variants: [
      { id: 'v1', size: '200 g Tube', price: 95, mrp: 115 },
      { id: 'v2', size: '500 g (2x250g Saver)', price: 195, mrp: 245, isDefault: true }
    ],
    specifications: {
      'Brand': 'Colgate-Palmolive',
      'Fluoride Content': 'Anticavity Fluoride Protection',
      'Country of Origin': 'India'
    },
    ingredients: 'Calcium Carbonate, Sodium Fluoride, Sorbitol, Mint Flavor.'
  },

  // ==========================================
  // 4. HEALTH & WELLNESS (Health)
  // ==========================================
  {
    id: 'prod-dabur-chyawanprash',
    name: 'Dabur Chyawanprash 2X Immunity Booster Awaleha',
    brand: 'Dabur',
    weight: '1 Kg',
    price: 335,
    mrp: 415,
    discount: '19% OFF',
    category: 'Health',
    subCategory: 'Ayurvedic Immunity',
    image: '/images/dabur-chyawanprash.jpg',
    images: ['/images/dabur-chyawanprash.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 38,
    pvPoints: 68,
    rating: 5.0,
    reviews: 490,
    inStock: true,
    featured: true,
    shortDescription: 'Time-tested Ayurvedic formulation with 40+ vital herbs like Amla, Ashwagandha & Giloy.',
    description: 'Dabur Chyawanprash is clinically tested for 2x immunity. Enriched with natural Vitamin C from fresh amla to fight seasonal infections, cough, and cold.',
    variants: [
      { id: 'v1', size: '500 g Jar', price: 185, mrp: 230 },
      { id: 'v2', size: '1 Kg Jar (+250g Free)', price: 335, mrp: 415, isDefault: true }
    ],
    specifications: {
      'Brand': 'Dabur India Ltd.',
      'Certification': '100% Ayurvedic (AYUSH Certified)',
      'Country of Origin': 'India'
    },
    ingredients: 'Amla (Indian Gooseberry), Ashwagandha, Pippali, Yashtimadhu, Shatavari, Pure Honey.'
  },
  {
    id: 'prod-honey-raw',
    name: 'Dabur 100% Pure Raw Forest Honey',
    brand: 'Dabur',
    weight: '500 g',
    price: 240,
    mrp: 310,
    discount: '23% OFF',
    category: 'Health',
    subCategory: 'Organic Nutrition',
    image: '/images/health-wellness-ayurveda.jpg',
    images: ['/images/health-wellness-ayurveda.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 25,
    pvPoints: 46,
    rating: 4.9,
    reviews: 315,
    inStock: true,
    featured: true,
    shortDescription: 'Unadulterated NMR-tested pure honey sourced straight from natural beehives.',
    description: 'Dabur Honey is 100% pure and natural, compliant with 22 rigorous parameters of FSSAI and international NMR purity standards.',
    variants: [
      { id: 'v1', size: '250 g Squeezy', price: 130, mrp: 165 },
      { id: 'v2', size: '500 g Glass Jar', price: 240, mrp: 310, isDefault: true },
      { id: 'v3', size: '1 Kg Value Jar', price: 440, mrp: 575 }
    ],
    specifications: {
      'Brand': 'Dabur India Ltd.',
      'Testing': 'NMR Tested 100% Pure',
      'Country of Origin': 'India'
    },
    ingredients: '100% Pure Natural Bee Honey, Zero Added Sugar.'
  },
  {
    id: 'prod-dettol-6',
    name: 'Dettol Skincare Germ Protection Handwash',
    brand: 'Dettol',
    weight: '750 ml (Refill)',
    price: 195,
    mrp: 240,
    discount: '19% OFF',
    category: 'Health',
    subCategory: 'Personal Care & Hygiene',
    image: '/images/dettol-handwash.jpg',
    images: ['/images/dettol-handwash.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 20,
    pvPoints: 35,
    rating: 4.8,
    reviews: 194,
    inStock: true,
    featured: true,
    shortDescription: '10x better protection against illness-causing germs with moisturizing glycerine.',
    description: 'Dettol Skincare Liquid Handwash is specially formulated with added moisture to help protect against 100 illness-causing germs while keeping your hands soft and smooth.',
    variants: [
      { id: 'v1', size: '200 ml (Pump)', price: 120, mrp: 145 },
      { id: 'v2', size: '750 ml (Refill Pouch)', price: 195, mrp: 240, isDefault: true }
    ],
    specifications: {
      'Brand': 'Dettol (Reckitt Benckiser)',
      'Form': 'Liquid Soap Refill',
      'Country of Origin': 'India'
    },
    ingredients: 'Aqua, Sodium Laureth Sulfate, Glycerine, PCMX Antibacterial Active.'
  },
  {
    id: 'prod-tulsi-tea',
    name: 'Organic India Certified Tulsi Green Tea',
    brand: 'Organic India',
    weight: '25 Tea Envelopes',
    price: 175,
    mrp: 220,
    discount: '20% OFF',
    category: 'Health',
    subCategory: 'Ayurvedic Immunity',
    image: '/images/health-wellness-ayurveda.jpg',
    images: ['/images/health-wellness-ayurveda.jpg'],
    cashbackPercent: 100,
    cashbackAmount: 20,
    pvPoints: 38,
    rating: 4.9,
    reviews: 245,
    inStock: true,
    featured: false,
    shortDescription: 'Holy basil blend with antioxidant rich green tea leaves for daily detox and stress relief.',
    description: 'Organic India Tulsi Green Tea combines Krishna, Rama, and Vana Tulsi with premium green tea for complete bodily rejuvenation and natural metabolism support.',
    variants: [
      { id: 'v1', size: '25 Tea Bags Box', price: 175, mrp: 220, isDefault: true },
      { id: 'v2', size: '100g Loose Leaf Tin', price: 230, mrp: 290 }
    ],
    specifications: {
      'Brand': 'Organic India',
      'Certifications': 'USDA Organic, India Organic, Halal',
      'Country of Origin': 'India'
    },
    ingredients: 'Organic Rama Tulsi, Krishna Tulsi, Vana Tulsi, Green Tea.'
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
    image: '/images/family-grocery-hamper.jpg',
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
    image: '/images/topic-kirana-store.jpg',
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
    image: '/images/health-wellness-ayurveda.jpg',
    itemsIncluded: [
      'Dabur Chyawanprash Immunity Booster (1 Kg)',
      'Dabur Pure Raw Honey (500 g)',
      'Organic Tulsi Green Tea Pack (25 Bags)',
      'Dettol Handwash Skincare Pack (750 ml)',
      'Colgate Strong Teeth (500 g)'
    ],
    description: 'Daily herbal and ayurvedic wellness essentials bundle for complete family immunity, backed by Geeta Sevashram Pratishthan wellness guidelines.'
  }
];
