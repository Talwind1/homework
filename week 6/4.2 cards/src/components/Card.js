//import react from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.pic} alt="man"></img>
      <div className="info">
        <span>{props.details}</span>
        <a href={props.link}>share</a>
      </div>
    </div>
  );
};

export default Card;
