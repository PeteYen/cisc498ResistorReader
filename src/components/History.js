import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from "@aws-amplify/ui-react";
import { Storage } from 'aws-amplify';
import "./History.scss";

const History = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function getImages() {
            try {
              const response = await Storage.list('');
              if (!Array.isArray(response.results)) {
                throw new Error('imageKeys is not an array');
              }
              const imageKeys = response.results;
              const images = await Promise.all(
                imageKeys.map(async (key) => {
                  const image = await Storage.get(key.key);
                  return image;
                })
              );
              setImages(images)
            } catch (error) {
              console.error('Error while fetching images: ', error);
              setImages([]);
            }
          }
          
        getImages();
    }, []);

    return (
        <Authenticator>
            {({signOut}) => (
                <div className='historyContainer'>
                    <button className='btn' onClick={signOut}>signOut</button>
                    <div className="imageContainer">
                        {images.slice(1).map((imageUrl, index) => (
                            <img src={imageUrl} alt={`Image ${index}`} key={`image${index}`} />
                        ))}
                    </div>
                </div>
            )}
        </Authenticator>
    );
};
export default History;
