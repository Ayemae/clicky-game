import React from "react";
import ClickCard from "./ClickCard";

allCards = [];

class ClickCard extends React.Component {
    state = {
        score: 0,
        losses: 0
    };

    componentDidMount () {
        this.startGame();
    }

    startGame = () => {
        
    }


    render() {
        return (
            <div className="click-card">
                <img src={this.props.img} alt="card" />
            </div>
        )
    }
}