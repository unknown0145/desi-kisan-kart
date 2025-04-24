
import { Product } from "@/context/CartContext";

// Extended product data with more products in each category
export const allProducts: Product[] = [
  // VEGETABLES
  {
    id: "1",
    name: "Fresh Organic Tomatoes",
    price: 40,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=500",
    description: "Juicy, ripe tomatoes grown without pesticides. Our tomatoes are grown in natural conditions with organic compost and no chemicals. These vine-ripened tomatoes are harvested at peak ripeness for maximum flavor and nutrition.",
    category: "vegetables",
    unit: "kg",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "4",
    name: "Fresh Green Spinach",
    price: 30,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=500",
    description: "Nutritious leafy green vegetable, locally grown and harvested daily. Our spinach is washed and ready to use, perfect for salads, sabzis, and smoothies. Rich in iron, vitamins, and antioxidants.",
    category: "vegetables",
    unit: "bunch",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "8",
    name: "Fresh Green Chillies",
    price: 20,
    image: "https://images.unsplash.com/photo-1573590937232-5ae570d2ad13?auto=format&fit=crop&q=80&w=500",
    description: "Spicy green chillies that add heat and flavor to any dish. These fresh chillies are hand-picked daily from our farms. Perfect for tempering, making chutneys, or adding to curries for extra spice.",
    category: "vegetables",
    unit: "100g",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "9",
    name: "Organic Carrots",
    price: 35,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&q=80&w=500",
    description: "Crunchy, sweet carrots grown using organic farming methods. These vibrant orange carrots are packed with beta-carotene and essential nutrients. Great for salads, juicing, or cooking.",
    category: "vegetables",
    unit: "kg",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "10",
    name: "Farm Fresh Potatoes",
    price: 25,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=500",
    description: "Premium quality potatoes freshly harvested from our farm. These versatile potatoes are perfect for all your cooking needs - roasting, mashing, frying or boiling.",
    category: "vegetables",
    unit: "kg",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "11",
    name: "Organic Cauliflower",
    price: 45,
    image: "https://images.unsplash.com/photo-1566842600175-97dca3c5ad38?auto=format&fit=crop&q=80&w=500",
    description: "Fresh, dense cauliflower grown without chemical pesticides. Our cauliflower heads are carefully cultivated and hand-picked at the perfect stage of growth for the best flavor and texture.",
    category: "vegetables",
    unit: "piece",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "12",
    name: "Organic Brinjal",
    price: 30,
    image: "https://images.unsplash.com/photo-1603059989392-11c550862e75?auto=format&fit=crop&q=80&w=500",
    description: "Glossy purple brinjals (eggplants) grown organically. Our brinjals are perfect for making bhartha, begun bhaja, or any other traditional Indian dishes requiring this versatile vegetable.",
    category: "vegetables",
    unit: "kg",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "13",
    name: "Fresh Coriander",
    price: 15,
    image: "https://images.unsplash.com/photo-1611754349119-ccc8175c95ae?auto=format&fit=crop&q=80&w=500",
    description: "Aromatic fresh coriander leaves harvested daily. Our coriander adds the perfect finishing touch to curries, chaats, and salads with its distinctive flavor and aroma.",
    category: "vegetables",
    unit: "bunch",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "14",
    name: "Organic Cucumber",
    price: 25,
    image: "https://images.unsplash.com/photo-1627965129866-a5b566dd3c51?auto=format&fit=crop&q=80&w=500",
    description: "Crisp, refreshing cucumbers grown without pesticides. Perfect for salads, raitas, or simply enjoying raw with a sprinkle of chaat masala for a healthy snack.",
    category: "vegetables",
    unit: "kg",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "15",
    name: "Fresh Green Peas",
    price: 60,
    image: "https://images.unsplash.com/photo-1615397587950-3cbb55f95d8a?auto=format&fit=crop&q=80&w=500",
    description: "Sweet, tender green peas fresh from the farm. Our peas are hand-picked at peak ripeness to ensure the best flavor and texture for your pulao, matar paneer, or any other pea recipe.",
    category: "vegetables",
    unit: "kg",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "16",
    name: "Fresh Okra (Lady Finger)",
    price: 40,
    image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?auto=format&fit=crop&q=80&w=500",
    description: "Tender, young okra perfect for making bharwa bhindi, bhindi masala, or other classic Indian dishes. Our okra is carefully selected for the perfect size and tenderness.",
    category: "vegetables",
    unit: "kg",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "17",
    name: "Fresh Mushrooms",
    price: 70,
    image: "https://images.unsplash.com/photo-1602585578830-03c21a2f6dab?auto=format&fit=crop&q=80&w=500",
    description: "Fresh button mushrooms grown in controlled environments. Clean, firm, and ready to use in your favorite dishes like mushroom curry, pulao, or stir-fries.",
    category: "vegetables",
    unit: "250g",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },
  {
    id: "18",
    name: "Organic Bitter Gourd",
    price: 35,
    image: "https://images.unsplash.com/photo-1623617547643-ad4a4a8aad3e?auto=format&fit=crop&q=80&w=500",
    description: "Fresh bitter gourds grown using organic practices. Known for their distinctive bitter taste and numerous health benefits, especially for diabetics. Perfect for making karela chips or traditional curries.",
    category: "vegetables",
    unit: "kg",
    farmerId: "f1",
    farmerName: "Ramesh Kumar"
  },

  // FRUITS
  {
    id: "3",
    name: "Organic Alphonso Mangoes",
    price: 350,
    image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=500",
    description: "Sweet and flavorful Alphonso mangoes, known as the 'King of Mangoes'. Hand-picked from sustainable orchards in Ratnagiri, Maharashtra. These mangoes are naturally ripened without any artificial chemicals. Rich in flavor with a smooth, fiber-less pulp.",
    category: "fruits",
    unit: "dozen",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },
  {
    id: "19",
    name: "Sweet Bananas",
    price: 60,
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=500",
    description: "Naturally sweet and nutritious bananas. Our bananas are harvested at the ideal ripeness to ensure the perfect balance of flavor and texture. Rich in potassium and other essential nutrients.",
    category: "fruits",
    unit: "dozen",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },
  {
    id: "20",
    name: "Juicy Watermelon",
    price: 80,
    image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&q=80&w=500",
    description: "Sweet, refreshing watermelons perfect for hot summer days. Our watermelons are selected for their sweetness, juiciness, and deep red flesh. Each watermelon weighs approximately 4-5 kg.",
    category: "fruits",
    unit: "piece",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },
  {
    id: "21",
    name: "Fresh Papaya",
    price: 55,
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&q=80&w=500",
    description: "Ripe, sweet papayas rich in digestive enzymes and vitamins. Our papayas are harvested when perfectly ripe, with sweet orange flesh and a mild tropical flavor.",
    category: "fruits",
    unit: "kg",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },
  {
    id: "22",
    name: "Premium Apples",
    price: 180,
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&q=80&w=500",
    description: "Crisp, juicy apples from Himalayan orchards. Our premium apples are carefully grown in the pristine mountain air, resulting in exceptional flavor and crunch.",
    category: "fruits",
    unit: "kg",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },
  {
    id: "23",
    name: "Sweet Litchi",
    price: 150,
    image: "https://images.unsplash.com/photo-1622822380253-554799a31e72?auto=format&fit=crop&q=80&w=500",
    description: "Aromatic and juicy litchis with translucent white flesh. Our litchis are known for their exceptional sweetness and fragrance, harvested at peak ripeness from the best orchards.",
    category: "fruits",
    unit: "kg",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },
  {
    id: "24",
    name: "Fresh Strawberries",
    price: 200,
    image: "https://images.unsplash.com/photo-1583591900414-7031eb309cb4?auto=format&fit=crop&q=80&w=500",
    description: "Sweet, aromatic strawberries grown in highland farms. Our strawberries are bright red, juicy, and perfect for desserts, smoothies, or enjoying fresh.",
    category: "fruits",
    unit: "250g",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },
  {
    id: "25",
    name: "Sweet Pineapple",
    price: 70,
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&q=80&w=500",
    description: "Tropical sweet pineapples with a perfect balance of sweetness and tanginess. Each pineapple is carefully selected for ripeness and quality, with golden yellow flesh that's juicy and aromatic.",
    category: "fruits",
    unit: "piece",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },
  {
    id: "26",
    name: "Organic Pomegranate",
    price: 140,
    image: "https://images.unsplash.com/photo-1544681280-d773b3d8cbc6?auto=format&fit=crop&q=80&w=500",
    description: "Ruby red pomegranates with jewel-like arils full of sweet-tart juice. Our pomegranates are selected for their deep color, juiciness, and antioxidant-rich properties.",
    category: "fruits",
    unit: "kg",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },
  {
    id: "27",
    name: "Sweet Kiwi",
    price: 220,
    image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&q=80&w=500",
    description: "Tangy-sweet kiwi fruits packed with vitamin C and fiber. Our kiwis have bright green flesh with tiny black seeds and a unique flavor that's both sweet and slightly tart.",
    category: "fruits",
    unit: "kg",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },
  {
    id: "28",
    name: "Juicy Oranges",
    price: 90,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?auto=format&fit=crop&q=80&w=500",
    description: "Sweet, juicy oranges rich in vitamin C. Our oranges are easy to peel and have the perfect balance of sweetness and tanginess, making them ideal for fresh juice or eating directly.",
    category: "fruits",
    unit: "kg",
    farmerId: "f3",
    farmerName: "Anita Desai"
  },

  // GRAINS
  {
    id: "2",
    name: "Premium Basmati Rice",
    price: 120,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80&w=500",
    description: "Aromatic long-grain basmati rice from the foothills of the Himalayas. Aged for 12 months to enhance flavor and aroma. Perfect for biryanis, pulaos, and everyday cooking. 100% authentic, premium quality rice.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "7",
    name: "Organic Wheat Flour",
    price: 65,
    image: "https://images.unsplash.com/photo-1599180856482-60bde9cf9d42?auto=format&fit=crop&q=80&w=500",
    description: "Stone-ground whole wheat flour from organically grown wheat. Our atta is ground in traditional stone chakki, preserving nutrients and natural flavor. Perfect for making soft, fluffy rotis and parathas.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "29",
    name: "Organic Toor Dal",
    price: 140,
    image: "https://images.unsplash.com/photo-1614354637258-11000279d805?auto=format&fit=crop&q=80&w=500",
    description: "High-quality split pigeon peas (toor dal) grown without chemical fertilizers. Our toor dal cooks quickly and evenly, perfect for making the quintessential Indian dal or sambar.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "30",
    name: "Brown Rice",
    price: 95,
    image: "https://images.unsplash.com/photo-1595137048973-4c9e2241b70a?auto=format&fit=crop&q=80&w=500",
    description: "Nutritious brown rice with the bran layer intact for maximum fiber and nutrients. Our brown rice has a pleasant nutty flavor and slightly chewy texture, perfect for health-conscious cooking.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "31",
    name: "Organic Masoor Dal",
    price: 110,
    image: "https://images.unsplash.com/photo-1612257999772-ee7012486889?auto=format&fit=crop&q=80&w=500",
    description: "Red split lentils grown through organic farming practices. Our masoor dal cooks quickly and has a mild, earthy flavor that takes on the taste of whatever spices it's cooked with.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "32",
    name: "Traditional Jowar",
    price: 75,
    image: "https://images.unsplash.com/photo-1622542796254-5b9c46ab0f8a?auto=format&fit=crop&q=80&w=500",
    description: "Ancient grain sorghum (jowar) grown through traditional farming methods. A gluten-free grain that's high in protein and fiber, perfect for making rotis, bhakri, and other traditional recipes.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "33",
    name: "Organic Bajra",
    price: 70,
    image: "https://images.unsplash.com/photo-1607294846590-9a8aaae3ea6e?auto=format&fit=crop&q=80&w=500",
    description: "Pearl millet (bajra) grown through organic farming practices. This nutritious grain is high in iron and minerals, perfect for making rotis in winter or the traditional bajre ki khichdi.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "34",
    name: "Premium Chana Dal",
    price: 130,
    image: "https://images.unsplash.com/photo-1612257999156-ba3f52401e14?auto=format&fit=crop&q=80&w=500",
    description: "Split bengal gram (chana dal) known for its sweet, nutty flavor. Our chana dal is carefully cleaned and sorted to ensure the highest quality, perfect for dal preparations or making flour for sweets.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "35",
    name: "Organic Moong Dal",
    price: 150,
    image: "https://images.unsplash.com/photo-1612257999155-1290f45c22ae?auto=format&fit=crop&q=80&w=500",
    description: "Split mung beans grown using organic farming methods. Our moong dal is light and easy to digest, perfect for khichdi, payasam, or simple dal preparations.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "36",
    name: "Organic Ragi",
    price: 80,
    image: "https://images.unsplash.com/photo-1622542148908-f13210d9a60f?auto=format&fit=crop&q=80&w=500",
    description: "Finger millet (ragi) grown through traditional farming methods. This nutritious ancient grain is high in calcium and iron, perfect for making porridge, rotis, or the traditional ragi mudde.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "37",
    name: "Polished White Rice",
    price: 85,
    image: "https://images.unsplash.com/photo-1569842936542-7a0ac3583503?auto=format&fit=crop&q=80&w=500",
    description: "Premium polished white rice for everyday cooking. Our rice cooks into separate, fluffy grains that are perfect for serving with curries, dals, or making jeera rice and pulao.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },
  {
    id: "38",
    name: "Black Urad Dal",
    price: 145,
    image: "https://images.unsplash.com/photo-1612257999201-17f18913d6aa?auto=format&fit=crop&q=80&w=500",
    description: "Whole black gram beans with skin, essential for making dal makhani and other North Indian specialties. Our urad dal is carefully cleaned and packaged to ensure the best quality.",
    category: "grains",
    unit: "kg",
    farmerId: "f2",
    farmerName: "Suresh Patel"
  },

  // DAIRY
  {
    id: "5",
    name: "Desi Dahi (Yogurt)",
    price: 60,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=500",
    description: "Creamy, homemade style yogurt made from fresh, pasteurized milk. Made using traditional methods with active cultures for a thick, creamy texture. Perfect for raita, smoothies, or enjoying on its own.",
    category: "dairy",
    unit: "500g",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "6",
    name: "Fresh Farm Eggs",
    price: 90,
    image: "https://images.unsplash.com/photo-1569288063643-5d5567bb4783?auto=format&fit=crop&q=80&w=500",
    description: "Free-range eggs from healthy hens raised in natural conditions. Our hens are fed quality grains without antibiotics or hormones. The eggs have bright orange yolks and strong shells, indicating high nutritional value.",
    category: "dairy",
    unit: "dozen",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "39",
    name: "Pure Cow Ghee",
    price: 550,
    image: "https://www.istockphoto.com/photos/ghee",
    description: "Traditional clarified butter made from pure cow's milk. Our ghee is prepared using the age-old bilona method, resulting in a rich, nutty flavor and aroma that enhances any dish it's added to.",
    category: "dairy",
    unit: "500g",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "40",
    name: "Fresh Paneer",
    price: 90,
    image: "https://images.unsplash.com/photo-1626200950658-4453df0b8cdd?auto=format&fit=crop&q=80&w=500",
    description: "Soft, fresh cottage cheese made daily from pure milk. Our paneer is soft yet firm in texture, perfect for making paneer tikka, palak paneer, or any other paneer-based dish.",
    category: "dairy",
    unit: "250g",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "41",
    name: "Organic Cow Milk",
    price: 70,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=500",
    description: "Fresh, creamy milk from grass-fed indigenous cows. Our milk is pasteurized but not homogenized, allowing the cream to rise to the top naturally. Rich in essential nutrients and natural goodness.",
    category: "dairy",
    unit: "liter",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "42",
    name: "Fresh Buffalo Milk",
    price: 80,
    image: "https://images.unsplash.com/photo-1583335602958-c9b9a0cd88e5?auto=format&fit=crop&q=80&w=500",
    description: "Rich, creamy buffalo milk with higher fat content, perfect for making rich sweets and creamy desserts. Our buffalo milk comes from well-cared-for buffaloes raised using traditional methods.",
    category: "dairy",
    unit: "liter",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "43",
    name: "Homestyle Buttermilk",
    price: 40,
    image: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&q=80&w=500",
    description: "Refreshing spiced buttermilk made from churned yogurt. Our chaas is lightly flavored with cumin, salt, and fresh coriander, making it perfect for digestion, especially after heavy meals.",
    category: "dairy",
    unit: "liter",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "44",
    name: "Fresh Cream",
    price: 120,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=500",
    description: "Thick, pure dairy cream skimmed from fresh milk. Our cream has a rich, velvety texture that's perfect for making desserts, adding to curries, or using in coffee and tea.",
    category: "dairy",
    unit: "200g",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "45",
    name: "Traditional White Butter",
    price: 160,
    image: "https://images.unsplash.com/photo-1588165171080-c89acfa5a259?auto=format&fit=crop&q=80&w=500",
    description: "Homemade white butter churned from fresh cream. Our white butter has a delicate, fresh flavor that elevates the taste of parathas, rotis, or simply spread on bread.",
    category: "dairy",
    unit: "200g",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "46",
    name: "Flavored Yogurt",
    price: 75,
    image: "https://images.unsplash.com/photo-1576092604742-6e25a68aeee3?auto=format&fit=crop&q=80&w=500",
    description: "Creamy yogurt with natural fruit flavors. Available in mango, strawberry, and mixed berry flavors, our fruit yogurts make for a delicious and healthy snack or dessert option.",
    category: "dairy",
    unit: "200g",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "47",
    name: "Organic Cheese",
    price: 180,
    image: "https://images.unsplash.com/photo-1598167912234-02fecddb5551?auto=format&fit=crop&q=80&w=500",
    description: "Handcrafted cheese made from organic cow's milk. Our cheese has a mild, creamy flavor that makes it perfect for sandwiches, salads, or simply enjoying with crackers.",
    category: "dairy",
    unit: "200g",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  },
  {
    id: "48",
    name: "Quail Eggs",
    price: 120,
    image: "https://images.unsplash.com/photo-1612163670065-52d4284693f9?auto=format&fit=crop&q=80&w=500",
    description: "Small, delicate eggs from free-range quails. Our quail eggs have a higher yolk-to-white ratio and are packed with nutrients. Perfect for garnishes, appetizers, or any recipe that calls for eggs.",
    category: "dairy",
    unit: "24 pieces",
    farmerId: "f4",
    farmerName: "Lakshmi Devi"
  }
];

export default allProducts;
