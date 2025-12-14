export function ProductCard(){
  return(
    <article>
      <h2>iPhone 15 Pro</h2>
      <img
        src='images/iphone.png'
        alt='iPhone 15 Pro'
        width="128px"
        height="128px"
      />

      <p>Specification:</p>
      <ul>
        <li>6.1-inch display</li>
        <li>A17 Pro chip</li>
        <li>ProMotion technology</li>
        <li>Up to 1TB storage</li>
      </ul>

      <button>Buy (From $999)</button>
    </article>
  );
}