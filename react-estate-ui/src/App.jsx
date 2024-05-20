// import "./layout.scss";
import DanhSachPage from "./routes/danhSachPage/DanhSachPage";
import HomePage from "./routes/homePage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout/Layout";
import ChiTietNhaDatPage from "./routes/chiTietSanPham/ChiTietNhaDatPage";
import HoSoPage from "./routes/hoSo/HoSoPage";

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
          },
          {
            path:"/hoSo",
            element:<HoSoPage/>
          }
        ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App