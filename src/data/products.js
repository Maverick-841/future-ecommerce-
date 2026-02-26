import img1 from '../assets/product_1_smartphone_1772121373294.png';
import img2 from '../assets/product_2_watch_1772121393647.png';
import img3 from '../assets/product_3_headphones_1772121414704.png';
import img4 from '../assets/product_4_laptop_1772121435814.png';

export const products = [
    {
        id: 1,
        title: "Quantum X Smartphone",
        price: 999,
        oldPrice: 1199,
        discount: 15,
        category: "Electronics",
        image: img1,
        rating: 4.8,
        description: "Experience the next generation of mobile technology with the Quantum X. Featuring a stunning OLED display and lightning-fast processor."
    },
    {
        id: 2,
        title: "Nova Minimalist Watch",
        price: 249,
        oldPrice: 299,
        discount: 10,
        category: "Accessories",
        image: img2,
        rating: 4.5,
        description: "Elegance meets technology. The Nova watch is the perfect companion for the modern professional."
    },
    {
        id: 3,
        title: "Aero Pro Headphones",
        price: 349,
        oldPrice: 449,
        discount: 20,
        category: "Electronics",
        image: img3,
        rating: 4.9,
        description: "Industry-leading noise cancellation and immersive sound quality. The Aero Pro headphones redefine your audio experience."
    },
    {
        id: 4,
        title: "Zenith Ultra Laptop",
        price: 1499,
        oldPrice: 1799,
        discount: 12,
        category: "Electronics",
        image: img4,
        rating: 4.7,
        description: "Power and portability combined. The Zenith Ultra is built for creators and professionals who demand the best."
    }
];

export const categories = ["All", "Electronics", "Accessories", "Fashion", "Home & Living"];
