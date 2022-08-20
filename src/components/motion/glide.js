import React, { useState } from "react";
import { connect } from "react-redux";

const Glide = ({ character, comp_id }) => {
  const [state, setState] = useState({
    show_msg: true,
    timer_for_msg: 2,
  });

  /* Display Message with Timer */
  const displayMessage = () => {
    const el = document.getElementById(`${character.active}`);
    
    while(state.show_msg)
    {
      el.style.left=Math.random() * 50 + "px";
      el.style.top=Math.random() * 50 + "px";
    }
    
    
    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
    }, state.timer_for_msg * 1000);
  }

  return (
    <div className="rounded text-center bg-blue-700 p-2 my-3" onClick={displayMessage}>
       <h1>Glide for 1 sec</h1>
      </div>
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(Glide);
