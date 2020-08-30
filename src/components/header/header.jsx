import React, { useState, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, Box, makeStyles, Button,Hidden, IconButton,Badge} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { GlobalContext } from '../../context/globalContext';
import {DrawerMenu} from '../Drawer.js/Drawer'
const useStyles = makeStyles({
    toolbar:{
        display:"flex",
        justifyContent:"space-between"
    },
    button:{
        color:"white",
    },
    nav:{
        display:"flex",
        justifyContent:"space-around",
        // eslint-disable-next-line
        ['@media (max-width:953px)']:{ 
            display:"none"
        },
    menu:{
        display:"none"
    }
    },
    links:{
        fontWeight:"550",
        fontSize:"17px",
    } 
})


export const Header =()=>{

    const classes = useStyles()
    const [drawer,setDrawer] = useState(false)
    const navigate =  useNavigate()
    const {cart} = useContext(GlobalContext)



    return(
        <Box onMouseOut={()=>{setDrawer(false)}}>
            <AppBar position="static" style={{backgroundColor:"#090a0a"}} >
                <Toolbar className={classes.toolbar}>
                        <Button onClick={()=>{navigate('/')}} className={classes.button}>
                                <img style={{width:"40px" , height:"35px"}} alt="nikeShoe" src="https://image.flaticon.com/icons/svg/2843/2843937.svg"></img>
                        </Button>
                        <Box minWidth="600px" className={classes.nav}>
                          <Button onClick={()=>{navigate('/')}} className={classes.button}>
                            <Typography className={classes.links} variant="h6">home</Typography>
                         </Button>
                         <Button onClick={()=>{navigate('/products')}} className={classes.button}>
                            <Typography className={classes.links} variant="p">products</Typography>
                         </Button>
                         <IconButton onClick={()=>{navigate('/cart')}} className={classes.button}>
                            <Badge badgeContent={cart.length}>
                            <ShoppingCartIcon/>
                            </Badge>
                         </IconButton>
                       </Box>
                        <Hidden mdUp>
                           <Box>
                              <Button onClick={()=>{setDrawer(!drawer)}} className={classes.button}>
                                  <MenuIcon/>
                              </Button>
                              <DrawerMenu value={drawer}/>
                           </Box> 
                     </Hidden>
                </Toolbar>
            </AppBar>
        </Box>
    )
}