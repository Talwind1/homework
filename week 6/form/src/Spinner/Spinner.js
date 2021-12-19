import React from "react";

const Spinner = (props) => {
  return (
    // <div style={props.show}>
    <div class="ui active dimmer ">
      <div class="ui big text loader">Loading</div>
    </div>
    // </div>
  );
};
Spinner.defaultProps = {
  show: "display: inline-block",
};
export default Spinner;
