import React from "react";

const ResetButton = props => {
  return (
    <div className="actions">
      <button onClick={props.handler}>RESET</button>
    </div>
  );
};

export default ResetButton;