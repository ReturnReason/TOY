import type { NextPage } from 'next';

interface Props {
  data: number;
}

const Example: NextPage<Props> = ({ data }: { data: number }) => {
  return (
    <main>
      <h1>getStaticProps</h1>
      <p>{data}</p>
    </main>
  );
};

export default Example;

export async function getStaticProps() {
  const delaySeconds = 2;
  const data = await new Promise((res) =>
    // API 모킹
    setTimeout(() => {
      res(Math.random());
    }, delaySeconds * 1000)
  );

  return {
    props: { data },
    //revaildate: 5, // 같은 값 일경우 revalidate 설정되어 있어도 data가 변하지 않으면 prelender 수행안함.
  };
}
