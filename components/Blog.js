import { useTranslation } from "next-i18next";
import styles from "../styles/Blog.module.css";
import { AddPost } from "../components/AddPost";
import { Post } from "../components/Post";

export const Blog = ({ posts, onAdd }) => {
  const { t } = useTranslation("blog");
  const postItems = posts.map((post) => {
    return <Post key={post._id} post={post} />;
  });
  return (
    <div className={styles.blog}>
      <h1>{t("blog-title")}</h1>
      <AddPost onAdd={onAdd} />
      {postItems}
    </div>
  );
};
