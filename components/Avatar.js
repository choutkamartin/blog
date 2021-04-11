import Image from "next/image";
import styles from "../styles/Avatar.module.css";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const Avatar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src="/profile.jpg"
          alt="Picture of the author"
          layout="fill"
          className={styles.avatar}
        />
      </div>
      <h1>Martin Choutka</h1>
      <div className={styles.icons}>
        <a href="" className={styles.link}>
          <FaGithub size={20} />
        </a>
        <a href="" className={styles.link}>
          <FaTwitter size={20} />
        </a>
        <a href="" className={styles.link}>
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </div>
  );
};
