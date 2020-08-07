import React from "react";
import "./Die.styles.css";

class Die extends React.Component {
  render() {
    return (
      <div>
        <i
          className={`die fas fa-dice-${this.props.face} ${
            this.props.rolling && "animation"
          }`}></i>
      </div>
    );
  }
}

export default Die;
