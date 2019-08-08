import React from "react";

const DateSelectorPanel = props => {
  return (
    <div id="date-selector-panel">
      <h3>Rozpoczęcie kary:</h3>
      <input type="date" value={props.currentDate} onChange={e => props.handler(e.target.value)} />
    </div>
  );
};

export default DateSelectorPanel;
