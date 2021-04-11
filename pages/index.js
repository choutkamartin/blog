import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Avatar } from "../components/Avatar";
import { About } from "../components/About";
import { Blog } from "../components/Blog";
import { AddPost } from "../components/AddPost";

import { useEffect, useState } from "react";

export async function getServerSideProps({ locale }) {
  /*const res = await fetch("http://localhost:3000/api/posts", {
  method: "GET",
});
const data = await res.json();*/
  return {
    props: {
      /*data,*/
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "button",
        "about",
        "blog",
      ])),
    }, // will be passed to the page component as props
  };
}

function App() {
  const [posts, setPosts] = useState([]);
  const [showAddPost, setShowAddPost] = useState(false);

  const onAdd = async (post) => {
    const res = await fetch("/api/posts/", {
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
    fetch("/api/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setPosts(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {}
      );
  }, []);

  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className="app">
      <Header heading={t("h1")} title={t("title")} />
      <Avatar />
      <About />
      <Blog posts={posts} onAdd={onAdd} showAddPost={showAddPost}/>
      <Footer />
    </div>
  );
}
export default App;
