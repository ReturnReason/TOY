"use client";

import { categories } from "../variables/category";

export default function SideMenu() {
  const onClickCategory = () => {
    // 클릭 시 카테고리에 해당하는 포스트 불러오기
  };

  return (
    <ul className="m-4 text-center h-[50%] flex flex-col gap-2 items-center justify-center">
      <li className="font-bold">
        Category
        <hr className="border-b-2" />
      </li>
      {categories.map((cate, idx) => (
        <li onClick={onClickCategory} className="cursor-pointer" key={idx}>
          {cate}
        </li>
      ))}
    </ul>
  );
}
