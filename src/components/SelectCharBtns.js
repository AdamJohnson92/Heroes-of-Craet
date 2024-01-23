import React from "react"


export default function SelectCharBtns(props) {

    return (
        <>
            {props.characterRoster.map((char) => (
                <div id='character-selection-div'>
                    <img id="character-img-div" src={char.img} ></img>
                    <button className="btn character-btn" id={char.name} onClick={props.handleChooseCharacter} key={char.name}>{char.name} the {char.charClass}

                    </button>
                </div>

            ))}
        </>
    )
}