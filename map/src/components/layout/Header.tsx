import Link from 'next/link';
import styles from '../../styles/header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <Image src="/images/kakao.png" alt="LOGO" width={64} height={19} />
        </Link>
      </div>
    </header>
  );
}
