import React, {useState} from "react";
import CharStats from "./CharStats";
import CharEquip from "./CharEquip";
import { characterRoster } from "../constructors/character";
import SelectChar from "./SelectChar";



export default function Main() {

    const [chosenCharacter, setChosenCharacter] = useState('')
    return (
        <main>
            <div className="container" id='char-container'>
                <CharStats />
                <CharEquip />
            </div>
            <SelectChar characterRoster={characterRoster} />

        </main>
    )
}