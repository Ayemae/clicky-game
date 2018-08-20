import React from "react";
import ClickCard from "./ClickCard";
import bunny from '../images/bunny.jpg'; //1
import duckling from '../images/duckling.jpg'; //2
import fox from '../images/fox.jpg'; //3
import horse from '../images/horse.jpg'; //4
import joey from '../images/joey.jpg'; //5
import kitten from '../images/kitten.jpg'; //6
import lamb from '../images/lamb.jpg'; //7
import otter from '../images/otter.jpg'; //8
import panda from '../images/panda.jpg'; //9
import puppy from '../images/puppy.jpg'; //10
import seal from '../images/seal.jpg'; //11
import turtle from '../images/turtle.jpg'; //12

let score = 0;
let loses = 0;

var cardList = [
    {
        id: 1,
        image: bunny,
        clicked: false
    },
    {
        id: 2,
        image: duckling,
        clicked: false
    },
    {
        id: 3,
        image: fox,
        clicked: false
    },
    {
        id: 4,
        image: horse,
        clicked: false
    },
    {
        id: 5,
        image: joey,
        clicked: false
    },
    {
        id: 6,
        image: kitten,
        clicked: false
    },
    {
        id: 7,
        image: lamb,
        clicked: false
    },
    {
        id: 8,
        image: otter,
        clicked: false
    },
    {
        id: 9,
        image: panda,
        clicked: false
    },
    {
        "id": 10,
        "image": puppy,
        "clicked": false
    },
    {
        id: 11,
        image: seal,
        clicked: false
    },
    {
        id: 12,
        image: turtle,
        clicked: false
    }
]

function Shuffle(o) {
    
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    console.log(o);
    return o;
};

var cardList = Shuffle(cardList);

// let currentOrder = [];


class GameSpace extends React.Component {

    // currentOrder = [];

    state = {
        cardList,
        clicked: false,
        score: 0,
        losses: 0
    }


    Shuffle = (o) => {
        console.log("HI")
        console.log(o)
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    

    componentDidMount() {

    }


    handleClick = id => {
        let guessedCorrectly = false;
        const newData = this.state.cardList.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessedCorrectly = true;
                }
                console.log("Is clicked: " + newItem.clicked)
                this.setState.cardList = this.Shuffle(cardList);
            }
            return newItem;

 
        }
        );  guessedCorrectly
        ? this.CorrectGuess(newData)
        : this.IncorrectGuess(newData);
 
    }


    render() {
        return (
            <div className="game-space">
                {cardList.map(card => (
                    <ClickCard
                        image={card.image}
                        id={card.id}
                        key={card.id}
                        clicked={card.clicked}
                        handleClick={this.handleClick}
                    />
                ))}
            </div>
        )
    }
}

export default GameSpace;