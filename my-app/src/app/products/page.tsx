import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"];

export default function Products() {
  return (
    <div>
      <h2>Product</h2>
      <ul>
        {products.map((product, idx) => (
          <li key={`${product} ${idx}`}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
