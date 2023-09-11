"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const TEMP_IMG_URL =
  "https://i.namu.wiki/i/6Y1SeTAuET5ft3HOf9UEUZhjCAgoV4zxXZoE_H_1xO6e64M2feGRw35hjbAB00KdJSiBBws7vtwX_8MO9EZozjOfpcBj1BwnR2Zea-6P9w55tAcdj8aw_eP5QK0X_WcA9QHRf6Asl9GxOOYzq4OY-g.webp";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

export default function CarouselSlide() {
  return (
    <Carousel
      autoPlay={true}
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container max-w-[1200px] m-auto"
      dotListClass="custom-dot-list-style"
      sliderClass="gap-4"
      itemClass="carousel-item-padding-40-px "
    >
      {Array(10)
        .fill(0)
        .map((_, idx) => {
          return (
            <Card
              key={idx}
              title={"게시글 타이틀1"}
              desc={"게시글 내용"}
              image={{
                src: TEMP_IMG_URL,
                alt: "아이유",
                width: 500,
                height: 500,
                placeholder: "empty",
              }}
            />
          );
        })}
    </Carousel>
  );
}
