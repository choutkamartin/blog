import { useTranslation } from "next-i18next";
import styles from "../styles/Footer.module.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link"

export const Footer = () => {
  const { t } = useTranslation("footer");
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div>
        <p className={styles.paragraph}>
          &copy; Copyright {year}, <Link href="/"><a>Martin Choutka</a></Link>
        </p>
      </div>
      <div className={styles.sourceCode}>
        <p>
          Zdrojový kód k dispozici na:
          <a href="">
            <FaGithub size="20"/>
          </a>
        </p>
      </div>
    </footer>
  );
};
