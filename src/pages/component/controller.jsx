import { useCallback, useEffect, useState } from "react";
import flip1 from '../../assets/card/flip1.svg';
import flip2 from '../../assets/card/flip2.svg';
import flip3 from '../../assets/card/flip3.svg';
import flip4 from '../../assets/card/flip4.svg';
import flip5 from '../../assets/card/flip5.svg';
import flip6 from '../../assets/card/flip6.svg';
import flip7 from '../../assets/card/flip7.svg';
import flip8 from '../../assets/card/flip8.svg';
import { useLocation, useNavigate } from "react-router-dom";
import {  doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const cardImages = [
    { "src": flip1 },
    { "src": flip2 },
    { "src": flip3 },
    { "src": flip4 },
    { "src": flip5 },
    { "src": flip6 },
    { "src": flip7 },
    { "src": flip8 },
];

const MemoryCardController = () => {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [matchedPairs, setMatchedPairs] = useState(0);
    const totalPairs = cardImages.length;
    const location = useLocation();
  const { username, docId } = location.state;

    const navigate = useNavigate();

    const handleChoice = useCallback((card) => {
        if (!disabled) {
            setCards(prevCards => prevCards.map(c => {
                if (c.id === card.id) {
                    return { ...c, flipped: !c.flipped };
                }
                return c;
            }));
            choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
        }
    }, [choiceOne, disabled]);

    const shuffleCards = useCallback(() => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random(), flipped: true }));
        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
        setSeconds(0);
        setMinutes(0);
        setMatchedPairs(0);
        setTimerRunning(false);
        setTimeout(() => {
            setCards(prevCards => prevCards.map(card => ({ ...card, flipped: false })));
            setTimerRunning(true);
        }, 2000);
    }, []);
    
    const resetChoice = useCallback(() => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(turns => turns + 1);
        setDisabled(false);
    }, []);

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {
                setMatchedPairs(prev => prev + 1);
                resetChoice();
            } else {
                setTimeout(() => {
                    setCards(prevCards => prevCards.map(card => {
                        if (card.id === choiceOne.id || card.id === choiceTwo.id) {
                            return { ...card, flipped: false };
                        }
                        return card;
                    }));
                    resetChoice();
                }, 1000);
            }
        }
    }, [choiceOne, choiceTwo, resetChoice]);

    useEffect(() => {
        let timer;
        if (timerRunning) {
            timer = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds >= 59) {
                        setMinutes(prevMinutes => prevMinutes + 1);
                        return 0;
                    }
                    return prevSeconds + 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [timerRunning]);

    useEffect(() => {
        shuffleCards();
    }, [shuffleCards]);

    const handleGameEnd = useCallback(async () => {
        if (!docId) {
            console.error("No docId found!");
            return;
        }

        try {
            const userDoc = doc(db, "memoryCard", docId);
            await updateDoc(userDoc, {
                moves: turns,
                time: `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
            });
            console.log("Game data updated successfully");
            navigate('/win', { state: { moves: turns, time: `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,username } });
        } catch (e) {
            console.error("Error updating document: ", e);
        }   
    }, [docId, turns, minutes, seconds, navigate,username]);

    useEffect(() => {
        if (matchedPairs === totalPairs) {
            setTimerRunning(false);
            setDisabled(true);
            handleGameEnd();
        }
    }, [matchedPairs, totalPairs, handleGameEnd]);

    return {
        cards,
        turns,
        shuffleCards,
        handleChoice,
        disabled,
        seconds,
        minutes,
        username
    };
};

export default MemoryCardController;
