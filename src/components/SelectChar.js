import { useState } from "react"
import React from "react"
import SelectCharBtns from "./SelectCharBtns"



export default function SelectChar({ characterRoster, chosenCharacter, handleChooseCharacter }) {

    const [display, setDisplay] = useState('displayed')
    const changeDisplay = () => {
        setDisplay("hidden")
    }
    return (
        <div className={display}>
        <div>
            <h1 id="char-select-header">Select Your Character</h1>
            
            <div> <SelectCharBtns characterRoster={characterRoster} handleChooseCharacter={handleChooseCharacter} chosenCharacter={chosenCharacter} /></div>
           

        </div>
        </div>
    )
}

