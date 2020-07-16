import React from 'react'
import { Box, Typography, Button, IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer>
        <Box height="120px" width="100%" bgcolor="black" display="flex" flexWrap="wrap" justifyContent="space-around" alignItems="flex-start" >
            <Box pt={2} >
                <Typography variant="h6" style={{textTransform:"capitalize",color:"white"}} >contact us </Typography>
                <Typography variant="p" style={{color:"white"}} >tanzeeltasleem648@gmail.com</Typography><br/>
                <Box ml={-2} >
                <a href="https://www.facebook.com/tanzeel.tasleem.7" target="_blank"  rel="noopener noreferrer">
                <IconButton  style={{ color:"white"}} >
                    <FacebookIcon/>
                </IconButton>
                </a>
                <a href="https://twitter.com/TanzeelTasleem" target="_blank"  rel="noopener noreferrer">
                <IconButton style={{color:"white"}}>
                    <TwitterIcon/>
                </IconButton>
                </a>
                <a href="https://github.com/TanzeelTasleem/Shoe-Store" target="_blank"  rel="noopener noreferrer">
                <IconButton style={{color:"white"}}>
                    <GitHubIcon/>
                </IconButton>
                </a>
                </Box>
            </Box>
            <Box pt={2} pr={4} display="flex" justifyContent="space-around">
             <Button onClick={()=>{navigate('/')}} style={{color:"white" , fontWeight:"600"}}>Home</Button> 
             <Button onClick={()=>{navigate('/products')}} style={{color:"white" , fontWeight:"600"}}>products</Button> 
             <Button onClick={()=>{navigate('/cart')}} style={{color:"white", fontWeight:"600"}}>cart</Button> 
           </Box>
           </Box>
           </footer>
    )
}
