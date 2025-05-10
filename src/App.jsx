import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
