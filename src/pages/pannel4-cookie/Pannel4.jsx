import React, { useEffect, useState } from "react";
import http from "../../services/interceptorCookie";

const Pannel4 = () => {
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
      <h2>auth with cookie and inteceptor</h2>
      <h2 className="my-10">your email : {Info?.email}</h2>
    </div>
  );
};

export default Pannel4;
