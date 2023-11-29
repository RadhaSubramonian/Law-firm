import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'


export default ({imgsrc,name}) => {
    return (
        <>
    
        <Card style={{backgroundColor:'black',border:'1px solid gray',color:'white', width: '300px' ,height:'325px',borderRadius:'10px'}}>
                <img src={imgsrc} style={{height:'100px',marginTop:'15px',marginLeft:'10px'}}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        Ceo of Hunt
                    </Typography>
                    <Typography variant="body2" color="gray">
                    Ament minim mollit non deserurnt ullimaco est
non deserurnt ullimaco est minim mollitullimaco est
non deserurnt ullimaco.
                    </Typography>
                    </CardContent>
              </Card>
              </>
    )
}