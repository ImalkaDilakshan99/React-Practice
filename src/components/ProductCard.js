export function ProductCard(){

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

  function getProductTitle(title){
    return product.title;
  }

  return(
    <article style={{border: '1px solid white', borderRadius: "8px", padding:"16px",textAlign:"center"}}>
      <h2>{getProductTitle(product.title)}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width="128px"
        height="128px"
      />

      <p>Specification:</p>
      <ul style={{listStyle:"none", padding:"0"}}>
        <li>{product.specifications[0]}</li>
        <li>{product.specifications[1]}</li>
        <li>{product.specifications[2]}</li>
        <li>{product.specifications[3]}</li>
      </ul>

      <button>Buy (From ${product.price})</button>
    </article>
  );
}