const initialProducts = [
    {
        id: 1,
        title: "Quantum Phone Ultra",
        category: "Smartphones",
        price: 999.99,
        oldPrice: 1199.99,
        discount: 15,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2000&auto=format&fit=crop",
        description: "The ultimate smartphone with quantum processing power and a crystal clear sapphire display."
    },
    {
        id: 2,
        title: "Neural Buds Pro",
        category: "Audio",
        price: 199.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2000&auto=format&fit=crop",
        description: "Immersive spatial audio with intelligent noise cancellation that adapts to your environment."
    },
    {
        id: 3,
        title: "Onyx Watch Series 9",
        category: "Wearables",
        price: 399.99,
        oldPrice: 449.99,
        discount: 10,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=2000&auto=format&fit=crop",
        description: "Track your health and stay connected with the most advanced wearable technology on your wrist."
    },
    {
        id: 4,
        title: "AeroPad Pro M3",
        category: "Tablets",
        price: 799.99,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2000&auto=format&fit=crop",
        description: "Powerful performance in a thin and light design. Perfect for creators and professionals."
    },
    {
        id: 5,
        title: "Titan G7 Gaming Laptop",
        category: "Computers",
        price: 2499.99,
        oldPrice: 2799.99,
        discount: 12,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2000&auto=format&fit=crop",
        description: "Dominate the competition with bleeding-edge graphics and lightning-fast refresh rates."
    },
    {
        id: 6,
        title: "Vision VR Headset",
        category: "VR/AR",
        price: 599.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2000&auto=format&fit=crop",
        description: "Step into new worlds with stunning 8K resolution and intuitive hand-tracking."
    }
];

const categoriesList = ["Smartphones", "Audio", "Wearables", "Tablets", "Computers", "VR/AR", "Cameras", "Accessories"];
const descriptions = [
    "Premium quality hardware with sleek aesthetics.",
    "Engineered for performance and durability.",
    "The future of technology in the palm of your hand.",
    "Designed for those who demand the absolute best.",
    "Experience innovation like never before."
];

const images = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1000",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000",
    "https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=1000",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000",
    "https://images.unsplash.com/photo-1524670410485-78c778f219d4?q=80&w=1000"
];

const generatedProducts = [];
for (let i = 7; i <= 55; i++) {
    const category = categoriesList[i % categoriesList.length];
    const price = parseFloat((Math.random() * 500 + 49).toFixed(2));
    const hasDiscount = Math.random() > 0.7;
    const discount = hasDiscount ? Math.floor(Math.random() * 20 + 5) : null;
    const oldPrice = hasDiscount ? parseFloat((price / (1 - discount / 100)).toFixed(2)) : null;

    generatedProducts.push({
        id: i,
        title: `${category} Model ${String.fromCharCode(65 + (i % 26))}${i}`,
        category: category,
        price: price,
        oldPrice: oldPrice,
        discount: discount,
        rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)),
        image: images[i % images.length],
        description: descriptions[i % descriptions.length]
    });
}

export const products = [...initialProducts, ...generatedProducts];
export const categories = ["All", ...categoriesList];
