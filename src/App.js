/*
 * @Author: oliverguo666 oliver360424729@gmail.com
 * @Date: 2023-03-08 20:39:44
 * @LastEditors: oliverguo666 oliver360424729@gmail.com
 * @LastEditTime: 2023-03-16 19:28:36
 * @FilePath: \cisc498ResistorReader\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./App.css";
import Home from "./components/Home";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import About from "./components/About";
import Result from "./components/Result";
import Register from "./components/History";
import History from "./components/History";
import CameraCapture from "./components/CameraCapture";

function App() {
  // return (
  //       <div className="App">
  //    </div>
  //  );
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("./History");
  };

  return (
    <>
      <nav>
        <ul>
          <li className="navItem">
            <Link to="/">Home</Link>
          </li>
          {auth ? (
            <>
              <li className="navItem">
                {/*<Link to="/Profile">Profile</Link>*/}
              </li>
              <li className="navItem">
                {/*<Link onClick={logout} to="/">*/}
                {/*  Logout*/}
                {/*</Link>*/}
              </li>
            </>
          ) : (
            <>
              <li className="navItem">
                <Link to="/About">Help</Link>
              </li>
              {/*<li className="navItem">
                <Link to="/History">History</Link>
              </li>*/}
            </>
          )}
          {/*<div className="icon"> <HelpOutlineIcon/></div>*/}
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Result" element={<Result />}></Route>
        {/*<Route path="/Register" element={<Register />}></Route>*/}
        {/*<Route path="/History" element={<History />}></Route>*/}
        {/*<Route path="/Profile" element={<Profile />}></Route>*/}
        <Route path="/camera" element={<CameraCapture />} />

        {/*<Route path="/dashboard">*/}
        {/*    <Dashboard />*/}
        {/*</Route>*/}
      </Routes>
    </>
  );
}

export default App;
