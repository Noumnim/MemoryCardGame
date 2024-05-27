import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import backCard from "../../assets/card/back.svg";
import '../../pages/component/singleCard.css';

export default function SingleCard({ card, handleChoice }) {
    const handleClick = () => {
        if (!card.flipped) {
            handleChoice(card);
        }
    };
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Grid item key={card.id} sx={{ margin: '2px' }}>
           <Grid className={`card ${card.flipped ? "flipped" : ""}`} sx={{ position: 'relative', width: matches ? '100px' : '60px', height: matches ? '100px' : '50px', }}>
                <img
                style={{ width: matches ? '100px' : '60px', height: matches ? '100px' : '60px',}}
                    src={card.src}
                    alt="card front"
                    className="card-front"
                />
                <img
                    style={{width: matches ? '100px' : '60px', height: matches ? '100px' : '60px',}}
                    onClick={handleClick}
                    src={backCard}
                    alt="card back"
                    className="card-back"
                />
            </Grid>
          </Grid>
    );
}
