import styles from "../styles/About.module.css";
import { useTranslation } from "next-i18next";

export const About = (props) => {
  const { t } = useTranslation("about");
  return (
    <div className={styles.about}>
      <h3 dangerouslySetInnerHTML={{ __html: t("about-greetings") }}></h3>
      <p dangerouslySetInnerHTML={{ __html: t("about-introduction") }} />
      <p dangerouslySetInnerHTML={{ __html: t("about-else") }} />
      <p dangerouslySetInnerHTML={{ __html: t("about-3d-engineering") }} />
      <p dangerouslySetInnerHTML={{ __html: t("about-contact-me") }} />
    </div>
  );
};
