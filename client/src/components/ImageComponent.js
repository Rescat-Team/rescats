import React from 'react';
import myImage from '../image/image.png';


const ImageComponent = () => {
  return (
    <div className="img-home">
      <img src={myImage} alt="My Image" />
    </div>
  );
};

export default ImageComponent;
