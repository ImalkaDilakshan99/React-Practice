import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { ProductList } from "./components/ProductList";

const products = [
  {
    imageSrc: "images/iphone.png",
    title: "iPhone 15 Pro",
    price: 999,
    specifications: [
      "6.1-inch display",
      "A17 Pro chip",
      "ProMotion technology",
      "Up to 1TB storage",
    ],
  },
  {
    imageSrc: "images/iwatch.png",
    title: "Apple Watch Series 9",
    price: 399,
    specifications: [
      "Always-On Retina display",
      "S9 SiP with 64-bit dual-core processor",
      "Up to 18 hours of battery life",
      "Swimproof design",
    ],
  },
  {
    imageSrc: "images/iwatch.png",
    title: "Apple Watch Series 9",
    price: 399,
    specifications: [
      "Always-On Retina display",
      "S9 SiP with 64-bit dual-core processor",
      "Up to 18 hours of battery life",
      "Swimproof design",
    ],
  },
  {
    imageSrc: "images/airpods.png",
    title: "AirPods Pro (2nd generation)",
    price: 249,
    specifications: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Customizable fit",
      "Spatial audio with dynamic head tracking",
    ],
  },
];

function handlePurchase(product) {
  alert(`You have bought ${product.title} for $${product.price}`);
}

function App() {
  return (
    <div className="App">
      <ProductList>
        <ProductCard background="lightblue" product={products[0]} onPurchase={handlePurchase} />
        <ProductCard product={products[1]} onPurchase={handlePurchase} />
        <ProductCard product={products[2]} onPurchase={handlePurchase} />
        <ProductCard product={products[3]} onPurchase={handlePurchase} />
      </ProductList>
    </div>
  );
}

export default App;
