import Link from "next/link";
import styles from "@/app/layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product page | PRRODUCT",
  description: "제품 페이지",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ul className={styles.menu}>
        <li>
          <Link href={"/products/women"}>women</Link>
        </li>
        <li>
          <Link href={"/products/man"}>man</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
