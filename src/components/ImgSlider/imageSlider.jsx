import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css'
import './Slider.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Background from '../../images/background.jpg'
import Background2 from '../../images/background2.png'
import Background3 from '../../images/nikeShoe.jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const ImgSlider =()=>{
   return (
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    className="container"
   >   
         
      <div>
          <img style={{width:"100vw"}} src={Background2} alt="shoe"/>
      </div>
      
      <div>
        <img style={{width:"100vw"}} src={Background3} alt="shoes"/>
      </div>
      <div>
          <img style={{width:"100vw"}} src={Background} alt="nike"/>
      </div>
      <div>
        <img style={{width:"100vw"}} src="https://wallpapercave.com/wp/wp2958103.png" alt="shoeImage"/>
      </div>
      
      <div>     
        <img style={{width:"100vw"}} alt="s" src="https://cdn.pixabay.com/photo/2016/04/12/14/08/shoe-1324431_960_720.jpg" />
      </div>
      
      

  </AutoplaySlider>
)};

