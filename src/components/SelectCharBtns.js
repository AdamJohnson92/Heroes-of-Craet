import React from "react"


export default function SelectCharBtns(props) {

    return(
        <>
        {props.characterRoster.map((char)=> (
            <button className="btn character-btn" id={char.name} onClick={props.handleChooseCharacter} key = {char.name}>{char.name} the {char.charClass}
            <img id="character-img-div" src={char.img} ></img>
           </button>
        ))}
        </>
    )
}