import { version } from "next-i18next/package.json";
import { useTranslation } from "next-i18next";
import React from "react";

export const Button = (props, ref) => {
  const { t } = useTranslation("button");

  return (
    <button type="submit" className={props.style}>
      {t(`${props.text}`)}
    </button>
  );
};
