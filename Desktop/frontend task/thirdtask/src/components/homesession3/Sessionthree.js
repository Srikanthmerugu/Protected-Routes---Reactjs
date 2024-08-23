import React, { useState } from 'react';
import './sessionthree.css'
const ImageSlider = () => {
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0, 0]);
  const images = [
    ["https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/Frizzimg1.png?crop=center&height=630&v=1711112835&width=420",
     "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/Frizzimg2.png?crop=center&height=630&v=1711112835&width=420",
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/ProductMainImageGaurav.png?crop=center&height=630&v=1711112835&width=420"
    ],
    ["https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/LiqSPF50Main.png?crop=center&height=630&v=1709705614&width=420",
     "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/LiqSPF502.png?crop=center&height=630&v=1709705614&width=420",
      "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/LiqSPF503.png?crop=center&height=630&v=1709705614&width=420"],
    ["https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/EyeCream1.png?crop=center&height=630&v=1697788088&width=420",
     "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/EyeCream2.png?crop=center&height=630&v=1697788100&width=420", 
     "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/LiqSPF503.png?crop=center&height=630&v=1709705614&width=420"],
    ["https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/Websiteimage11001600pxGaurav_2.png?crop=center&height=630&v=1691759426&width=420",
     "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/Anti-dandrufftexture.png?crop=center&height=630&v=1694152927&width=420", 
     "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/Websiteimage11001600pxGaurav_2.png?crop=center&height=630&v=1691759426&width=420"]
  ];

  const nextSlide = (index) => {
    setCurrentIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      if (newIndexes[index] < images[index].length - 1) {
        newIndexes[index]++;
      } else {
        newIndexes[index] = 0;
      }
      return newIndexes;
    });
  };

  return (
    <div className="container">
      {images.map((imageGroup, index) => (
        <div key={index} className="slider">
          <button className="prev-btn" onClick={() => nextSlide(index)}>&lt;</button>
          <div className="images">
            {imageGroup.map((image, i) => (
              <img key={i} src={image} alt={`Image ${i + 1}`} style={{ display: i === currentIndexes[index] ? 'block' : 'none' }} />
            ))}
          </div>
          <button className="next-btn" onClick={() => nextSlide(index)}>&gt;</button>
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
