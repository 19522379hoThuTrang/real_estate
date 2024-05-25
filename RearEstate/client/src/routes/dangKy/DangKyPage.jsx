import React, { useState } from 'react'
import axios from 'axios';
import "./dangKyPage.scss";
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../library/apiRequest';

export default function DangKyPage() {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setIsLoading(true)
        const formData = new FormData(e.target);

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        try{
            const res = await apiRequest.post("/auth/register",{
                username,email,password
            })
            navigate("/login")

        }catch(err){
            setError(err.response.data.message)
        }finally{
          setIsLoading(false)
        }

    };

  return (
    <div className="dangKyPage">
      <div className="chuaForm">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Đăng ký</button>
          {error && <span>{error}</span>}
          <Link to="/login">Bạn đã có tài khoản</Link>
        </form>
      </div>
      <div className="chuaImg">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}
