import { useState, useEffect } from "react"
import SelectChar from "./SelectChar"
import CombatDiv from "./CombatComponents/CombatDiv"
import { monsterRoster } from "../constructors/monster"



export default function RightDiv({ characterRoster, chosenCharacter, StaminaReduce, handleChooseCharacter, heroStamPoints }) {

    const [selectDisplay, setSelectDisplay] = useState('displayed')
    const [combatDisplay, setCombatDisplay] = useState('hidden')

    const [monster, setMonster] = useState(monsterRoster[0])

    const [monsterHp, setMonsterHp] = useState(monster.maxHp)

    function MonsterHealthReduce(attackDmg) {
        monster.currentHp = monster.currentHp - attackDmg
        if((monsterHp - attackDmg) < 0){
            setMonsterHp(0)
        } else {
            setMonsterHp(monsterHp - attackDmg)
        }
    }

    const generateMonster = () => {
        const randomMonster = monsterRoster[Math.floor(Math.random() * monsterRoster.length)]
        //for testing against goblin
        // return monsterRoster[0]
        setMonster(randomMonster)
        setMonsterHp(randomMonster.maxHp)
    }
    
    const playGame = () => {
        setSelectDisplay("hidden")
        setCombatDisplay('displayed')
        generateMonster()

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
            <CombatDiv combatDisplay={combatDisplay} chosenCharacter={chosenCharacter} monster={monster} StaminaReduce={StaminaReduce} heroStamPoints={heroStamPoints} monsterHp={monsterHp} MonsterHealthReduce ={MonsterHealthReduce}/>

        </div>


    )
}



