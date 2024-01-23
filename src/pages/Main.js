import React, { useEffect, useState, createContext } from "react";
import CharStats from "../components/CharStats";
import CharEquip from "../components/CharEquip";
import { characterRoster, tav } from "../constructors/character";
import RightDiv from "../components/RightDiv";
import Preamble from '../components/Preamble';

export const CharacterContext = createContext()


function Main() {

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

            if (!chosenCharacterSaveData) {
                setChosenCharacter((prevState) => ({
                    ...prevState,
                    gold: 100
                }))
            } else {
                setChosenCharacter((prevState) => ({
                ...prevState,
                gold: chosenCharacterSaveData
            }))
            }
            console.log(chosenCharacterSaveData)
        }
    }, [chosenCharacter.name])


    return (
        <main>
            <h1> Hello World!</h1>

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

export default Main

// DamageTest()
