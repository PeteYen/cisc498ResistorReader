import './Result.scss';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
    const location = useLocation;
    const image = location.search ? decodeURIComponent(new URLSearchParams(location.search).get('img')) :null;

    return(
        <>
            <div className="resultContainer">
                <img
                    className='imageShown'
                    src={image} alt="processedImage"/>
            </div>
        </>
    )
}

export default Result