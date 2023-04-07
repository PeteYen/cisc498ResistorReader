import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './Result.scss';
import { Auth } from 'aws-amplify';
import { Storage } from 'aws-amplify';
 

const Result = () => {
    const location = useLocation();
    const [processedImageURL, setProcessedImageURL] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
      // 检查用户是否已经登录
      Auth.currentAuthenticatedUser()
        .then(() => setIsLoggedIn(true))
        .catch(() => setIsLoggedIn(false));
    }, []);
  
    const handleUpload = async () => {
        try {
          // 从dataurl中提取图像数据
          const imageData = processedImageURL.split(',')[1];
      
          // 创建唯一的文件名
          const fileName = `image_${Date.now()}.jpg`;
      
          // 将图像数据写入新的jpg文件中
          const response = await fetch(`data:image/jpeg;base64,${imageData}`);
          const blob = await response.blob();
          const file = new File([blob], { type: 'image/jpeg' });
          console.log(imageData);
          console.log(file);
          // 将新的jpg文件上传到S3中
          await Storage.put(fileName, file);
          alert('Upload Done！Image has stored in s3 bucket.');
        } catch (err) {
          console.log(err);
        }
    };

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
            {isLoggedIn && <button className={`btn`} onClick={handleUpload}>Upload the Image</button>}
        </div>
    );
};

export default Result;
