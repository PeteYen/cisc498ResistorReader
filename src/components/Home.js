import "./Home.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  let navigate = useNavigate();
  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      navigate(`/processing?img=${encodeURIComponent(dataURL)}`);
    };
    reader.readAsDataURL(fileObj);
  };

  const routeChange = () => {
    const constraints = {
      audio: false,
      video: true,
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        const video = document.createElement("video");
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          video.play();
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const dataURL = canvas.toDataURL();
          navigate(`/processing?img=${dataURL}`);
        };
      })
      .catch((err) => {
        console.error(err);
      });
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
            <button onClick={handleClick} className="imgButton btn">
              Upload an image
            </button>

            <button onClick={routeChange} className="imgButton btn">
              Take a picture by Phone
            </button>

            <button
              onClick={() => navigate("/camera")}
              className="imgButton btn"
            >
              Take a picture by Laptop
            </button>
          </div>
        </div>

        <div className="homeFooter"></div>
      </div>
    </div>
  );
};

export default Home;
