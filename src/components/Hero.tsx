import Link from "next/link";

import s from "@/sass/layouts/hero.module.scss";
import Image from "next/image";
import initialCasinoData from "@/utils/initialCasinoData";
const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <input type="text" />
        <ul className={s.hero__list}>
          {initialCasinoData &&
            initialCasinoData.map(({ id, title, text, img, path }) => (
              <li key={id} className={s.hero__item}>
                <Link href={path} className={s.hero__link} target="_blank">
                  <Image
                    className={s.hero__img}
                    src={img.src}
                    alt={img.alt}
                    width={120}
                    height={120}
                    // priority={true}
                    priority
                  />

                  <div>
                    <h2 className={s.hero__title}>{title}</h2>
                    <p className={s.hero__text}>{text}</p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
export default Hero;
