import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";


const Home = () => {
  const {t} = useTranslation()


  return (
    <div className="text-3xl font-bold text-center">
      <h1>{t('title')}</h1>
      <h2>{t('desc')}</h2>
    </div>
  );
};

export default Home;
