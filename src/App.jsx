import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18';
import Courses from "./pages/courses/courses";
import Blog from "./pages/Blog/Blog";
import Iran from "./pages/Iran/Iran";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },  
      {
        path: "/blog",
        element: <Blog />,
      },  
      {
        path: "/iran",
        element: <Iran />,
      },              
      
    ],
  },
]);

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
