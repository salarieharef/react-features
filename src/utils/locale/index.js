import faHome from "./fa/pages/home/faHome.json";
import enHome from "./en/pages/home/enHome.json";
import faCourses from "./fa/pages/courses/faCourses.json";
import enCourses from "./en/pages/courses/enCourses.json";
import faButton from "./fa/component/faButton.json";
import enButton from "./en/component/enButton.json";
import faCommon from "./fa/common.json";
import enCommon from "./en/common.json";



export const resources = {
  fa: {
    home: faHome,
    courses: faCourses,
    button : faButton,
    common : faCommon,
  },
  en: {
    home: enHome,
    courses: enCourses,
    button : enButton,
    common : enCommon,
  },
};

export const ns = ["home" , "courses" , "button" , "common" ];
