import faHome from "./fa/pages/home/faHome.json";
import enHome from "./en/pages/home/enHome.json";
import faCourses from "./fa/pages/courses/faCourses.json";
import enCourses from "./en/pages/courses/enCourses.json";
import faButton from "./fa/component/faButton.json";
import enButton from "./en/component/enButton.json";

export const resources = {
  fa: {
    home: faHome,
    courses: faCourses,
    button : faButton,
  },
  en: {
    home: enHome,
    courses: enCourses,
    button : enButton,

  },
};

export const ns = ["home" , "courses" , "button"];
