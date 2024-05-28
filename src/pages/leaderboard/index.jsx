import { Box, Grid, Typography, useMediaQuery,Button } from '@mui/material';
import {useNavigate } from 'react-router-dom';
import React from 'react'
import crown from '../../assets/crown.svg'
import Controller from './controller';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function LeaderBoard() {
    const controller = Controller();
    const matches = useMediaQuery('(min-width:600px)');
    const navigate = useNavigate();
    return (
        <Box>
            
            <Grid container spacing={2} columns={16} sx={{ flexGrow: 1, justifyContent: 'center', marginTop: '20px' }}>
                <Grid sx={{ position: 'absolute', left: '0', marginTop: '150px' }}>
                    <img style={{ width: matches?'90px':'40px' }} src={crown} alt='crown' />
                </Grid>
                <Button sx={{borderRadius:'50%'}}  onClick={() => navigate('/')}>
                <ArrowBackIcon />
                </Button>
                
                <Grid xs={12} spacing={2} sx={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    <Typography sx={{ fontSize: '40px', color: '#18618B', fontWeight: 'bold' }}>Leaderboard</Typography>
                </Grid>

                <Grid xs={12} spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px', width: '400px', height: '60px', padding: '20px', color: '#757575' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>Username</Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold'}}>move</Typography>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>time</Typography>
                </Grid>

                {controller.leaderboard.map((entry, index) => (
                    <Grid xs={12} spacing={2} sx={{ background: '#B7E5FF', display: 'flex', justifyContent: 'space-between', margin: '10px', width: '400px', height: '60px', borderRadius: '20px', boxShadow: '3px 3px 5px #aaaaaa', padding: '20px' }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>{entry.name} </Typography>
                        <Typography sx={{ fontSize: '20px', color: '#757575', fontWeight: 'bold',marginLeft:'60px'  }}>{entry.moves}</Typography>
                        <Typography sx={{ fontSize: '20px', color: '#18618B', fontWeight: 'bold' }}>{entry.time}</Typography>
                    </Grid>
                ))}          
                  </Grid>
        </Box>
    )
}

export default LeaderBoard;
