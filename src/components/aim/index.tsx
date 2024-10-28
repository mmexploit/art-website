"use client";
import { useTranslations } from "next-intl";
import React from "react";

export default function Aim() {
  const t = useTranslations("Aim");
  return (
    <div>
      <div className=" mx-5 my-[6%] flex flex-col gap-6 md:mx-20">
        <h1 className="text-3xl font-bold text-orange-500 md:text-4xl ">
          {t("title")}
        </h1>
        <p className="w-full px-10 text-justify text-xl md:w-[90%]">
          {t("description")}
        </p>
        <div className="flex flex-col gap-4 self-end md:w-[35%]">
          <h2 className="text-2xl font-bold text-orange-500">
            {t("founderTitle")}
          </h2>
          <p>{t("founderDescription")}</p>
          <span className="self-end font-bold text-orange-500">
            {t("founderName")}
          </span>
        </div>
      </div>
    </div>
  );
}
