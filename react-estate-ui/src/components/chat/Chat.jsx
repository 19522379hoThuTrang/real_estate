import { useState } from "react";
import "./chat.scss";
export default function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="nhungTinNhan">
        <h1>Tin nhắn</h1>
        <div className="tinNhan">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Trần Thanh Tuyền</span>
          <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
        </div>
        <div className="tinNhan">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Trần Thanh Tuyền</span>
          <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
        </div>
        <div className="tinNhan">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Trần Thanh Tuyền</span>
          <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
        </div>
        <div className="tinNhan">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Trần Thanh Tuyền</span>
          <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
        </div>
        <div className="tinNhan">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Trần Thanh Tuyền</span>
          <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
        </div>
        <div className="tinNhan">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Trần Thanh Tuyền</span>
          <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
        </div>
        <div className="tinNhan">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Trần Thanh Tuyền</span>
          <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
        </div>
        <div className="tinNhan">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Trần Thanh Tuyền</span>
          <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
        </div>
      </div>
      {chat && (
      <div className="hopThoai">
        <div className="top">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            Trần Thanh Tuyền
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
        </div>
        <div className="center">
          <div className="tinNhanChat">
            <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
            <span>1 giờ</span>
          </div>
          <div className="tinNhanChat">
            <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
            <span>1 giờ</span>
          </div>
          <div className="tinNhanChat own">
            <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
            <span>1 giờ</span>
          </div>
          <div className="tinNhanChat own">
            <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
            <span>1 giờ</span>
          </div>
          <div className="tinNhanChat">
            <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
            <span>1 giờ</span>
          </div>
          <div className="tinNhanChat own">
            <p>Cơ hội cho nhà đầu tư, chính chủ cần ra gấp nhà...</p>
            <span>1 giờ</span>
          </div>
        </div>
        <div className="bottom">
          <textarea></textarea>
          <button>Gửi</button>
        </div>
      </div>)}
    </div>
  );
}
