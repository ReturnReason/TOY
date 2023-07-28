import type { GetServerSideProps, NextPage } from 'next';

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getStaticProps Page</h1>
      <p>값: {data}</p>
    </main>
  );
};

export default Example;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // GetServerSideProps 에서 revalidate 하는 방법
  // 참고자료: https://web.dev/i18n/ko/stale-while-revalidate
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=10'
    // 5초 이내 새로고침하면 캐시 hit, 캐시된 HTML 렌더
    // 15초 이내에 새로고침하면 캐시는 stale 새로 프리렌더링
    // 15초 지나면 아래 setTimeout 걸어놓은 만큼 pending됨
  );
  //

  const delay = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delay * 1000)
  );

  return {
    props: { data },
  };
};

// SSG와 달리 2초 동안 pending 상태, 2초 지나야 렌더링
// 빌드 타임에 프리 렌더링되지 않고 요청할 때마다 프리렌더링 됨.
// SSG보다 UX가 좋지 않음.
// 리퀘스트 타임마다 서버사이드에서 렌더링해야되는 경우에만 적용하는게 좋겠다.
// 사용자 인증 정보다 동적으로 변해야 하나 보안이 중요한 경우에 서버사이드 프롭스 사용
