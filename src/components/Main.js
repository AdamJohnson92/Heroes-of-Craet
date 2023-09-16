import React, { useEffect, useState } from "react";
import CharStats from "./CharStats";
import CharEquip from "./CharEquip";
import { characterRoster } from "../constructors/character";
import RightDiv from "./RightDiv";



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

            <div className="container" id='char-container'>
                <CharStats chosenCharacter={chosenCharacter} 
                />
                <CharEquip chosenCharacter={chosenCharacter} />
            </div>
            <RightDiv characterRoster={characterRoster} chosenCharacter={chosenCharacter}
                StaminaReduce={StaminaReduce}
                handleChooseCharacter={handleChooseCharacter} />
            {/* <DamageTest chosenCharacter={chosenCharacter} /> */}


        </main>
    )

}

// DamageTest()


export { characterObj } 