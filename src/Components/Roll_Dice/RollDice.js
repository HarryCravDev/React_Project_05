import React from "react";
import "./RollDice.styles.css";
import Die from "../Die/Die";

class RollDice extends React.Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  state = {
    die1: "one",
    die2: "one",
    rolling: false,
  };

  roll = () => {
    // Get new side for Die 1 & Die 2
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    // Set new Dice state
    this.setState({
      die1: newDie1,
      die2: newDie2,
      rolling: true,
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 500);
  };

  render() {
    return (
      <div className="roll-dice">
        <div className="dice-container">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
