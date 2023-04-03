import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [processedImageURL, setprocessedImageURL] = useState(null);

  const customRequest = async ({ file, onSuccess, onError }) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const dataURL = reader.result;

        // Send the dataURL to the backend
        try {
          const response = await fetch("https://142.189.244.40:8081/api/upload", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ dataURL }),
          });

          if (response.ok) {
            const processedImageURL = await response.text();
            setprocessedImageURL(processedImageURL);
            navigate(`/Result?img=${encodeURIComponent(processedImageURL)}`);
            onSuccess();
          } else {
            onError(new Error("Failed to upload image"));
          }
        } catch (error) {
          onError(error);
        }
      };
      reader.onerror = (error) => {
        onError(error);
      };
      reader.readAsDataURL(file);
    };

    const sendPhotoToBackend = async (dataURL) => {
      try {
        const response = await fetch("https://142.189.244.40:8081/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ dataURL }),
        });
  
        if (response.ok) {
          const processedImageURL = await response.text();
          setprocessedImageURL(processedImageURL);
          navigate(`/Result?img=${encodeURIComponent(processedImageURL)}`);
        } else {
          throw new Error("Failed to upload image");
        }
      } catch (error) {
        console.error(error);
      }
    };
    
  
  
  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <div className="homeContainer">
        <div className="homeContent">
          <h2>Upload your image below</h2>
          <p>Read value from your resistor color stripes.</p>
          <div className="fileContainer">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(event) =>
                customRequest({ file: event.target.files[0] })
              }
            />

            <button onClick={handleUploadButtonClick} className="imgButton btn">Upload Image</button>

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
