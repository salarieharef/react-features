import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home");


  return (
    <div className="text-3xl font-bold text-center">
      {t("title")}
    </div>
  );
};

export default Home;
