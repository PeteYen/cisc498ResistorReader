

import * as React from 'react';
export default function About() {


  return (
     <div>
         <div className="para">
             <h2>Introduction: Resistor Reader</h2>
             <p>Resistor Reader is an app designed to help you read the values of resistors easily. With Resistor Reader, you can upload an image of a resistor or capture an image using your computer's camera to determine the value of the resistor.</p>
         </div>
         <div className="para">
             <h2>Uploading an Image</h2>
             <p>To upload an image of a resistor, follow these steps:</p>
             <p>a. Click on the "Upload Image" button located on the main page of the app.</p>
             <p>b. Select the image of the resistor from your computer's file system.</p>
             <p>c. process the image and determine the value of the resistor.</p>
         </div>
         <div className="para">
             <h2>Using Your Computer's Camera</h2>
             <p>To capture an image of a resistor using your computer's camera, follow these steps:</p>
             <p>a. Click on the "Take a picture by Laptop" button located on the main page of the app.</p>
             <p>b. Allow the app to access your computer's camera when prompted.</p>
             <p>c. Hold the resistor up to the camera and adjust it until the resistor is in focus.</p>
             <p>d. Click on the "Capture" button to take a picture of the resistor.</p>
             <p>e. process the image and determine the value of the resistor.</p>
         </div>
         <div className="para">
             <h2>Understanding the Results</h2>
             <p>Once the app processes the image, it will display the value of the resistor on the screen. The value will be displayed in ohms (Ω) and will be accompanied by a color code chart to help you verify the results.</p>
         </div>
         <div className="para">
             <h2>Conclusion</h2>
             <p>Congratulations! You now know how to use Resistor Reader to determine the value of a resistor. If you encounter any issues while using the app or have any questions, please refer to the "Help" section or contact our support team for assistance.</p>
         </div>

     </div>

  );
}
    
