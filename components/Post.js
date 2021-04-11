import Link from "next/link";
import styles from "../styles/Post.module.css";
import moment from "moment";
import { useRouter } from "next/router";

export const Post = ({ post }) => {
  const router = useRouter();
  moment.locale(`${router.locale}`);
  return (
    <div className={styles.post}>
      <h3>{post.title}</h3>
      <h5 className="muted">{moment(post.date).format("LL")}</h5>
      <p
        dangerouslySetInnerHTML={{ __html: post.textCs.substring(0, 150) }}
      ></p>
      <Link href={`/posts/${encodeURIComponent(post.slug)}`}>
        <a>Více zde</a>
      </Link>
    </div>
  );
};
