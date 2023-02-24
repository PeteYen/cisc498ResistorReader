import "./Home.scss";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log("fileObj is", fileObj);

    // 👇️ reset file input
    //event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/processing`;
    navigate(path);
  };

  return (
    <div>
      <div className="homeContainer">
        {/*<div className="headerContainer">*/}
        {/*    <div className="homeHeader">*/}
        {/*        Home*/}
        {/*    </div>*/}
        {/*    <div className="Buttons">*/}
        {/*        <button className="login">*/}
        {/*            login*/}
        {/*        </button>*/}
        {/*        <button className="register">*/}
        {/*            register*/}
        {/*        </button>*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div className="homeContent">
          <h2>Upload your image below</h2>
          <p>Read value from your resistor color stripes.</p>
          <div className="fileContainer">
            <input
              style={{ display: "none" }}
              ref={inputRef}
              onChange={handleFileChange}
              type="file"
            />
            <button onClick={handleClick} className="imgButton">
              Upload an image
            </button>

            <button onClick={routeChange} className="imgButton">
              Take a picture
            </button>
          </div>
        </div>

        <div className="homeFooter"></div>
      </div>
    </div>
  );
};

export default Home;
