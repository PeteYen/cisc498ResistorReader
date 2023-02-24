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

const LogIn = () => {
  let navigate = useNavigate();
  const SignIn = () => {
    localStorage.user = true;
    // window.location.reload();
    let path = `/Profile`;
    navigate(path);
  };

  return (
    <div className="LogInContainer">
      <div className="LogInContent">
        <div className="emailInputContainer">
          <label>Email address</label>
          <br />
          <input
            type="email"
            className="emailInput"
            placeholder="Enter email"
          />
        </div>
        <div className="passwordInputContainer">
          <label>Password</label>
          <br />
          <input
            type="password"
            className="passwordInput"
            placeholder="Enter password"
          />
        </div>
        <div onClick={SignIn} className="submitButtonContainer">
          <button type="submit" className="logInButton">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
