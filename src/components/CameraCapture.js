import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './CameraCapture.scss'


const CameraCapture = () => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [stream, setStream] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showCaptureButton, setShowCaptureButton] = useState(false);
  let navigate = useNavigate();
  const [processedImageURL, setprocessedImageURL] = useState(null);

  useEffect(() => {
    const constraints = { video: { facingMode: 'environment' } };
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

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    }
  }, [stream]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const sendPhotoToBackend = async (dataURL) => {
    try {
      const response = await fetch("https://142.188.193.63:8081/api/upload", {
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
    const dataURL = canvas.toDataURL("image/jpeg");
    //stop camara
    stream.getTracks().forEach(track => track.stop());
    setStream(null);
    // Send the captured photo to the backend
    sendPhotoToBackend(dataURL);
  };

  return (
    <div>
      <div className="camaraContainer">
        <h2>Capture a photo using yourcamera</h2>
        <video
            className= 'videoContainer'
            ref={videoRef}
            onLoadedMetadata={handleVideoLoaded}
            autoPlay
        />
        {showCaptureButton && <button className='btn' onClick={handleCapture}>Capture</button>}
        <canvas
            className= 'canvas container'
            ref={canvasRef}
            style={{ display: "none" }}
        />
      </div>

    </div>
  );
};

export default CameraCapture;
