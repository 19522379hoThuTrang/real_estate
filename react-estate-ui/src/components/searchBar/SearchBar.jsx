import { useState } from "react";
import "./searchBar.scss";

const nhieuMucDich = ["mua","thuê"]

export default function SearchBar() {
  const [query, setQuery] = useState({
    mucDich:"mua",
    tinhThanh:"",
    giaThapNhat:0,
    giaCaoNhat:0,
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
                name="giaThapNhat"
                min={0}
                max={99999999999999}
                placeholder="giá thấp nhất"
              />
              <input
                type="number"
                name="giaCaoNhat"
                min={0}
                max={99999999999999}
                placeholder="Giá cao nhất"
              />
              <button>
                <img src="/search.png" alt=""/>
              </button>
            </form>
      </div>
  )
}
