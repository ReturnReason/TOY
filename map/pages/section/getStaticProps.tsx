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
  };
}
