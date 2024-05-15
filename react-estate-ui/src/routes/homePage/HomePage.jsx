import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

export default function HomePage() {
  return (
    <div className="homePage">
        <div className="chuaText">
          <div className="padding">
            <h1 className="tieuDe">
              Tìm kiếm, mua bán, cho thuê nhà đất toàn quốc trên website BẤT ĐỘNG SẢN
            </h1>
            <p>
            Trang web BẤT ĐỘNG SẢN là nơi tốt nhất dành cho những người đang tìm kiếm bất động sản để ở hoặc đầu tư. 
            Chúng tôi cung cấp dữ liệu tin rao lớn với đa dạng loại hình bất động sản giúp 
            bạn có những lựa chọn phù hợp với nhu cầu của mình.
            </p>
          </div>
        <SearchBar/>
        </div>

        <div className="chuaImg">
            <img src="/bg.png" alt=""/>
        </div>
    </div>
  )
}
