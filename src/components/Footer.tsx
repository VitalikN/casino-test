"use client";

import Link from "next/link";
import { saira } from "@/utils/fonts";
import s from "@/sass/layouts/footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer__section}>
      <div className={`${s.container}`}>
        <p className={`${s.footer__text} ${saira.className}`}>
          Developer:
          <Link
            className={s.footer__link}
            href="https://github.com/VitalikN"
            target="_blank"
          >
            Vitalii Nozhenko
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
