import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../component/button";


const Home = () => {
  const {t} = useTranslation('home')


  return (
    <div className="text-3xl font-bold text-center">
      <h1>{t('title')}</h1>
      <h2>{t('desc')}</h2>
      <Button/>
    </div>
  );
};

export default Home;
