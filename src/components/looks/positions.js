import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const Position = ({ character, comp_id }) => {
  const [state, setState] = useState({
    scale: 1,
  });
  // To change Size of Sprint
  const changeSize = () => {
    const el = document.getElementById(character.active);
    el.style.transform = `scale(${state.scale})`;
  };

  return (
 
      <div onClick={changeSize} className="text-center rounded bg-blue-700 p-2 my-3">
        <div className="topping">
    <input type="checkbox" id="topping" name="topping" value="Paneer" />Paneer
  </div>
       
      </div>
    
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Position);
