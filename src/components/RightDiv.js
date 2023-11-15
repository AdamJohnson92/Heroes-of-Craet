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
        //for testing against goblin
        // return monsterRoster[0]
        setMonster(monsterRoster[1])
    }
    
    const playGame = () => {
        console.log(chosenCharacter)
        setSelectDisplay("hidden")
        setCombatDisplay('displayed')
        generateMonster()
        setChosenCharacter((prevState) => ({
            ...prevState,
            isBuffed: false
        }))

    }

    return (
        <div className="container" id="character-selection-div">
            <div className={selectDisplay}>
                <SelectChar characterRoster={characterRoster} chosenCharacter={chosenCharacter} handleChooseCharacter={handleChooseCharacter} />
                <div className="menu-btn-div">
                    <button className="btn" id="play-btn" onClick={playGame}>Slay Monsters</button>
                    {/* <a href="./town.html" className='btn' id="to-town-btn">Go to Town</a> */}
                </div>
            </div>
            <CombatUtil combatDisplay={combatDisplay} monster={monster} StaminaReduce={StaminaReduce} heroStamPoints={heroStamPoints} 
             setMonster={setMonster} setChosenCharacter={setChosenCharacter}/>

        </div>


    )
}

export {monsterObj}

