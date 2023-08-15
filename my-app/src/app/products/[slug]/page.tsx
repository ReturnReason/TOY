import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";
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

export default function ProductPage({ params: { slug } }: Props) {
  const product = getProduct(slug);
  // 서버 파일 데이터 중 해당 정보 찾아서 보여주기

  if (!product) {
    notFound();
  }

  return <div>{product} Product Page</div>;
}

// 다이나믹 라우트 사용하는 페이지에서 어떤 페이지를 미리 만들지 명시
// 어떤 경로에 대해서 만들고 싶을 지 generateStaticParams 사용
export async function generateStaticParams() {
  const products = await getProducts(); // pants, skirt 경로에 대해서 미리 만들기

  // prams에 들어갈 Props 형태로 객체 만들어주면 됨.
  return products.map((product) => ({
    slug: product.id,
  }));
}
