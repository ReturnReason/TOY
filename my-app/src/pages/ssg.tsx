// Next 12.ver

import MeowArticle from "@/components/MeowArticle";
import { Product, getProducts } from "@/service/products";
import Link from "next/link";

type Props = {
  products: Product[];
};

export default function SSGPage({ products }: Props) {
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
} // client 에서 실행

export async function getStaticProps() {
  // SSG
  const products = await getProducts();
  return {
    props: { products },
    revalidate: 10, // ISR
  };
} // server에서 실행
