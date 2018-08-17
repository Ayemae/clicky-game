import React from "react";

const ClickCard = (props) => (
    <div className="click-card" dataid={props.id} onClick={() => { props.handleClick(props.id) }} >
        <div className="img-holder" style={{ backgroundImage: `url(${props.image})` }}>
        </div>
    </div>
)


export default ClickCard;