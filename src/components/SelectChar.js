import React, { useState } from "react"
import SelectCharBtns from "./SelectCharBtns"



export default function SelectChar({ characterRoster, chosenCharacter, handleChooseCharacter }) {

    return (
        <div className="container" id="character-selection-div">
            <h1 id="char-select-header">Select Your Character</h1>
            <div className="menu-btn-div">
                <a className="btn" id="play-btn">Slay Monsters</a>
                {/* <a href="./town.html" className='btn' id="to-town-btn">Go to Town</a> */}
                <SelectCharBtns characterRoster={characterRoster} handleChooseCharacter={handleChooseCharacter} chosenCharacter={chosenCharacter} />
            </div>
        </div>
    )
}

