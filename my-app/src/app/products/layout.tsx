import Link from "next/link";
import styles from "@/app/layout.module.css";

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
