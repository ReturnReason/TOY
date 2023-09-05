import Image from "next/image";
import React from "react";
import styles from "./card.module.css";

import type { ImageProps } from "next/image";
import Tag from "./Tag";

type Props = {
  title: string;
  desc: string;
  image: ImageProps;
};

// TODO image elem type check
export default function Card({
  title,
  desc,
  image: {
    src,
    alt,
    width,
    height,
    blurDataURL = "",
    placeholder = "blur",
    quality = 75,
    priority = false,
  },
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-[400px] border-[1px] overflow-hidden rounded-md shadow-md">
      <Image
        className="object-cover w-full max-h-[300px] object-center"
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        quality={quality}
        priority={priority}
      />
      <div className="p-4 text-center w-full">
        <p className="text-right w-full">date</p>
        <h2 className="text-lg">{title}</h2>
        <p className="text-md">{desc}</p>
        <Tag />
      </div>
    </div>
  );
}
