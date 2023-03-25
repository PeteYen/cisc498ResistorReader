/*
 * @Author: oliverguo666 oliver360424729@gmail.com
 * @Date: 2022-11-21 23:31:54
 * @LastEditors: oliverguo666 oliver360424729@gmail.com
 * @LastEditTime: 2022-11-22 00:12:26
 * @FilePath: \resistorReader\src\components\LogIn.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./LogIn.scss";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const data = await response.json();
    const token = data.token;
    localStorage.setItem("token", token);
    alert("User logged in successfully");
  } else {
    alert("Invalid username or password");
  }
  };

  return (
  <div>
  <h1>Login</h1>
  <form onSubmit={handleSubmit}>
  <input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  />
  <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  />
  <button type="submit">Login</button>
  </form>
  </div>
  );
  };

  export default Login;
    
