import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondes: 0,
      heure: 0,
      minutes: 0,
      timestamp: 0,
    };
  }

  render() {
    const { secondes, heure, timestamp } = this.state;
    return (
      <div>
        <h1>Current Heure: {timestamp}</h1>
        <h1>
          Current {heure}: {Math.floor(secondes / 60)}
        </h1>
        <h1>Current Secondes: {secondes}</h1>
      </div>
    );
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        secondes: prevState.secondes + 1,
        minutes: Math.floor((this.state.secondes + 1) / 60),
        heure: Math.floor(this.state.secondes / 3600),
      }));
    }, 1000);
  }
}
