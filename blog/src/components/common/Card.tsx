import Image from "next/image";
import React from "react";

import type { ImageProps } from "next/image";

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
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        quality={quality}
        priority={priority}
      />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
