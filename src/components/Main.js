import React, { useState } from "react";
import CharStats from "./CharStats";
import CharEquip from "./CharEquip";
import { characterRoster } from "../constructors/character";
import SelectChar from "./SelectChar";

let character = {}

export default function Main() {

    const [chosenCharacter, setChosenCharacter] = useState(characterRoster[0])

    const handleChooseCharacter = (event) => {
        for (let i = 0; i < characterRoster.length; i++) {
            if (event.target.matches(`#${characterRoster[i].name}`)) {
                character = characterRoster[i]
                setChosenCharacter(characterRoster[i])
            }
        }
    }
    console.log(chosenCharacter)
    console.log(character)
    return (
        <main>

            <div className="container" id='char-container'>
                <CharStats chosenCharacter={chosenCharacter} />
                <CharEquip chosenCharacter={chosenCharacter} />
            </div>
            <SelectChar characterRoster={characterRoster} chosenCharacter={chosenCharacter} handleChooseCharacter={handleChooseCharacter} />

        </main>
    )
}

export {character} 