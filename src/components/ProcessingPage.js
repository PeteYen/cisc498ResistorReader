import "./ProcessingPage.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";

const ProcessingPage = () => {
  const location = useLocation();
  const imageURL = new URLSearchParams(location.search).get("img");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/result`;
    navigate(path);
  };

  const canvasRef = useRef(null);
  const [editingMode, setEditingMode] = useState(null);
  const [cropDimensions, setCropDimensions] = useState(null);

  const handleEditClick = () => {
    setEditingMode("edit");
  };

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);
    fabric.Image.fromURL(imageURL, (img) => {
      canvas.add(img);
    });

    // Add event listeners for editing mode and crop dimensions
    canvas.on("mouse:down", (e) => {
      if (editingMode === "crop") {
        const { x, y } = e.pointer;
        setCropDimensions({ left: x, top: y });
      }
    });

    canvas.on("mouse:move", (e) => {
      if (editingMode === "crop" && cropDimensions) {
        const { x, y } = e.pointer;
        const width = x - cropDimensions.left;
        const height = y - cropDimensions.top;

        const cropRect = new fabric.Rect({
          left: cropDimensions.left,
          top: cropDimensions.top,
          width,
          height,
          fill: "rgba(0, 0, 0, 0.5)",
          selectable: false,
        });

        canvas.setOverlayImage(
          cropRect.toDataURL(),
          canvas.renderAll.bind(canvas)
        );
      }
    });

    canvas.on("mouse:up", (e) => {
      if (editingMode === "crop" && cropDimensions) {
        const { x, y } = e.pointer;
        const width = x - cropDimensions.left;
        const height = y - cropDimensions.top;

        const croppedImage = canvas.cropRect(
          cropDimensions.left,
          cropDimensions.top,
          width,
          height
        );

        canvas.clear();
        canvas.setBackgroundImage(croppedImage, canvas.renderAll.bind(canvas));
        canvas.setOverlayImage(null);
        setEditingMode(null);
      }
    });
  }, [imageURL, editingMode, cropDimensions]);

  const handleCropClick = () => {
    setEditingMode("crop");
  };

  return (
    <>
      <div className="processingContainer">
        <div className="processingImg">
          <canvas ref={canvasRef} />
          <div className="imgButtons">
            <button className="toolButton btn">remove</button>
            <button className="toolButton btn" onClick={handleEditClick}>
              edit
            </button>
            <button className="toolButton btn" onClick={handleCropClick}>
              crop
            </button>
          </div>
        </div>
        <div className="getResultButton">
          <button onClick={routeChange} className="getResult btn">
            get final result
          </button>
        </div>
      </div>
    </>
  );
};

export default ProcessingPage;
