import { useTranslation } from "next-i18next";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { Button } from "./Button";
import { useState } from "react";

export const AddPost = ({ onAdd }) => {
  const { t } = useTranslation("blog");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [textCs, setTextCs] = useState("");
  const [textEn, setTextEn] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a task");
      return;
    }

    onAdd({ title, textCs, slug, textEn });

    setTitle("");
    setSlug("");
    setTextCs("");
    setTextEn("");
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="other">Název článku</label>
      <input
        type="text"
        id="other"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Název článku"
      />
      <label htmlFor="other">Slug</label>
      <input
        type="text"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="slug"
      />
      <label htmlFor="other">Obsah článku</label>
      <textarea
        type="text"
        value={textCs}
        onChange={(e) => setTextCs(e.target.value)}
        placeholder="Tento článek hovoří o"
      />
      <label htmlFor="other">Obsah článku anglicky</label>
      <textarea
        type="text"
        value={textEn}
        onChange={(e) => setTextEn(e.target.value)}
        placeholder="This article is talking about"
      />
      <Button style="btn-primary" text="submit" />
    </form>
  );
};
