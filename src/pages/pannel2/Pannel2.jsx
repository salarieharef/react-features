import React, { useEffect, useState } from "react";
import http from "../../services/interceptorLocalStorage";

const Pannel2 = () => {
  const [Info, setInfo] = useState(null);

  const getProfile = async () => {
    const res = await http.get(
      "https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo"
    );
    console.log(res);
    setInfo(res);
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="text-center bg-gray-300 h-full">
      <h2>auth with localstorage and inteceptor</h2>
      <h2 className="my-10">your email : {Info?.email}</h2>
    </div>
  );
};

export default Pannel2;
