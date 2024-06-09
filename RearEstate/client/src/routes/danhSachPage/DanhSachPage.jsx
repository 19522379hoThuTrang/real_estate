import "./danhSachPage.scss";
import SangLoc from "../../components/sangLoc/SangLoc";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

export default function DanhSachPage() {
  const data = useLoaderData();
  return (
    <div className="danhSachPage">
      <div className="chuaDanhSach">
        <div className="padding">
          <SangLoc />
          <Suspense fallback={<p>Vui lòng chờ trong giây lát...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Lỗi tải dữ liệu</p>}
            >
              {(postResponse) => postResponse.data.map(post=>(
                <Card key={post.id} muc={post}/>
              ))}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="chuaMap">
      <Suspense fallback={<p>Vui lòng chờ trong giây lát...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Lỗi tải dữ liệu</p>}
            >
              {(postResponse) => <Map nhungMuc={postResponse.data}/>}
            </Await>
          </Suspense>
      </div>
    </div>
  );
}
