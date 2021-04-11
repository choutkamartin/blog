import { useRouter } from "next/router";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Avatar } from "../../components/Avatar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import moment from "moment";
import styles from "../../styles/Post.module.css";

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`);
  const data = await res.json();
  return {
    props: {
      data,
      ...(await serverSideTranslations(context.locale, [
        "common",
        "footer",
        "button",
        "about",
        "blog",
      ])),
    }, // will be passed to the page component as props
  };
}

const Post = (props) => {
  const router = useRouter();
  moment.locale(`${router.locale}`);
  return (
    <div className="app">
        <Header />
        <Avatar />
        <div className={styles.post}>
        <h2>{props.data.title}</h2>
        <h4>{moment(props.data.date).format("LL")}</h4>
        <p dangerouslySetInnerHTML={{ __html: props.data.textCs }}></p>
        </div>
        <Link href={`/`}>
          <a>Zpět na přehled</a>
        </Link>
        <Footer />
      </div>
  );
};

export default Post;
