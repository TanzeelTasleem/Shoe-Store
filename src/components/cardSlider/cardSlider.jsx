import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { GlobalContext } from "../../context/globalContext";
import { useNavigate } from "react-router-dom";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  pauseOnHover: true,
  autoplay:true,
  responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            // vertical: true,
            // verticalSwiping:true,
            // swipeToSlide: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false

          }
        }
      ]
  };

export const CardSlider=()=>{
    const {products} = useContext(GlobalContext)
    const navigate = useNavigate();
    return (
      <div style={{width:"100%",overflow: "hidden" }}>
         <Slider {...settings} > 
            {
                products.map((product)=>{
                  return(
                    <div>
                    <img style={{width:"300px", marginBottom:"15px" , height:"300px"}} onClick={()=>{navigate(`/products/${product.id}`)}} src={product.image} alt="nikeShoe" />
                    </div>
                  )
                })
            }
          </Slider>
      </div>
    );
  }
