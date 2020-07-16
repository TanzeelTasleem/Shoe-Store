import React from 'react'
import {ImgSlider} from '../components/ImgSlider/imageSlider'
import { CardSlider } from '../components/cardSlider/cardSlider'
import { Box } from '@material-ui/core'
import './home.module.css'
import { Footer } from '../components/Footer/Footer'
export const Home = () => {
    return (
        <div>
            <ImgSlider/>
            <Box mt={10}>
            <h2><span>SHOE CABNIET</span></h2> 
              <CardSlider/>
            </Box>
            <Footer/>
            </div>
    )
}
