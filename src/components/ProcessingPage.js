import "./ProcessingPage.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProcessingPage = () => {
  const location = useLocation();
  const imageURL = new URLSearchParams(location.search).get("img");
  

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/result`;
    navigate(path);
  };
  return (
    <>
      <div className="processingContainer">
        <div className="addMoreImage">
          <button className="addButton">+</button>
        </div>
        <div className="processingImg">
          <img className="processingImg" src={imageURL} alt="Uploaded" />
          <div className="imgButtons">
            <button className="toolButton">remove</button>
            <button className="toolButton edit">edit</button>
          </div>
        </div>
        <div className="getResultButton">
          <button onClick={routeChange} className="getResult">
            get final result
          </button>
        </div>
      </div>
    </>
  );
};

export default ProcessingPage;
