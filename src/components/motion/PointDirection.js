import React  from "react";
import { connect } from "react-redux";
import { setCharacterAngle } from "../../redux/character/actions";


const Direction = ({ character, comp_id,characterAngle }) => {


  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);
    const character_angle = character.characters.find(
        (x) => x.id === character.active
      );
        console.log(character_angle)
        el.style.transform = `rotate(${character_angle+90}deg)`;
        characterAngle(0);
  };

  return (
      <div
        id={comp_id}
        className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleClick()}
      >
        Point to 90 degrees
      </div>
   
  );
};

// mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      characterAngle: (angle) => dispatch(setCharacterAngle(angle)),
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Direction);
