import { useState, useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import SelectChar from "./SelectChar"
import CombatUtil from "./CombatComponents/Utils"
import { monsterRoster } from "../constructors/monster"
import { CharacterContext } from "../pages/Main";


let monsterObj = {}

export default function RightDiv({ characterRoster, StaminaReduce, handleChooseCharacter, heroStamPoints, setChosenCharacter }) {

    const chosenCharacter = useContext(CharacterContext)

    const [selectDisplay, setSelectDisplay] = useState('displayed centered')
    const [combatDisplay, setCombatDisplay] = useState('hidden')

    const [monster, setMonster] = useState(monsterRoster[1])

    const generateMonster = () => {
        const randomMonster = monsterRoster[Math.floor(Math.random() * monsterRoster.length)]
        setMonster(randomMonster)
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

    function cleanSlate() {
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
                    <Link to='/Heroes-of-Craet/shop'>
                        <button className='btn' id="to-town-btn"> Go to Town </button>
                    </Link>
                </div> : <div />}

            </div>
            <CombatUtil combatDisplay={combatDisplay} setCombatDisplay={setCombatDisplay} setSelectDisplay={setSelectDisplay} monster={monster} StaminaReduce={StaminaReduce} heroStamPoints={heroStamPoints}
                setMonster={setMonster} setChosenCharacter={setChosenCharacter} playGame={playGame} />

        </div>


    )
}

export { monsterObj }

