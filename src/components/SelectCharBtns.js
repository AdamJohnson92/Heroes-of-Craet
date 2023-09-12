import React from "react"


export default function SelectCharBtns(props) {

    return(
        <>
        {props.characterRoster.map((char)=> (
            <button className="btn character-btn" id={char.name} onClick={props.handleChooseCharacter}>{char.name} the {char.charClass}
           </button>
        ))}
        </>
    )
}