import { useState } from "react";
import "./searchBar.scss";

const nhieuMucDich = ["mua","thuê"]

export default function SearchBar() {
  const [query, setQuery] = useState({
    mucDich:"mua",
    tinhThanh:"",
    giaMin:0,
    giaMax:0,
  });

  const switchMucDich = (val) => {
    setQuery((prev) => ({...prev, mucDich:val}));
  };

  return (
    <div className="searchBar">
          {nhieuMucDich.map((mucDich) => (
              <button 
                key={mucDich} 
                onClick={()=>switchMucDich(mucDich)}
                className={query.mucDich === mucDich ? "hoatDong" : ""}
              >
                {mucDich}
              </button>
            ))}
            <form>
              <input type="text" name ="tinhThanh" placeholder="vị trí tỉnh thành"/>
              <input
                type="number"
                name="giaMin"
                min={0}
                max={99999999999999}
                placeholder="giá từ"
              />
              <input
                type="number"
                name="giaMax"
                min={0}
                max={99999999999999}
                placeholder="Giá đến"
              />
              <button>
                <img src="/search.png" alt=""/>
              </button>
            </form>
      </div>
  )
}
