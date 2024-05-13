import { useState } from "react";
import "./searchBar.scss";

const nhieuLoai = ["mua","thuê"]

export default function SearchBar() {
  const [query, setQuery] = useState({
    type:"mua",
    viTri:"",
    giaToiThieu:0,
    giaToiDa:0,
  });

  const switchLoai = (val) => {
    setQuery((prev) => ({...prev, loai:val}));
  };

  return (
    <div className="searchBar">
          {nhieuLoai.map((loai) => (
              <button 
                key={loai} 
                onClick={()=>switchLoai(loai)}
                className={query.loai === loai ? "hoatDong" : ""}
              >
                {loai}
              </button>
            ))}
            <form>
              <input type="text" name ="viTri" placeholder="vị trí thành phố"/>
              <input
                type="number"
                name="giaToiThieu"
                min={0}
                max={1000000000000000}
                placeholder="giá tối thiểu"
              />
              <input
                type="number"
                name="giaToiDa"
                min={0}
                max={1000000000000000}
                placeholder="giá tối đa"
              />
              <button>
                <img src="/search.png" alt=""/>
              </button>
            </form>
      </div>
  )
}
