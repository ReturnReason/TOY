// 13버전 라우트 (이전에는 pages 폴더 api, 현재는 app 폴더 내부 api)

import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const products = await getProducts();

  return NextResponse.json({ products });
}
