import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";



const CameraCapture = () => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [stream, setStream] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showCaptureButton, setShowCaptureButton] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const constraints = { video: true };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        setStream(stream);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => console.error(err));

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    }
  }, []);

  useEffect(() => {
    if (videoLoaded) {
      setShowCaptureButton(true);
    }
  }, [videoLoaded]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const sendPhotoToBackend = async (dataURL) => {
    try {
      const response = await fetch("http://localhost:3001/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dataURL }),
      });
  
      if (response.ok) {
        navigate(`/processing?img=${encodeURIComponent(dataURL)}`);
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleCapture = () => {
    if (!canvasRef.current || !videoRef.current) {
      return;
    }
  
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL("image/png");
  
    // Send the captured photo to the backend
    sendPhotoToBackend(dataURL);
  };

  return (
    <div>
      <h2>Capture a photo using your laptop camera</h2>
      <video
        ref={videoRef}
        onLoadedMetadata={handleVideoLoaded}
        autoPlay
      />
      {showCaptureButton && <button onClick={handleCapture}>Capture</button>}
      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default CameraCapture;
