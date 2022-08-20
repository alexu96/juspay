import React  from "react";
import { connect } from "react-redux";

const RandomPosition = ({character}) => {
    const handleSubmit = () => {
        const el = document.getElementById(`${character.active}`);
        el.style.position = "relative";
        el.style.left = Math.random() * 50 + "px";
        el.style.top = Math.random() * 50 + "px";
    }

    return (
        <div id="move" className="flex bg-blue-700 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer" onClick={handleSubmit}>
            {"go to"}
            <select name="selectList" id="selectList" className="bg-blue-300 mx-2 p-2">
                <option value="random position">random position</option>
                <option value="mouse-pointer">mouse-pointer</option>
            </select>
        </div>
    )
}

// mapping state to component
const mapStateToProps = (state) => {
    return {
        character: state.character,
    };
};

export default connect(mapStateToProps)(RandomPosition);
