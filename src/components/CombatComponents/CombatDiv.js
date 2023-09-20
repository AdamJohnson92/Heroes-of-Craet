import { useState, useEffect } from "react"
import { monsterObj } from "../RightDiv"
import ArenaHero from "./ArenaHero"
import ArenaMonster from "./ArenaMonster"


export default function CombatDiv({ combatDisplay, chosenCharacter, StaminaReduce, monster, MonsterHealthReduce }) {

    const [heroStaticDisplay, setHeroStaticDisplay] = useState('static-display')

    const [heroAttackDisplay, setHeroAttackDisplay] = useState('hidden')

    const [heroRetreatDisplay, setHeroRetreatDisplay] = useState ('hidden')



    function attackAnimation() {
        heroAttackAppear()
        setTimeout(heroAttackDisappear, 650)
        setTimeout(heroRetreatDisappear, 1150)
    }

    function heroAttackAppear() {
        setHeroAttackDisplay('attack-display')
        setHeroStaticDisplay('hidden')
    }
    function heroAttackDisappear() {
        setHeroAttackDisplay('hidden')
        setHeroRetreatDisplay('retreat-display')
    }

    function heroRetreatDisappear(){
        setHeroRetreatDisplay('hidden')
        setHeroStaticDisplay('static-display')
    }


    const [monDmgSlash, setMonDmgSlash] = useState('mon-dmg-0')

    function handleMonSlash(slash, slash2, slash3){
        setTimeout(setMonDmgSlash, 200, slash)
        setTimeout(setMonDmgSlash, 400, slash2)
        setTimeout(setMonDmgSlash, 600, slash3)
        setTimeout(setMonDmgSlash, 1000, 'mon-dmg-0')
    }

    const [combatLog, setCombatLog] = useState('Begin!')

    function attackRoll(event) {

        let dmg
        let combatLogText
        let slash 
        let slash2
        let slash3

        attackAnimation()
        StaminaReduce()
        if (event.target.matches(`#attack-1`)) {
            const attack1 = chosenCharacter.weapon.attackDam1(monsterObj.hitChanceRate)
            dmg = attack1.totalDmg
            combatLogText = attack1.combatLogText
            slash = attack1.slash
            slash2 =attack1.slash2
            slash3 =attack1.slash3
        } else if (event.target.matches('#attack-2')) {
            const attack2 = chosenCharacter.weapon.attackDam2(monsterObj.hitChanceRate)
            dmg = attack2.totalDmg
            combatLogText = attack2.combatLogText
            slash = attack2.slash
            slash2 =attack2.slash2
            slash3 =attack2.slash3
        }
        MonsterHealthReduce(dmg)
        setCombatLog(combatLogText)
        handleMonSlash(slash, slash2, slash3)
    }

    function logMonster(){
        console.log(monster)
    }

    return (
        <div className={combatDisplay} id="combat-div">
            <div className="container" id="arena-banner">
                <h3 id="turn-display"></h3>
            </div>
            <div id='arena'>
                <div className="background-img"></div>
                <ArenaHero chosenCharacter={chosenCharacter} heroStaticDisplay={heroStaticDisplay} heroAttackDisplay={heroAttackDisplay} heroRetreatDisplay={heroRetreatDisplay} />
                <ArenaMonster monster={monster} monDmgSlash={monDmgSlash}/>
            </div>
            <div className="container" id="combat-UI-div">
                <div id="combat-log-parent-div">
                    <p id='combat-log'> {combatLog} </p>
                </div>
                <div id="combat-btn-div"><button className="btn" id='play-again'> Play Again</button>
                    <button className='btn combat-btn' id="attack-1" onClick={attackRoll}> {chosenCharacter.weapon.attack1} </button>
                    <button className='btn combat-btn' id="attack-2" onClick={attackRoll}>{chosenCharacter.weapon.attack2} </button>
                    <button className='btn combat-btn' id="special-button-1" onClick={StaminaReduce}> {chosenCharacter.special} </button>
                    <button className="btn combat-btn" id="potion-button" onClick={logMonster}> Drink Potion </button>
                </div>
            </div>
        </div>
    )
}