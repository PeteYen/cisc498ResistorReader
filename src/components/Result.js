import './Result.scss';
import React from 'react';
import processedImage from "../res_img/edited.png"



const Result = () => {
    return(
            <div className="resultContainer">
                <img
                    className='imageShown'
                    src={processedImage} alt="processedImage"/>
            </div>
    )
}
export default Result