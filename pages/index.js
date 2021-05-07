import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Avatar } from "../components/Avatar";
import { About } from "../components/About";
import { Blog } from "../components/Blog";
import { useEffect, useState } from "react";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "button",
        "about",
        "blog",
      ])),
    },
  };
}

function App() {
  const [posts, setPosts] = useState([]);
  const [showAddPost, setShowAddPost] = useState(false);

  const onAdd = async (post) => {
    const res = await fetch(`/api/posts/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    setPosts([...posts, data]);
  };

  useEffect(() => {
    fetch(`/api/posts/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setPosts(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className="app">
      <Header heading={t("h1")} title={t("title")} />
      <Avatar />
      <About />
      <Blog posts={posts} onAdd={onAdd} showAddPost={showAddPost} />
      <Footer />
    </div>
  );
}
export default App;
