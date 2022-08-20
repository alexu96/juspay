import React, { useState } from "react";
import { connect } from "react-redux";

const SayMessage = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: false,
    message: "",
    character_id: "",
  });
  /* Display Message */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);

    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      el.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });
    el.style.display = "block";
    el.style.position = "relative";

    el2.style.display = "none";

    window.clearTimeout();
    el.innerHTML = "Hello!";
  };

  return (
    
      <div className="rounded text-center bg-purple-500 p-2 my-3" onClick={displayMessage}>
       <h1>say hello!</h1>
      </div>
    
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(SayMessage);
