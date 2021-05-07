import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FaFlag } from "react-icons/fa";
import styles from "../styles/Header.module.css";
import { useState } from "react";

export const Header = ({ heading, title }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const path = router.asPath;
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Yellowtail&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header className={styles.language}>
        <nav>
          <Link href={path} locale={router.locale === "en" ? "cs" : "en"}>
            <a className={styles.link}>{t("change-locale")}</a>
          </Link>
          <Link href="/contact">
            <a className={styles.link}>Kontakt</a>
          </Link>
          <Link href="/tyto-stranky">
            <a className={styles.link}>Tyto stránky</a>
          </Link>
          <Link href="/projects">
            <a className={styles.link}>Projekty</a>
          </Link>
        </nav>
        <div className={styles.formSwitch, styles.formCheck}>
          <input
            className={styles.formCheckInput}
            type="checkbox"
            id="flexSwitchCheckDefault"
            onChange={(e) => setDarkTheme(e.currentTarget.checked)}
          />
        </div>
      </header>
    </>
  );
};
