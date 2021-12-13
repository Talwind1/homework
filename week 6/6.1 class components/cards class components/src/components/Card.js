//import react from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.pic} alt="man"></img>
      <div className="info">
        <div>{props.details}</div>
        <a href={props.link}>Check It Out</a>
      </div>
    </div>
  );
};

export default Card;
