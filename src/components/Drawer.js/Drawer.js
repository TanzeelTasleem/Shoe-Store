import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RedeemIcon from '@material-ui/icons/Redeem';
import { useNavigate } from 'react-router-dom' 
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  drawer: {
    width: "10px"
  },
  container: {
    display:"flex",
    justifyContent:"center"
  }
});


export const DrawerMenu=(props)=>{
 const classes=useStyles()
 const navigate = useNavigate()
 const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon/>,
      onClick: () => navigate('/') 
    },
    {
      text: "Products",
      icon: <RedeemIcon/>,
      onClick: () => navigate('/products')
    },
    {
        text: "Cart",
        icon: <ShoppingCartIcon/>,
        onClick: () => navigate('/cart')
      }
  ];
  return (
    <div>
      <MUIDrawer className={classes.drawer}  variant="persistent" open={props.value}>
        <List style={{width:"200px"}} >
          {itemsList.map((obj, index) => (
            <ListItem button key={obj.text} onClick={obj.onClick}>
              {obj.icon && <ListItemIcon>{obj.icon}</ListItemIcon>}
              <ListItemText primary={obj.text} />
            </ListItem>
          ))}
        </List>
      </MUIDrawer>
    </div>
  );
}
