import React, { useEffect, useState } from "react";
import CharStats from "./CharStats";
import CharEquip from "./CharEquip";
import { characterRoster } from "../constructors/character";
import SelectChar from "./SelectChar";
import RightDiv from "./RightDiv";

 

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

    return (
        <main>

            <div className="container" id='char-container'>
                <CharStats chosenCharacter={chosenCharacter} />
                <CharEquip chosenCharacter={chosenCharacter} />
            </div>
            <RightDiv characterRoster={characterRoster} chosenCharacter={chosenCharacter} handleChooseCharacter={handleChooseCharacter} />
            {/* <DamageTest chosenCharacter={chosenCharacter} /> */}
            

        </main>
    )
}

// function DamageTest ({chosenCharacter}){
//     useEffect(()=>{
//         chosenCharacter.currentHp = chosenCharacter.currentHp - 1
//     })
//     console.log(chosenCharacter)
// }



export {character} 