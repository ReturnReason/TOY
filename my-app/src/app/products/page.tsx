import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from "./page.module.css";

// export const revalidate = 3;

export default async function Products() {
  const products = await getProducts();

  /** 고양이에 대한 사실 API */
  const res = await fetch("https://meowfacts.herokuapp.com", {
    // object 형태로 fetch의 revalidate 값을 정해줄 수 있음. (0이면 SSR이라 요청이 올 때마다 렌더링)
    next: { revalidate: 3 },
    // cache : "force-cache" ->  SSG 로 동작
    // cache : "no-store"  -> SSR 로 동작
    // 페이지를 언제 렌더링 할 지에 따라 다양한 옵션 있으니 참고하기
  });
  const data = await res.json();
  const factText = data.data[0];

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

      <article className={styles.article}>{factText}</article>
    </div>
  );
}
