const Counter = (props) => {
  return (
    <div className="counter">
      <label>{props.content}</label>
      <button className="btn" onClick={props.func}>
        increment
      </button>
    </div>
  );
};

export default Counter;
