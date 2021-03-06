import React from "react";
import LanguegeContext from "./contexts/LangaugeContext";

class Field extends React.Component {
  static contextType = LanguegeContext;

  render() {
    const text = this.context === "english" ? "Name" : "Naam";

    return (
      <div className='ui field'>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
