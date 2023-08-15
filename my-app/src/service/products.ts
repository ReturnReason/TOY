import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  // 파일이 어디에 있는지 경로 확인
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}

// 특정 경로로 갔을 때 슬러그(제품 id)를 전달해주면 변환
export function getProduct(id: string) {
  // 제품의 객체를 리턴
  return "shirt";
}
