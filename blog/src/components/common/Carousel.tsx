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
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function CarouselSlide() {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <Card
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
      <Card
        title={"게시글 타이틀2"}
        desc={"게시글 내용"}
        image={{
          src: TEMP_IMG_URL,
          alt: "아이유",
          width: 500,
          height: 500,
          placeholder: "empty",
        }}
      />
      <Card
        title={"게시글 타이틀3"}
        desc={"게시글 내용"}
        image={{
          src: TEMP_IMG_URL,
          alt: "아이유",
          width: 500,
          height: 500,
          placeholder: "empty",
        }}
      />
      <Card
        title={"게시글 타이틀4"}
        desc={"게시글 내용"}
        image={{
          src: TEMP_IMG_URL,
          alt: "아이유",
          width: 500,
          height: 500,
          placeholder: "empty",
        }}
      />
    </Carousel>
  );
}
