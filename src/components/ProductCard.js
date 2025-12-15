export function ProductCard({ background = "slategray", product, onPurchase }) {
  return (
    <article
      style={{
        background,
        width: "100%",
        border: "1px solid white",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt={product.title}
        width="128px"
        height="128px"
      />

      <p>Specification:</p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li>{product.specifications[0]}</li>
        <li>{product.specifications[1]}</li>
        <li>{product.specifications[2]}</li>
        <li>{product.specifications[3]}</li>
      </ul>

      <button onClick={() => onPurchase(product)}>
        Buy (From ${product.price})
      </button>
    </article>
  );
}
