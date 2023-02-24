import './App.css';
import Home from "./components/Home";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {
    Routes,
    Route,
    Link, useNavigate
} from "react-router-dom";
import LogIn from "./components/LogIn";
import ProcessingPage from "./components/ProcessingPage";
import Result from "./components/Result";
import Register from "./components/Register";
import History from "./components/History";
import Profile from "./components/Profile";

function App() {
  // return (
  //       <div className="App">
  //    </div>
  //  );
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate('./Register')
    }

    return (
        <>
            <nav>
                <ul>
                    <li className='navItem'>
                        <Link to="/">Home</Link>
                    </li>
                    {
                        auth ? <>
                                <li className='navItem'>
                                    <Link to="/Profile">Profile</Link>
                                </li>
                                <li className='navItem'>
                                <Link
                                    onClick={logout}
                                    to="/">Logout</Link>
                            </li></>


                               : <>
                                <li className='navItem'>
                                    <Link to="/LogIn">Login</Link>
                                </li>
                                <li className='navItem'>
                                    <Link to="/Register">Register</Link>
                                </li>
                            </>



                    }
                    {/*<div className="icon"> <HelpOutlineIcon/></div>*/}

                </ul>

            </nav>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/LogIn" element={<LogIn />}></Route>
                <Route path="/processing" element={<ProcessingPage />}></Route>
                <Route path="/Result" element={<Result />}></Route>
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/History" element={<History />}></Route>
                <Route path="/Profile" element={<Profile />}></Route>


                {/*<Route path="/dashboard">*/}
                {/*    <Dashboard />*/}
                {/*</Route>*/}
            </Routes>
        </>




    );

}

export default App;
