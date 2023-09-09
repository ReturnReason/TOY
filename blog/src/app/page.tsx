import Card from "@/components/common/Card";
import CarouselSlide from "@/components/common/Carousel";

const TEMP_IMG_URL =
  "https://i.namu.wiki/i/1k5hig4AXdVecBNZx91Uyw8gy5cF62ksBezsDdr3Lj8nqHqsR1T6uxjBnR3i-6hmggnHqvZ1hw-EpahHS3AOcWqhXsXtE8XjhU7Wg5tkbvePDt05i2dRHGsUHBWlddFm7PWcn4UEYMnffgQtw31kGA.webp";

export default function Home() {
  return (
    <main>
      <div className="m-4">
        <CarouselSlide></CarouselSlide>
      </div>
    </main>
  );
}
