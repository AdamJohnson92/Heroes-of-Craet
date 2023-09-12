import React, { useState } from "react";
import CharStats from "./CharStats";
import CharEquip from "./CharEquip";
import { characterRoster } from "../constructors/character";
import SelectChar from "./SelectChar";



export default function Main() {

    const [chosenCharacter, setChosenCharacter] = useState('')

    const handleChooseCharacter = (event) => {
        for (let i = 0; i < characterRoster.length; i++) {
            if (event.target.matches(`#${characterRoster[i].name}`)) {
                setChosenCharacter(characterRoster[i])
                // localStorage.setItem('thisCharacter', JSON.stringify(chosenCharacter.name))
            }
        }
    }
    return (
        <main>
            <div className="container" id='char-container'>
                <CharStats chosenCharacter={chosenCharacter} />
                <CharEquip />
            </div>
            <SelectChar characterRoster={characterRoster} chosenCharacter={chosenCharacter} handleChooseCharacter={handleChooseCharacter} />

        </main>
    )
}