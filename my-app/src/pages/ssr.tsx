// Next 12.ver

import MeowArticle from "@/components/MeowArticle";
import { Product, getProducts } from "@/service/products";
import Link from "next/link";

type Props = {
  products: Product[];
};

export default function SSRPage({ products }: Props) {
  return (
    <>
      <h1>Product Page</h1>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

export async function getServerSideProps() {
  // SSR
  const products = await getProducts();
  return {
    props: { products },
  };
}
