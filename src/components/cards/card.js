import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/globalContext';

const useStyles = makeStyles({
  root: {
    marginTop:"20px",
    maxWidth: 345,
  },
  container:{
    maxWidth: 445,
    maxHeight: 500,
  },
  media: {
    height: 270,
  },
});

export const MediaCard = ( {callInProducts} = false) => {
  const classes = useStyles();
  const navigate = useNavigate()
  
  const {products,handleCart} = useContext(GlobalContext)
  
    return(
      <Box mt={4} display="flex" flexWrap="wrap" justifyContent="space-around">
        {
          products.map((obj)=>{
            return(
              <Box mb={4}>
              <Card className={ callInProducts ? classes.container : classes.root }>
                <CardActionArea onClick={()=>{navigate(`/products/${obj.id}`)}}>
                  <CardMedia
                    className={classes.media}
                    image={obj.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography style={{textAlign:"left"}} gutterBottom variant="h5" component="h2">
                      {obj.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {obj.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button style={{backgroundColor:"black" ,color:"white", height:"38px" , width:"180px" , fontWeight:"600"}} variant="contained" size="large"  onClick={(()=>{handleCart(obj)})} >
                    Add to Chart
                  </Button>
                  <Button onClick={()=>{navigate(`/products/${obj.id}`)}} size="large" color="black">
                    Details
                  </Button>
                </CardActions>
              </Card>
             </Box>
            )
          })
        }
        </Box>
     )
  }      
      
