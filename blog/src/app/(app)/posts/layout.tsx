import { categories } from "./variables/category";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-around h-[100vh] ">
      {children}
      <ul className="text-center h-[50%] flex flex-col items-center justify-center">
        <li className="font-bold">
          Category
          <hr className="border-b-2" />
        </li>
        {categories.map((cate, idx) => (
          <li key={idx}>{cate}</li>
        ))}
      </ul>
    </div>
  );
}
