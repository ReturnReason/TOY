import Header from '@/components/layout/Header';
import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';

export default function Feedback() {
  return (
    <>
      <Header rightEl={<HeaderRight />} />
    </>
  );
}

const HeaderRight = () => {
  const ICON_SIZE = 20;

  const clickBtn = () => {
    alert('복사 기능 추가하기');
  };

  return (
    <>
      <button onClick={clickBtn} className={styles.box} key="button">
        <AiOutlineShareAlt size={ICON_SIZE} />
      </button>
      <Link href="/feedback" className={styles.box} key="link">
        <VscFeedback size={ICON_SIZE} />
      </Link>
    </>
  );
};
