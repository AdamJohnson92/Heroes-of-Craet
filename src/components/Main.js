import React, { useEffect, useState, createContext } from "react";
import CharStats from "./CharStats";
import CharEquip from "./CharEquip";
import { characterRoster } from "../constructors/character";
import RightDiv from "./RightDiv";

export const CharacterContext = createContext()

export default function Main() {

    const [chosenCharacter, setChosenCharacter] = useState(characterRoster[0])

    const handleChooseCharacter = (event) => {
        for (let i = 0; i < characterRoster.length; i++) {
            if (event.target.matches(`#${characterRoster[i].name}`)) {
                setChosenCharacter(characterRoster[i])
            }
        }
    }

    function StaminaReduce() {

        setChosenCharacter({
            ...chosenCharacter,
            currentStamPoints: chosenCharacter.currentStamPoints - 1
        })
    }


    return (
        <main>
            <CharacterContext.Provider value={chosenCharacter}>
                <div className="container" id='char-container'>
                    <CharStats />
                    <CharEquip />
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
