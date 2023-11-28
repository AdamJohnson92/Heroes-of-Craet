import { useState, useEffect, useContext } from "react"
import SelectChar from "./SelectChar"
import CombatDiv from "./CombatComponents/CombatDiv"
import CombatUtil from "./CombatComponents/Utils"
import { monsterRoster } from "../constructors/monster"
import { CharacterContext } from "./Main";


 let monsterObj = {}

export default function RightDiv({ characterRoster, StaminaReduce, handleChooseCharacter, heroStamPoints, setChosenCharacter }) {

    const chosenCharacter = useContext(CharacterContext)

    const [selectDisplay, setSelectDisplay] = useState('displayed centered')
    const [combatDisplay, setCombatDisplay] = useState('hidden')

    const [monster, setMonster] = useState(monsterRoster[1])

    const generateMonster = () => {
        const randomMonster = monsterRoster[Math.floor(Math.random() * monsterRoster.length)]
        setMonster(monsterRoster[1])
    }
    
    const playGame = () => {
        console.log(chosenCharacter)
        cleanSlate()
        setSelectDisplay("hidden")
        setCombatDisplay('displayed')
        generateMonster()
        setChosenCharacter((prevState) => ({
            ...prevState,
            isBuffed: false
        }))

    }

    function cleanSlate(){
        setChosenCharacter((prevState) => ({
            ...prevState,
            currentHp: chosenCharacter.maxHp,
            currentStamPoints: chosenCharacter.maxStaminaPoints,
            potionCount: chosenCharacter.potionMax
        }))
    }

    return (
        <div className="container" id="character-selection-div">
            <div className={selectDisplay}>
                <SelectChar characterRoster={characterRoster} chosenCharacter={chosenCharacter} handleChooseCharacter={handleChooseCharacter} />
                {chosenCharacter.name !== 'Tav' ? <div className="menu-btn-div">
                    <button className="btn play-btn" onClick={playGame}>Slay Monsters</button>
                </div> : <div />}
                
            </div>
            <CombatUtil combatDisplay={combatDisplay} monster={monster} StaminaReduce={StaminaReduce} heroStamPoints={heroStamPoints} 
             setMonster={setMonster} setChosenCharacter={setChosenCharacter} playGame={playGame}/>

        </div>


    )
}

export {monsterObj}

