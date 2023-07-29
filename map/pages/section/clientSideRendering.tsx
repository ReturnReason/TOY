// import NoSSR from '@/components/NoSSR';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// SSR로 렌더링하고 싶지 않을 경우
// import 대신 dynamic 사용 (코드 스플리팅을 통해 번들 사이즈 줄일 수 있음)
const NoSSR = dynamic(() => import('../../src/components/NoSSR'), {
  ssr: false,
});

const Example: NextPage = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const delay = 2;

    new Promise<number>((resolve) =>
      setTimeout(() => resolve(Math.random()), delay * 1000)
    ).then((result: number) => setData(result));
  }, []);

  return (
    <div>
      <h1>Client Side data fetching</h1>
      <p>{data}</p>

      <NoSSR />
    </div>
  );
};

export default Example;

// SSR과 SSG 차이점
// 초기 상태 0으로 html 프리렌더링
// 자바 스크립트로 상태 업데이트하면서 DOM 변경
