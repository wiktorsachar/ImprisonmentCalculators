import React from "react";

const Passings = props => {
  return (
    <>
      <h3>Zaliczenia:</h3>
      <input
        type="text"
        placeholder="dni"
        size="4"
        value={props.passings || ""}
        onChange={e => {
          props.handler(e.target.value, "passings");
        }}
      />
    </>
  );
};

//bug: wpisujesz liczbę, potem stawiasz minus przed nią, potem usuwasz liczbę i jest NanNan

export default Passings;
