import React from "react";

const RelasePanel = props => {
  const day = 86400000;
  const period =
    props.days * 1 +
    props.weeks * 7 +
    props.months * 30 +
    props.years * 365 -
    props.passings;
  const currentDate = Date.parse(props.currentDate);
  const date = new Date(currentDate + period * day);
  const displayDate = (() => {
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();
    console.log("day:" + day + " month:" + month + " year:" + year);
    if (day.length < 2) {
      day = `0${day}`;
    }
    if (month.length < 2) {
      month = `0${month}`;
    }
    return day + "." + month + "." + year + " r.";
  })();
  if (
    (props.days || props.weeks || props.months || props.years) &&
    props.currentDate
  ) {
    return (
      <div id="relase-panel" className="border">
        {/* <h3>Proponowana data zwolnienia:</h3> */}
        <h1 id="output-date">{displayDate}</h1>
        <p>(dodano: {period} dni)</p>
      </div>
    );
  } else if (props.days || props.weeks || props.months || props.years) {
    return (
      <div id="relase-panel">
        <p>(uzupełnij datę)</p>
      </div>
    );
  } else if (props.currentDate) {
    return (
      <div id="relase-panel">
        <p>(uzupełnij wyrok)</p>
      </div>
    );
  } else {
    return (
      <div id="relase-panel">
        <p>(uzupełnij datę i wyrok)</p>
      </div>
    );
  }
};

export default RelasePanel;
