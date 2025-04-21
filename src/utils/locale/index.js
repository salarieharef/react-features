import faHome from "./fa/pages/home/faHome.json";
import enHome from "./en/pages/home/enHome.json";
import faCourses from "./fa/pages/courses/faCourses.json";
import enCourses from "./en/pages/courses/enCourses.json";
import faButton from "./fa/component/faButton.json";
import enButton from "./en/component/enButton.json";

import faData from './fa/data/data.json'
import enData from './en/data/data.json'

import faList from './fa/data/list.json'
import enList from './en/data/list.json'



export const resources = {
  fa: {
    home: faHome,
    courses: faCourses,
    button : faButton,
    data : faData,
    list : faList
  },
  en: {
    home: enHome,
    courses: enCourses,
    button : enButton,
    data : enData,
    list : enList
  },
};

export const ns = ["home" , "courses" , "button" , "data" , "list"];
