import Card from "@/components/common/Card";
import Image from "next/image";

const TEMP_IMG_URL =
  "https://i.namu.wiki/i/1k5hig4AXdVecBNZx91Uyw8gy5cF62ksBezsDdr3Lj8nqHqsR1T6uxjBnR3i-6hmggnHqvZ1hw-EpahHS3AOcWqhXsXtE8XjhU7Wg5tkbvePDt05i2dRHGsUHBWlddFm7PWcn4UEYMnffgQtw31kGA.webp";

export default function Home() {
  return (
    <main>
      <div className="m-4">
        <Card
          title={"게시글 타이틀"}
          desc={"게시글 내용"}
          image={{
            src: TEMP_IMG_URL,
            alt: "아이유",
            width: 500,
            height: 500,
            placeholder: "empty",
          }}
        />
      </div>
    </main>
  );
}
