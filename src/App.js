import './App.css';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';

 const product = {
    imageSrc: 'images/iphone.png',
    title: 'iPhone 15 Pro',
    price: 999,
    specifications: [
      '6.1-inch display',
      'A17 Pro chip',
      'ProMotion technology',
      'Up to 1TB storage'
    ]
  }

function App() {
  return (
    <div className="App">
      <ProductList>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </ProductList>
      
    </div>
  );
}

export default App;
