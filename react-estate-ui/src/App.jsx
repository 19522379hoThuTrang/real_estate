// import "./layout.scss";
import DanhSachPage from "./routes/danhSachPage/DanhSachPage";
import HomePage from "./routes/homePage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout/Layout";
import ChiTietNhaDatPage from "./routes/chiTietSanPham/ChiTietNhaDatPage";

function App() {
  const router =createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
        children:[
          {
            path:"/",
            element:<HomePage/>
          },
          {
            path:"/danhSach",
            element:<DanhSachPage/>
          },
          {
            path:"/:id",
            element:<ChiTietNhaDatPage/>
          }
        ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App