import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from "@aws-amplify/ui-react";
import { Storage, Auth } from 'aws-amplify';
import "./History.scss";

const History = () => {
    const [images, setImages] = useState([]);
    const [selectedImageKey, setSelectedImageKey] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        Auth.currentAuthenticatedUser().then(user => {
            setIsAdmin(user.signInUserSession.accessToken.payload['cognito:groups']?.includes('Admin'));
            getImages();
        });
    }, []);

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
                    return { key: key.key, image: image };
                })
            );
            setImages(images)
        } catch (error) {
            console.error('Error while fetching images: ', error);
            setImages([]);
        }
    }

    async function deleteImage(key) {
        try {
            await Storage.remove(key);
            setImages(images.filter(image => image.key !== key));
            setSelectedImageKey(null);
        } catch (error) {
            console.error('Error while deleting image: ', error);
        }
    }

    return (
        <Authenticator>
            {({signOut}) => (
                <div className='historyContainer'>
                    <button className='btn' onClick={signOut}>Sign Out</button>
                    <div className="imageContainer">
                        {images.slice(1).map((image, index) => (
                            <div key={image.key}>
                                <img src={image.image} alt={`Image ${index}`} onClick={() => setSelectedImageKey(image.key)} />
                                {isAdmin && selectedImageKey === image.key && (
                                    <div className='deleteImageContainer'>
                                        <p>Are you sure you want to delete this image?</p>
                                        <button className='btn deleteImageConfirm' onClick={() => deleteImage(image.key)}>Yes</button>
                                        <button className='btn deleteImageCancel' onClick={() => setSelectedImageKey(null)}>No</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Authenticator>
    );
};

export default History;
