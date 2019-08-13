//Imprisonment calculator app;

import React from "react";
import DateSelectorPanel from "./components/DateSelectorPanel/DateSelectorPanel";
import EnterPenaltyPanel from "./components/EnterPenaltyPanel/EnterPenaltyPanel";
import RelasePanel from "./components/RelasePanel/RelasePanel";
import Footer from "./components/Footer/Footer";
import ResetButton from "./components/ResetButton/ResetButton";
import Passings from "./components/Passings/Passings";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: "",
      days: 0,
      weeks: 0,
      months: 0,
      years: 0,
      passings: 0
    };
    /*
    - zamienić days,weeks,months,years na days, które będą przeliczane w handlePenaltyTextInput;
    - dodać komponent odpowiadający za zaliczenia (odejmowanie dni od finalnej daty);
    - rozbicie komponentu EnterPenaltyPanel na mniejsze komponenty;
    */

    this.handlePenaltyTextInput = this.handlePenaltyTextInput.bind(this);
    this.handleDateSelector = this.handleDateSelector.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
  }
  handlePenaltyTextInput(value, period) {
    if (value) {
      value = parseInt(value);
    } else {
      value = 0;
    }
    switch (period) {
      case "days":
        this.setState({ days: value });
        break;
      case "weeks":
        this.setState({ weeks: value });
        break;
      case "months":
        this.setState({ months: value });
        break;
      case "years":
        this.setState({ years: value });
        break;
      case "passings":
        this.setState({ passings: value });
        break;
      default:
        break;
    }
  }
  handleDateSelector(date) {
    this.setState({ currentDate: date });
  }
  handleResetButton() {
    this.setState({
      currentDate: "",
      days: 0,
      weeks: 0,
      months: 0,
      years: 0,
      passings: 0
    });
  }
  render() {
    console.log(this.state);
    return (
      <>
        <div id="wrapper">
          <h2 id="title">Kalkulator kary</h2>
          <div id="input-module">
            <DateSelectorPanel
              handler={this.handleDateSelector}
              currentDate={this.state.currentDate}
            />
            <EnterPenaltyPanel
              handler={this.handlePenaltyTextInput}
              days={this.state.days}
              weeks={this.state.weeks}
              months={this.state.months}
              years={this.state.years}
            />
            <Passings
              handler={this.handlePenaltyTextInput}
              passings={this.state.passings}
            />
          </div>
          <br />
          <RelasePanel
            days={this.state.days}
            weeks={this.state.weeks}
            months={this.state.months}
            years={this.state.years}
            passings={this.state.passings}
            currentDate={this.state.currentDate}
          />
        </div>
        <br />
        <ResetButton handler={this.handleResetButton} />
        <Footer />
      </>
    );
  }
}

export default App;
