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
    });
  };

  render() {
    return (
      <div>
        <div className="dice-container">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button style={{ textAlign: center }} onClick={this.roll}>
          Roll!
        </button>
      </div>
    );
  }
}

export default RollDice;
