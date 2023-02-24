import "./ProcessingPage.scss";
import { useNavigate } from "react-router-dom";

const ProcessingPage = () => {
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
          <img
            className="imageShown"
            src="https://static4.arrow.com/-/media/arrow/images/miscellaneous/0/0916-resistor-color-code-main.jpg?mw=734&hash=C01919193FEF22D4CD7A974A4141C1D4"
            alt="img"
          />
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
