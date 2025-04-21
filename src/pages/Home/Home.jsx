import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../component/button";


const Home = () => {
  const {t , i18n } = useTranslation('home')

  const dir = i18n.language === "fa" || i18n.language === "ar" ? "rtl" : "ltr";
  console.log(dir)

  return (
    <div className="text-3xl font-bold text-center">
      {/* <h1>{t('title')}</h1>
      <h2>{t('desc')}</h2> */}
      <Button/>
    </div>
  );
};

export default Home;
