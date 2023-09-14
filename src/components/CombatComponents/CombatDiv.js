import { useState } from "react"
import ArenaHero from "./ArenaHero"
import ArenaMonster from "./ArenaMonster"


export default function CombatDiv({ combatDisplay, chosenCharacter, StaminaReduce, monster }) {

    const [heroStaticDisplay, setHeroStaticDisplay] = useState('static-display')

    const [heroAttackDisplay, setHeroAttackDisplay] = useState('hidden')

    function attackAnimation() {
        heroAttackAppear()
        setTimeout(heroAttackDisappear, 750)
    }

    function heroAttackAppear() {
        setHeroAttackDisplay('attack-display')
        setHeroStaticDisplay('hidden')
    }
    function heroAttackDisappear() {
        setHeroAttackDisplay('hidden')
        setHeroStaticDisplay('static-display')
    }

    function attackRoll(event) {

        attackAnimation()
        StaminaReduce()
        console.log(monster)
        if (event.target.matches(`#attack-1`)) {
            monster.currentHp = monster.currentHp - chosenCharacter.weapon.attackDam1()
            console.log(monster.currentHp)
        } else if (event.target.matches('#attack-2')){ console.log('attack 2')}
        // chosenCharacter.weapon.attackDam1()


        // event.target.matches(`#attack-1`) ? (
        //     console.log('attack 1')
        //     )
        //     : (console.log('attack 2'))
    }


    return (
        <div className={combatDisplay} id="combat-div">
            <div className="container" id="arena-banner">
                <h3 id="turn-display"></h3>
            </div>
            <div id='arena'>
                <div className="background-img"></div>
                <ArenaHero chosenCharacter={chosenCharacter} heroStaticDisplay={heroStaticDisplay} heroAttackDisplay={heroAttackDisplay} />
                <ArenaMonster monster={monster} />
            </div>
            <div className="container" id="combat-UI-div">
                <div id="combat-log-parent-div">
                    <p id='combat-log'> </p>
                </div>
                <div id="combat-btn-div"><button className="btn" id='play-again'> Play Again</button>
                    <button className='btn combat-btn' id="attack-1" onClick={attackRoll}> {chosenCharacter.weapon.attack1} </button>
                    <button className='btn combat-btn' id="attack-2" onClick={attackRoll}>{chosenCharacter.weapon.attack2} </button>
                    <button className='btn combat-btn' id="special-button-1" onClick={StaminaReduce}> {chosenCharacter.special} </button>
                    <button className="btn combat-btn" id="potion-button" onClick={StaminaReduce}> Drink Potion </button>
                </div>

            </div>
        </div>
    )
}