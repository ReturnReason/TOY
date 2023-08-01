import Link from 'next/link';
import styles from '../../styles/header.module.scss';
import Image from 'next/image';

interface Props {
  rightEl?: React.ReactNode;
}

export default function Header({ rightEl }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <Image src="/images/kakao.png" alt="LOGO" width={64} height={19} />
        </Link>
      </div>
      <div className={styles.flexItem}>
        {rightEl && <div className={styles.flexItem}>{rightEl}</div>}
      </div>
    </header>
  );
}
