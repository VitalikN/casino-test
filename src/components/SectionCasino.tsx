"use client";

import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import casinoSelector from "@/redux/casino/casinoSelector";
import { Casino } from "@/utils/interface";
import s from "@/sass/layouts/sectionCasino.module.scss";
import { setSearch } from "@/redux/casino/casinoSlice";

const SectionCasino = () => {
  const dispatch = useDispatch();
  const casino = useSelector(casinoSelector.getCasino);
  const search = useSelector(casinoSelector.getSearch);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const filteredCasino = casino.filter((item: Casino) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <section className={s.casino}>
      <div className={s.container}>
        <div className={s.casino__search__box}>
          <input
            type="text"
            value={search}
            className={s.input}
            onChange={handleSearch}
            placeholder="Search"
          />
        </div>
        <ul className={s.casino__list}>
          {filteredCasino.length > 0 ? (
            filteredCasino.map(({ id, title, text, img, path }: Casino) => (
              <li key={id} className={s.casino__item}>
                <Link href={path} className={s.casino__link} target="_blank">
                  <Image
                    className={s.casino__img}
                    src={img.src}
                    alt={img.alt}
                    width={120}
                    height={120}
                    priority={true}
                  />

                  <div>
                    <h2 className={s.casino__title}>{title}</h2>
                    <p className={s.casino__text}>{text}</p>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <p>Nothing was found for this search</p>
          )}
        </ul>
      </div>
    </section>
  );
};
export default SectionCasino;
