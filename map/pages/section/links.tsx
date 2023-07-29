import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Links() {
  const router = useRouter(); // Link를 대신할 수 있음.
  // next/link와 다른 점은 버튼이 사용자에게 노출되어 있다고 해서 js, json 을 lazy load 하지는 않음.
  // js, json을 prefetch 하기 위해서는 직접 코드 구현이 필요.
  // 따라서 prefetch를 직접 해야 하므로 Link 태그를 사용하는 게 좋겠다.

  useEffect(() => {
    router.prefetch('/section/getStaticProps');
  }, [router]);
  // router로 프리패치 시키는 방법

  return (
    <main>
      <h1>Links</h1>
      <button
        onClick={() => {
          router.push('/section/getStaticProps');
          // push 외에도 replace로 routing 하거나 query parameter를 바꾸는 방법도 있음.
        }}
      >
        /getStaticProps
      </button>
    </main>
  );
}
