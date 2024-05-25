import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import apiRequest from "../../library/apiRequest";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {

  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const{updateUser} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
      e.preventDefault()
      setIsLoading(true)
      setError("")
      const formData = new FormData(e.target);

      const username = formData.get("username");
      const password = formData.get("password");
      try{
          const res = await apiRequest.post("/auth/login",{
              username,password
          });
          updateUser(res.data)
          navigate("/")

      }catch(err){
          setError(err.response.data.message)
      }finally{
        setIsLoading(false);
      }

  };

  return (
    <div className="login">
      <div className="chuaForm">
        <form onSubmit={handleSubmit}>
          <h1>Chào mừng đã trở lại</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/dangKy">Bạn chưa có tài khoản</Link>
        </form>
      </div>
      <div className="chuaImg">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}
