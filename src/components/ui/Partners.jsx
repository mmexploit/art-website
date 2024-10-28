"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Partners = () => {
  const t = useTranslations("partners")
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    const response = await axios.get("/api/partners");
    setPartners(response.data.partners);
  };
  return (
    <div className="w-full py-10">
      <h1 className="text-center text-4xl font-extrabold text-primary">
        {t('our')} <span className="text-secondary">{t('partners')}</span>
      </h1>
      <div className=" flex flex-col flex-wrap place-content-center items-center gap-10 px-10 py-10 md:flex-row">
        {partners.map((partner) => (
          <div
            key={partner._id}
            className="shadow-secondary flex w-[80%] items-center justify-evenly rounded-2xl  border-t  p-2 shadow-md md:w-[30%]"
          >
            <h2 className="text-lg font-bold text-primary">{partner.name}</h2>
            <Image
              src={partner.photoUrl}
              alt={partner.name}
              width={140}
              height={140}
              className="shadow-secondary rounded-full  border-t shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
