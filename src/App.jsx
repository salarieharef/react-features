import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18';
import Courses from "./pages/courses/courses";

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
