import React from 'react'
import { Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
             <h1>not found</h1>
             <label>Back To Home : </label>
            <Button onClick={()=>{navigate('/')}} variant="contained">home</Button>
        </div>
    )
}
