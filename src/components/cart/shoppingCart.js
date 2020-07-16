import React, {useState,useContext } from 'react'
import { GlobalContext } from '../../context/globalContext'
import { Box, Typography, Button } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {useNavigate} from 'react-router-dom'
export const ShoppingCart = () => {
    const {cart,deleteCartItem} = useContext(GlobalContext)
    const [count,setCount] = useState(1)
    const [checked, setChecked] =useState(false);
    const navigate = useNavigate()

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

  
    if(!cart[0]){
        return(
            <Box display="flex" flexDirection="column" alignItems="center" height="100vh" >
                <h1>Select An Item</h1>
                <label>Go To Products</label>
                <Button onClick={()=>{navigate('/products')}} variant="contained" >products</Button>
            </Box>
        )
    }
    return (
        <Box overflow="hidden" >
            {
              cart.map((product)=>{
                  return(
                      <Box mt={10} display="flex" flexWrap="wrap" justifyContent="space-evenly">
                      <img style={{maxWidth:"500px",maxHeight:"500px"}} src={product.image} alt="shoe" />
                       <Box maxWidth="450px" p={2}>
                             <Box mb={2} display="flex" justifyContent="space-between" flexWrap="wrap" >
                            <Typography variant="h5">{product.title}</Typography>
                            <Typography variant="h5">Rs.{product.price}.00</Typography>
                            </Box>
                            <Typography variant="h7" style={{textAlign:"center" , marginBottom:"10px"}} >{product.description}</Typography>
                             <Box mt={2}>
                                 <Typography variant="h5" style={{textTransform:"capitalize"}} >Color's avaliable:</Typography>
                                 <Box>
                                 <Typography variant="h7" style={{textTransform:"capitalize"}} >brown</Typography>
                                 <Checkbox
                                      checked={checked}
                                      onChange={handleChange}
                                      size="small"
                                      color="default"
                                      inputProps={{ 'aria-label': 'checkbox with default color' }}                                    />
                                 </Box>
                                 <Box>
                                 <Typography variant="h7" style={{textTransform:"capitalize"}} >red</Typography>
                                 <Checkbox
                                      checked={checked}
                                      onChange={handleChange}
                                      size="small"
                                      color="default"
                                      inputProps={{ 'aria-label': 'checkbox with default color' }}                                    />
                                 </Box>
                                 <Box>
                                 <Typography variant="h7" style={{textTransform:"capitalize"}} >black</Typography>
                                 <Checkbox
                                      size="small"
                                      checked={checked}
                                      onChange={handleChange}
                                      color="default"
                                      inputProps={{ 'aria-label': 'checkbox with default color' }}                                    />
                                 </Box>
                            </Box>
                            <Typography variant="h5">Quantity:</Typography>
                             <Box display="flex" justifyContent="center">
                                <Button onClick={()=> setCount(count+1)}> <AddIcon/> </Button>
                                    <Typography variant="h5">{count}</Typography>
                                <Button onClick={()=>{ count===1 ? deleteCartItem(product): setCount(count-1)}} > <RemoveIcon/> </Button>

                             </Box>
                            <Box mt={4} mb={5} display="flex" justifyContent="center">
                                <Button onClick={()=>deleteCartItem(product)} style={{backgroundColor:"black" , color:"white" , height:"40px" , width:"220px" , fontWeight:"600"}} size="large" variant="contained">
                                    remove from cart 
                                </Button>   
                            </Box>
                        </Box>
                     </Box>
                  )
            })}            
            <Box mt={4} mb={5} display="flex" justifyContent="center">
            <Button style={{backgroundColor:"black" , color:"white" , height:"40px" , width:"220px" , fontWeight:"600"}} size="large" variant="contained">
               Add payment 
            </Button>   
            </Box>
        </Box>
    )
}
