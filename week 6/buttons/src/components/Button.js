//import react from "react";

const Button = (props) => {
  let className = props.content.toLowerCase().split(" ")[0];

  return <button className={className}>{props.content}</button>;
};

export default Button;
