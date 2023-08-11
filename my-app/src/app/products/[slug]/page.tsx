import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: Props) {
  return {
    title: `PRODUCT | ${params.slug}`,
  };
}

export default function ProductPage({ params }: Props) {
  console.log(params);

  return <div>{params.slug} Product Page</div>;
}

// 다이나믹 라우트 사용하는 페이지에서 어떤 페이지를 미리 만들지 명시
// 어떤 경로에 대해서 만들고 싶을 지 generateStaticParams 사용
export function generateStaticParams() {
  const products = ["pants", "skirt"]; // pants, skirt 경로에 대해서 미리 만들기

  // prams에 들어갈 Props 형태로 객체 만들어주면 됨.
  return products.map((product) => ({
    slug: product,
  }));
}
