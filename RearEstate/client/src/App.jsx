// import "./layout.scss";
import DanhSachPage from "./routes/danhSachPage/DanhSachPage";
import HomePage from "./routes/homePage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Layout, RequireAuth} from "./routes/layout/Layout";
import ChiTietNhaDatPage from "./routes/chiTietSanPham/ChiTietNhaDatPage";
import HoSoPage from "./routes/hoSo/HoSoPage";
import DangKyPage from "./routes/dangKy/DangKyPage";
import Login from "./routes/login/Login";
import CapNhatHoSo from "./routes/capNhapHoSo/CapNhatHoSo";
import TaoBaiDang from "./routes/taoBaiDang/TaoBaiDang";
// import { singlePageLoader,listPageLoader,profilePageLoader } from "./library/loaders";

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
            element:<DanhSachPage/>,
          },
          {
            path:"/:id",
            element:<ChiTietNhaDatPage/>,
            // loader:singlePageLoader,
          },
          {
            path: "/login",
            element: <Login/>,
          },
          {
            path: "/dangKy",
            element: <DangKyPage/>,
          },
        ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/hoSo",
          element: <HoSoPage />,
          // loader: singlePageLoader
        },
        {
          path: "/hoSo/capNhat",
          element: <CapNhatHoSo />,
          // loader: profilePageLoader
        },
        {
          path: "/dangBai",
          element: <TaoBaiDang />,
          // loader: profilePageLoader
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App