import React from "react";

class ClickCard extends React.Component {
    state = {
        clicked: false
    };



    render() {
        return (
            <div className="click-card">
                <img src={this.props.img} alt="card" />
            </div>
        )
    }
}

export default ClickCard;