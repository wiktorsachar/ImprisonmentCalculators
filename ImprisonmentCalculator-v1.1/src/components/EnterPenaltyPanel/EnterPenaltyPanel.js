import React from "react";

const EnterPenaltyPanel = props => {
  return (
    <div id="enter-penalty-panel">
      <h3>Wyrok:</h3>
      <input
        className="penalty-input"
        type="text"
        placeholder="lata"
        size="4"
        value={props.years || ""}
        onChange={e => {
          props.handler(e.target.value, "years");
        }}
      />
      <input
        className="penalty-input"
        type="text"
        placeholder="miesiące"
        size="4"
        value={props.months || ""}
        onChange={e => {
          props.handler(e.target.value, "months");
        }}
      />
      <br />
      <input
        className="penalty-input"
        type="text"
        placeholder="tygodnie"
        size="4"
        value={props.weeks || ""}
        onChange={e => {
          props.handler(e.target.value, "weeks");
        }}
      />
      <input
        className="penalty-input"
        type="text"
        placeholder="dni"
        size="4"
        value={props.days || ""}
        onChange={e => {
          props.handler(e.target.value, "days");
        }}
      />
    </div>
  );
};

export default EnterPenaltyPanel;
