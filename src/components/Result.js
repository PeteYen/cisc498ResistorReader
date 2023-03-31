import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './Result.scss';

const Result = () => {
    const location = useLocation();
    const [processedImageURL, setProcessedImageURL] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const imgParam = searchParams.get('img');
        setProcessedImageURL(imgParam);
    }, [location.search]);

    const handleBackToHome = () => {
        window.location.href = '/';
    };

    return(
        <div className="resultContainer">
            <img className='imageShown' src={processedImageURL} alt="processedImage"/>
            <button className={`btn`} onClick={handleBackToHome}>Back to Home</button>
        </div>
    );
};

export default Result;
