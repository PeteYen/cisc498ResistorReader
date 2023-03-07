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
    navigate(`/processing?img=${encodeURIComponent(dataURL)}`);
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
