import type { NextPage } from 'next';

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

export async function getStaticProps() {
  const delaySeconds = 2;
  // API 모킹

  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delaySeconds * 1000)
  );
  // API 모킹

  return {
    props: { data },
    revalidate: 5,
    // 같은 값 일경우 revalidate 설정되어 있어도 data가 변하지 않으면 prelender 수행안함.
  };
}
