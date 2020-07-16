import React, { useContext } from 'react'
import { useParams} from 'react-router-dom'
import { GlobalContext } from '../context/globalContext'
import { Box , Typography,Button } from '@material-ui/core'
import {NotFound} from '../components/NotFound/NotFound'

export const ProductDetail = () => {
    const {products,handleCart} = useContext(GlobalContext)
    const  {productid} = useParams()
    const item = products.filter( (product)=> product.id === productid )

    if(!item[0]){
        return (
            <NotFound/>
        )
    }
    return (
        <Box mt={5} overflow="hidden">
            {
                item.map((item)=>{
                    return(
                        <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
                         <img style={{maxWidth:"700px",maxHeight:"700px"}} src={item.image} alt="nikeShoe" />
                         <Box maxWidth="450px" p={2}>
                             <Box mb={2} display="flex" justifyContent="space-between" flexWrap="wrap" >
                                 <Typography variant="h3">{item.title}</Typography>
                                 <Typography variant="h5">Rs.{item.price}.00</Typography>
                             </Box>
                                 <Typography variant="h7" style={{textAlign:"center" , marginBottom:"10px"}} >{`${item.description}`}</Typography>
                                 <Box mt={2}>
                                     <Typography variant="h5" style={{textTransform:"capitalize"}} >Color's avaliable:</Typography>
                                     <Box>
                                     <Typography variant="h7" style={{textTransform:"capitalize"}} >brown</Typography>
                                     </Box>
                                     <Box>
                                     <Typography variant="h7" style={{textTransform:"capitalize"}} >red</Typography>
                                     </Box>
                                     <Box>
                                     <Typography variant="h7" style={{textTransform:"capitalize"}} >black</Typography>
                                     </Box>
                                     <Box mt={4} mb={5} display="flex" justifyContent="center">
                                        <Button onClick={()=>{handleCart(item)}} style={{backgroundColor:"black" , color:"white" , height:"45px" , width:"300px" , fontWeight:"600"}} size="large" variant="contained">
                                           Add to cart 
                                        </Button>   
                                        </Box>
                                   </Box>

                      </Box>
                      </Box>
                    )})
            }
        </Box>
    )
}
