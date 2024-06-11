"use client";

import s from "@/sass/layouts/hero.module.scss";
import { useEffect, useState } from "react";

const Hero = () => {
  const [dynamicHeight, setDynamicHeight] = useState(420);

  useEffect(() => {
    const handleResize = () => {
      const w = Math.min(window.innerWidth, 1280);

      const w1 = 768,
        h1 = 420;
      const w2 = 1280,
        h2 = 700;

      const calculatedHeight = h1 + ((w - w1) * (h2 - h1)) / (w2 - w1);
      setDynamicHeight(calculatedHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={s.container}>
      <section className={s.hero} style={{ height: `${dynamicHeight}px` }}>
        <h1 className={s.title}>FAVBET</h1>
      </section>
    </div>
  );
};
export default Hero;
