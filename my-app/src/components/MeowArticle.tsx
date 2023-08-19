"use client";

import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

export default function MeowArticle() {
  const [text, setText] = useState("loading..");

  useEffect(() => {
    /** 고양이에 대한 사실 API를 CSR로 렌더링*/
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
