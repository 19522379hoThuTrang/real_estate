// import "./layout.scss";
import DanhSachPage from "./routes/danhSachPage/DanhSachPage";
import HomePage from "./routes/homePage/HomePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./routes/layout/Layout";
import ChiTietSanPham from "./routes/chiTietSanPham/ChiTietSanPham";

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
            element:<ChiTietSanPham/>
          }
        ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App