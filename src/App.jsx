import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import Pannel1 from "./pages/pannel1/Pannel1";
import Pannel2 from "./pages/pannel2/Pannel2";
import LoginLocalStorage from "./pages/login-localstorage/login-localstorage";
import LoginCookie from "./pages/login-cookie/login-cookie";
import Pannel3 from "./pages/pannel3-cookie/Pannel3";
import Pannel4 from "./pages/pannel4-cookie/Pannel4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginLocalStorage />,
      },
      {
        path: "/pannel1",
        element: <Pannel1 />,
      },  
      {
        path: "/pannel2",
        element: <Pannel2 />,
      },        
      {
        path: "/LoginCookie",
        element: <LoginCookie />,
      }, 
      {
        path: "/pannel3",
        element: <Pannel3 />,
      },     
      {
        path: "/pannel4",
        element: <Pannel4 />,
      },           
    ],
  },
]);
function App() {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
