import React, { useState } from "react";
import { connect } from "react-redux";



const Positon = ({ character, comp_id }) => {

    const [x,setX]=useState(true)
    const [Y,setY]=useState(true)
    const [Z,setZ]=useState(true)

    const handleClickX = () => {
        setX(!x)
        const el = document.getElementById(`${character.active}-x-pos`);
        if(x){
        el.hidden=false
        el.style.backgroundColor="blue"
        const e2 = document.getElementById(`${character.active}-div`);
        var left = e2.offsetLeft
        el.innerHTML = character.active+" : "+"x-position   "+left;

        }else{
            el.hidden=true
        }
        
    };
    const handleClickY = () => {
        setY(!Y)
        const el = document.getElementById(`${character.active}-y-pos`);
        if(Y){
        el.hidden=false
        el.style.backgroundColor="blue"
        const e2 = document.getElementById(`${character.active}-div`);
        var top = e2.offsetTop
        el.innerHTML = character.active+" : "+"y-position   "+top;

        }else{
            el.hidden=true
        }  
    };
    const handleClickZ = () => {
        setZ(!Z)
        const el = document.getElementById(`${character.active}-z-pos`);
        if(Z){
        el.hidden=false
        el.style.backgroundColor="blue"
        const character_angle = character.characters.find(
            (x) => x.id === character.active
          );
        el.innerHTML = character.active+" : "+"direction   "+(90+character_angle.angle);

        }else{
            el.hidden=true
        }
        
    };

    return (
        <div>
            <div className="border-2 bg-blue-700">
                <input type="checkbox" className="m-5" onChange={handleClickX}/>
                <label className="text-white">X-Position</label>
            </div>
            <div className="border-2 bg-blue-700">
                <input type="checkbox" className="m-5" onChange={handleClickY}/>
                <label className="text-white">Y-Position</label>
            </div>
            <div className="border-2 bg-blue-700">
                <input type="checkbox" className="m-5" onChange={handleClickZ}/>
                <label className="text-white">Z-Position</label>
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

export default connect(mapStateToProps)(Positon);
