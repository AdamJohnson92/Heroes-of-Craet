import { useState } from "react"
import SelectChar from "./SelectChar"
import CombatDiv from "./CombatComponents/CombatDiv"

export default function RightDiv({ characterRoster, chosenCharacter, handleChooseCharacter }) {

    const [selectDisplay, setSelectDisplay] = useState('displayed')
    const [combatDisplay, setCombatDisplay] = useState('hidden')
    const playGame = () => {
        setSelectDisplay("hidden")
        setCombatDisplay('displayed')
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
            <CombatDiv combatDisplay={combatDisplay} chosenCharacter={chosenCharacter}/>

        </div>


    )
}



