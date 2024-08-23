import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sessionTwo.css";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { Puff } from 'react-loader-spinner'

const SessionTwo = () => {
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  return (
    <div className="carousel-c mt-5 pt-3">
        <div className="carousel-loader  text-center">
  <Puff
  visible={true}
  height="30"
  width="50"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /><h3 className="mx-2 fw-bold">
  Our Best Sellers</h3> </div>
      
      <Slider {...defaultSettings} responsive={responsiveSettings}>
        <div className="slide mt-5">
          <div className="card">
            <img
              src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/SPF501200-2-min.png?crop=center&height=630&v=1646515554&width=420"
              alt="Slide"
            />
           <div className="card-content">
            <h4 className="dropdown-item"> flawless matt looking skin.</h4>
            <span> flawless matt looking skin.</span><br/>
            <span>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
            </span>
            <p class="category-label px-0">
              {" "}
              <span>₹ 295 MRP </span>
              <span className="text-prce">₹ 299 </span>
            </p>
          </div>
          <button className='sessionTwo-but'>Add To Cart</button>

          </div>
        </div>
        <div className="slide">
          <div className="card">
            <img
              src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/18-min.png?crop=center&height=630&v=1679317872&width=420"
              alt="Slide"
            />
<div className="card-content">
            <h4  className="dropdown-item"> flawless matt looking skin.</h4>
            <span> flawless matt looking skin.</span><br/>
            <span>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
            </span>
            <p class="category-label p-0">
              {" "}
              <span>₹ 295 MRP </span>
              <span className="text-prce">₹ 299 </span>
            </p>
          </div>
          <button className='sessionTwo-but'>Add To Cart</button>

        </div>
        </div>
        <div className="slide">
          <div className="card">
            <img
              src=" https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/SalicylicAcid2_1200-1-min.png?crop=center&height=630&v=1646458899&width=420"
              alt="Slide 3"
            />
          <div className="card-content">
            <h4  className="dropdown-item"> flawless matt looking skin.</h4>
            <span> flawless matt looking skin.</span><br/>
            <span>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
            </span>
            <p class="category-label p-0">
              {" "}
              <span>₹ 295 MRP </span>
              <span className="text-prce">₹ 299 </span>
            </p>
          </div>
          <button className='sessionTwo-but'>Add To Cart</button>

          </div>
        </div>
        <div className="slide">
          <div className="card">
            <img
              src=" https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/products/SalicylicAcid2_1200-1-min.png?crop=center&height=630&v=1646458899&width=420"
              alt="Slide 3"
            />
           <div className="card-content">
            <h4  className="dropdown-item"> flawless matt looking skin.</h4>
            <span> flawless matt looking skin.</span><br/>
            <span>
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarHalf />
            </span>
            <p class="category-label p-0">
              {" "}
              <span>₹ 295 MRP </span>
              <span className="text-prce">₹ 299 </span>
            </p>
          </div>
          <button className='sessionTwo-but'>Add To Cart</button>

          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SessionTwo;
