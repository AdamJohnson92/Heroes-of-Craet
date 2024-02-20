import React from "react"


export default function SelectCharBtns(props) {

    return (
        <>
            {props.characterRoster.map((char) => (
                <div id='character-selection-div'>
                    <img className="character-img-div" id={char.name === props.chosenCharacter.name ? 'currentChar' : 'notCurrentChar'}src={char.img} alt={char.staticAlt}></img>
                    <button className="btn character-btn" id={char.name} onClick={props.handleChooseCharacter} key={char.name}>{char.name} the {char.charClass}

                    </button>
                </div>

            ))}
        </>
    )
}