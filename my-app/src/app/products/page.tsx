import { getProducts } from "@/service/products";
import Link from "next/link";

export default async function Products() {
  const products = await getProducts();

  return (
    <div>
      <h2>Product</h2>
      <ul>
        {products.map((product, idx) => (
          <li key={`${product.id}`}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
