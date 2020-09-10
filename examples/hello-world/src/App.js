import React, { Component } from "react";
import ArWallet from "react-ar-wallet";

class App extends Component {
  state = {
    startDate: new Date()
  };

  render() {
    return <ArWallet wallet="FRmt6llhhy06lubEmrgBej53MVTtPaWtaZk5QeZpyBI" />;
  }
}

export default App;
