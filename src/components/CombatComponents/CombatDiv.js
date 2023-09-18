import { useState, useEffect } from "react"
import ArenaHero from "./ArenaHero"
import ArenaMonster from "./ArenaMonster"


export default function CombatDiv({ combatDisplay, chosenCharacter, StaminaReduce, monster, MonsterHealthReduce }) {

    const [heroStaticDisplay, setHeroStaticDisplay] = useState('static-display')

    const [heroAttackDisplay, setHeroAttackDisplay] = useState('hidden')

    const [heroRetreatDisplay, setHeroRetreatDisplay] = useState ('hidden')

    function attackAnimation() {
        heroAttackAppear()
        setTimeout(heroAttackDisappear, 750)
        setTimeout(heroRetreatDisappear, 1250)
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

    const [combatLog, setCombatLog] = useState('Begin!')

    function attackRoll(event) {

        attackAnimation()
        StaminaReduce()
        if (event.target.matches(`#attack-1`)) {
            const attack1 = chosenCharacter.weapon.attackDam1()
            let dmg1 = attack1.dmg
            let combatLogText1 = attack1.combatLogText
            MonsterHealthReduce(dmg1)
            setCombatLog(combatLogText1)
        } else if (event.target.matches('#attack-2')) {
            const attack2 = chosenCharacter.weapon.attackDam2()
            let dmg2 = attack2.dmg
            let combatLogText2 = attack2.combatLogText
            MonsterHealthReduce(dmg2)
            setCombatLog(combatLogText2)
        }
        console.log(monster)
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
                <ArenaMonster monster={monster}/>
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