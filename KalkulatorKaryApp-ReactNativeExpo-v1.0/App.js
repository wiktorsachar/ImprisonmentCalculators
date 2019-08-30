import React from "react";
import DateSelectorPanel from "./components/DateSelectorPanel/DateSelectorPanel";
import EnterPenaltyPanel from "./components/EnterPenaltyPanel/EnterPenaltyPanel";
import RelasePanel from "./components/RelasePanel/RelasePanel";
import Footer from "./components/Footer/Footer";
import ResetButton from "./components/ResetButton/ResetButton";
import Passings from "./components/Passings/Passings";
import { Text, View, DatePickerAndroid } from "react-native";

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
    this.handlePenaltyTextInput = this.handlePenaltyTextInput.bind(this);
    this.handleClearButton = this.handleClearButton.bind(this);
    this.handleDateSelector = this.handleDateSelector.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
  }
  handlePenaltyTextInput(value, period) {
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
  handleClearButton(period) {
    switch (period) {
      case "days":
        this.setState({ days: 0 });
        break;
      case "weeks":
        this.setState({ weeks: 0 });
        break;
      case "months":
        this.setState({ months: 0 });
        break;
      case "years":
        this.setState({ years: 0 });
        break;
      case "passings":
        this.setState({ passings: 0 });
        break;
      default:
        break;
    }
  }
  handleDateSelector = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ currentDate: { day, month, year } });
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };
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
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          padding: 10,
          backgroundColor: "#171716"
        }}
      >
        <View>
          <Text
            style={{
              color: "#51944b",
              fontWeight: "bold",
              fontSize: 30,
              alignSelf: "center",
              marginTop: 15
            }}
          >
            Kalkulator kary
          </Text>
          <Text />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexGrow: 1 }}>
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
                handleClearButton={this.handleClearButton}
              />
              <Passings
                handler={this.handlePenaltyTextInput}
                passings={this.state.passings}
                handleClearButton={this.handleClearButton}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 2
              }}
            >
              <RelasePanel
                days={this.state.days}
                weeks={this.state.weeks}
                months={this.state.months}
                years={this.state.years}
                passings={this.state.passings}
                currentDate={this.state.currentDate}
              />
            </View>
          </View>
          <ResetButton handler={this.handleResetButton} />
        </View>
        <Footer />
      </View>
    );
  }
}

export default App;
