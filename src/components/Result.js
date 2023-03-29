import './Result.scss';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router";



const Result = () => {
    const location = useLocation();
    const [processedImageURL, setProcessedImageURL] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const imgParam = searchParams.get('img');
        setProcessedImageURL(imgParam);
    }, [location.search]);

    return(
            <div className="resultContainer">
                <img
                    className='imageShown'
                    src={processedImageURL} alt="processedImage"/>
            </div>
    )
}
export default Result