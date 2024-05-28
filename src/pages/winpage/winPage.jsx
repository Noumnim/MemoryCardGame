import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import win from "../../assets/win.svg"
import Controllers from './controllers';
function WinPage() {
    const matches = useMediaQuery('(min-width:600px)');
    const controller = Controllers();
    return (
        <Box>
            <Grid sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', }}>
                <Typography sx={{ margin: '10px', color: '#18618B', fontSize: '60px', fontWeight: 'bold', marginTop: '50px' }}>You Won !</Typography>
                <Typography sx={{ margin: '10px', color: '#18618B', fontSize: '30px', fontWeight: 'bold' }}>Username: {controller.username}</Typography>
                <Typography sx={{ margin: '10px', color: '#18618B', fontSize: '30px', fontWeight: 'bold' }}>Moves: {controller.moves} </Typography>
                <Typography sx={{ margin: '10px', color: '#18618B', fontSize: '30px', fontWeight: 'bold' }}>Times: {controller.time} </Typography>
                <Grid sx={{ margin: '10px', marginTop: '50px', }}>

                    <Button sx={{
                        borderRadius: '20px', fontWeight: 'bold', textTransform: 'capitalize', padding: '10px', fontSize: '25px', background: '#38B6FF', color: 'white', "&:hover": { backgroundColor: "#1665A4", },
                    }}
                        onClick={controller.handlePlayAgain}
                        variant="contained"
                    >Play again</Button>
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', alignContent: 'flex-end', justifyContent: 'space-between', position: 'absolute', bottom: 0 }}>
                <img width={matches ? "500px" : "300px"} src={win} alt="win page" />
            </Grid>
        </Box>
    )
}


export default WinPage;
