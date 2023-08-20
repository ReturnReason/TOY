"use client";

import React, { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>ProductsError</h2>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
}
