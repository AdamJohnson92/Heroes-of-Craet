import React, { useEffect, useState, createContext } from "react";
import CharStats from "./CharStats";
import CharEquip from "./CharEquip";
import { characterRoster, tav } from "../constructors/character";
import RightDiv from "./RightDiv";
import Preamble from './Preamble';

export const CharacterContext = createContext()


export default function Main() {

    const [chosenCharacter, setChosenCharacter] = useState(tav)

    const handleChooseCharacter = (event) => {
        for (let i = 0; i < characterRoster.length; i++) {
            if (event.target.matches(`#${characterRoster[i].name}`)) {
                setChosenCharacter(characterRoster[i])
            }
        }
    }

 
    useEffect(() => {
        if (chosenCharacter.name !== 'Tav') {
            const chosenCharacterSaveData = JSON.parse(localStorage.getItem(chosenCharacter.name))
        { setChosenCharacter((prevState) => ({
            ...prevState,
            gold: chosenCharacterSaveData
        }))}
        }
    }, [chosenCharacter.name])


    return (
        <main>
            <CharacterContext.Provider value={chosenCharacter}>
                {chosenCharacter === tav ? <Preamble /> : 
                <div className="container" id='char-container'>
                    <CharStats />
                    <CharEquip />
                </div>}

                <RightDiv characterRoster={characterRoster}
                    // StaminaReduce={StaminaReduce}
                    chosenCharacter={chosenCharacter}
                    handleChooseCharacter={handleChooseCharacter}
                    setChosenCharacter={setChosenCharacter} />
                {/* <DamageTest chosenCharacter={chosenCharacter} /> */}
            </CharacterContext.Provider>
        </main>
    )

}

// DamageTest()
