import '@aws-amplify/ui-react/styles.css';
import {Authenticator} from "@aws-amplify/ui-react";
import "./History.scss"

const History = () => {
    const image1 = require('../res_img/img.png');
    const image2 = require('../res_img/img_1.png');
    const image3 = require('../res_img/img_2.png');
    const images = [image1, image2, image3];
    return (
        <Authenticator>
            {({signOut}) => (
                <div className='historyContainer'>
                    <button className='btn' onClick={signOut}>signOut</button>
                    <div className="imageContainer">
                        {images.map((image, index) => (
                            <img src={image} alt={`Image ${index}`} key={`image${index}`} />
                        ))}

                    </div>
                </div>
                )}
        </Authenticator>
    );
};
export default History;