import React, { useEffect, useState, createContext } from "react";
import CharStats from "./CharStats";
import CharEquip from "./CharEquip";
import { characterRoster } from "../constructors/character";
import RightDiv from "./RightDiv";

export const CharacterContext = createContext()

let characterObj = characterRoster[0]


export default function Main() {

    const [chosenCharacter, setChosenCharacter] = useState(characterRoster[0])

    const handleChooseCharacter = (event) => {
        for (let i = 0; i < characterRoster.length; i++) {
            if (event.target.matches(`#${characterRoster[i].name}`)) {
                characterObj = characterRoster[i]
                setChosenCharacter(characterRoster[i])

            }
        }
    }

    function StaminaReduce() {
        characterObj.currentStamPoints = characterObj.currentStamPoints - 1
        console.log(characterObj)

        setChosenCharacter({
            ...chosenCharacter,
            currentStamPoints: characterObj.currentStamPoints
        })

    }

    return (
        <main>
            <CharacterContext.Provider value={chosenCharacter}>
                <div className="container" id='char-container'>
                    <CharStats/>
                    <CharEquip/>
                </div>
                <RightDiv characterRoster={characterRoster} 
                    StaminaReduce={StaminaReduce}
                    handleChooseCharacter={handleChooseCharacter} />
                {/* <DamageTest chosenCharacter={chosenCharacter} /> */}
            </CharacterContext.Provider>



        </main>
    )

}

// DamageTest()


export { characterObj } 