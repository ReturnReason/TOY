'use client';
import Img from '@/components/Img';
import Header from '@/components/layout/Header';
import styles from '../styles/header.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <button
        onClick={() => {
          alert('복사');
          //TODO 복사 기능 구현
        }}
        className={styles.box}
      >
        복사
      </button>
    </>
  );
}
