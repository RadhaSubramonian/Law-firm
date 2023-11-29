import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default () => {
    return  (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <img src="Image1.png"/>
                    <span style={{position:'relative',top:'-55px',left:'55px'}}>BUSINESS LAW</span>
                </Grid>
                <Grid item xs={4}>
                    <img src="Image2.png"/>
                    <span style={{position:'relative',top:'-55px',left:'55px'}}>PATERNSHIP LAW</span>
                </Grid>
                <Grid item xs={4}>
                    <img src="Image3.png"/>
                    <span style={{position:'relative',top:'-55px',left:'55px'}}>REAL ESTATE LAW</span>
                </Grid>
                <Grid item xs={8}>
                    <img src="Image4.png"/>
                    <span style={{position:'relative',top:'-55px',left:'55px'}}>BUSINESS LAW</span>
                </Grid>
                <Grid item xs={8}>
                    <img src="Image5.png"/>
                    <span style={{position:'relative',top:'-55px',left:'55px'}}>LANDLORD DISPUTE</span>
                </Grid>
                <Grid item xs={4}>
                    <img src="Image6.png"/>
                    <span style={{position:'relative',top:'-55px',left:'55px'}}>ELDER ABUSE</span>
                </Grid>
            </Grid>
        </Box>
    )
}