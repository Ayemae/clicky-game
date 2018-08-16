import React from "react";

class ClickCard extends React.Component {
    constructor(props) {
        super(props);
    }

    wasClicked = () => {
        this.dataclicked = "true"
    };

    render() {
        return (
        <div className="click-card" dataid={this.props.id} onClick={() => { this.props.cardWasClicked(this.props.id) }} dataclicked={this.props.clicked.toString()}>
            <div className="img-holder" style={{ backgroundImage: `url(${this.props.image})` }}>
            </div>
        </div>)
    }
}

export default ClickCard;