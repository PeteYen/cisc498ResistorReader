/*
 * @Author: oliverguo666 oliver360424729@gmail.com
 * @Date: 2022-11-21 23:31:54
 * @LastEditors: oliverguo666 oliver360424729@gmail.com
 * @LastEditTime: 2022-11-21 23:55:08
 * @FilePath: \resistorReader\src\components\History.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./History.scss";
import { useNavigate } from "react-router-dom";

const History = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/result`;
    navigate(path);
  };
  return (
    <>

      <div className="historyListContainer">
        <h2>History</h2>
        <div className="imgContainer">
          <button> &lt; </button>
          <img src="resistor.jpeg" alt=""/>
          <button> &gt; </button>
        </div>
        <div className="buttonContainer">
        <div className="historyButtons">
          <button onClick={routeChange}>resistor0.jpeg</button>
        </div>
        <div className="historyButtons">
          <button onClick={routeChange}>resistor1.jpeg</button>
        </div>
        <div className="historyButtons">
          <button onClick={routeChange}>resistor2.jpeg</button>
        </div>
        <div className="historyButtons">
          <button onClick={routeChange}>resistor3.jpeg</button>
        </div>
        <div className="historyButtons">
          <button onClick={routeChange}>resistor4.jpeg</button>
        </div>
        <div className="historyButtons">
          <button onClick={routeChange}>resistor5.jpeg</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default History;
