import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myradio: undefined,
      myselect: "one"
    };
  }

  onChangeRadio = event => {
    this.setState({ myradio: event.target.value });
  };

  onChangeSelect = event => {
    this.setState({ myselect: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="radio"
          value="one"
          name="myradio"
          required
          onChange={this.onChangeRadio}
          checked={this.state.myradio === "one"}
        />
        <input
          type="radio"
          value="two"
          name="myradio"
          required
          checked={this.state.myradio === "two"}
          onChange={this.onChangeRadio}
        />
        <select
          name="myselect"
          required
          value={this.state.myselect}
          onChange={this.onChangeSelect}
        >
          <option value="">Please choose...</option>
          <option value="one">One</option>
          <option value="two">Two</option>
        </select>
      </div>
    );
  }
}

export default App;
