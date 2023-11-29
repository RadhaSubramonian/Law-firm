import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'


export default ({successRate,imgsrc}) => {
  
    return (
        <Card style={{backgroundColor:'black',border:'1px solid gray',color:'white', width: '300px' ,height:'325px',borderRadius:'10px'}}>
            <img src={imgsrc} style={{height:'100px',marginTop:'15px',marginLeft:'10px'}}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {successRate}
                </Typography>
                <Typography variant="body2" color="gray">
                Ament minim mollit non deserurnt ullimaco est
                non deserurnt ullimaco est minim mollitullimaco est
                non deserurnt ullimaco.
                </Typography>
                </CardContent>
            <CardActions>
                <Button  style={{backgroundColor:'#E3B748',borderRadius:'23.5px',fontSize:'9px'}} size="small" className='btn-card'><span style={{color:'black'}}>Read More</span></Button>
            </CardActions>
        </Card>
    )

}