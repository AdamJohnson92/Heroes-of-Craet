import { useState, useEffect, useContext } from "react"
import { CharacterContext } from "../Main";
import ArenaHero from "./ArenaHero"
import ArenaMonster from "./ArenaMonster"
import damage1 from '../../assets/damage.png'
import damage2 from '../../assets/damage-2.png'
import damage3 from '../../assets/damage-3.png'
import miss1 from '../../assets/miss.png'
import miss2 from '../../assets/miss-2.png'
import miss3 from '../../assets/miss-3.png'


export default function CombatDiv({ combatDisplay, StaminaReduce, monster, setMonster, monDmgSlash, handleMonSlash, heroDmgSlash, heroStaticDisplay, heroAttackDisplay, heroRetreatDisplay, monStaticDisplay, monAttackDisplay, monRetreatDisplay, attackAnimation, hideCombatButtons, buttonDivDisplay, bannerText, setBannerText, bannerStyle, setBannerStyle, combatLog, setCombatLog }) {

    const chosenCharacter = useContext(CharacterContext)

    function MonsterHealthReduce(attackDmg, combatLogText) {
        if ((monster.currentHp - attackDmg) < 1) {
            setMonster({
                ...monster,
                currentHp: 0
            })
            winner()
        } else {
            setMonster({
                ...monster,
                currentHp: monster.currentHp - attackDmg
            })
            setCombatLog(combatLogText)
        }
    }

    // const [combatLog, setCombatLog] = useState('Begin!')

    function attackRoll(event) {
        console.log(chosenCharacter)

        hideCombatButtons()

        let dmg
        let combatLogText
        let slash
        let slash2
        let slash3

        attackAnimation()

        StaminaReduce()
        if (event.target.matches(`#attack-1`)) {
            const attack1 = chosenCharacter.weapon.attackDam1(monster, chosenCharacter)
            dmg = attack1.totalDmg
            combatLogText = attack1.combatLogText
            slash = attack1.slash
            slash2 = attack1.slash2
            slash3 = attack1.slash3
        } else if (event.target.matches('#attack-2')) {
            const attack2 = chosenCharacter.weapon.attackDam2(monster, chosenCharacter)
            dmg = attack2.totalDmg
            combatLogText = attack2.combatLogText
            slash = attack2.slash
            slash2 = attack2.slash2
            slash3 = attack2.slash3
        }
        MonsterHealthReduce(dmg, combatLogText)

        // setCombatLog(combatLogText)

        handleMonSlash(slash, slash2, slash3)
    }

    function special() {
        console.log(chosenCharacter)
        hideCombatButtons()
        StaminaReduce()
        chosenCharacter.special1()
    }

    function winner() {
        setCombatLog(`You have slain the ${monster.name}`)
        setBannerText('You Win!')
        setBannerStyle('end-win')
    }

    useEffect(() => {
        if(monster.currentHp < 1) {
            winner()
        }
    })

    return (
        <div className={combatDisplay} id="combat-div">
            <div className="container" id="arena-banner">
                <h3 className={`turn-display ${bannerStyle}`}>{bannerText}</h3>
            </div>
            <div id='arena'>
                <div className='shh'>
                    <img className='shhImg' src={damage1}></img>
                    <img className='shhImg' src={damage2}></img>
                    <img className='shhImg' src={damage3}></img>
                    <img className='shhImg' src={miss1}></img>
                    <img className='shhImg' src={miss2}></img>
                    <img className='shhImg' src={miss3}></img>
                </div>
                <div className="background-img"></div>
                <ArenaHero heroStaticDisplay={heroStaticDisplay} heroAttackDisplay={heroAttackDisplay} heroRetreatDisplay={heroRetreatDisplay} heroDmgSlash={heroDmgSlash} />
                <ArenaMonster monster={monster} monDmgSlash={monDmgSlash} monStaticDisplay={monStaticDisplay} monAttackDisplay={monAttackDisplay} monRetreatDisplay={monRetreatDisplay} />
            </div>
            <div className="container" id="combat-UI-div">
                <div id="combat-log-parent-div">
                    <p id='combat-log'> {combatLog} </p>
                </div>
                <div className={buttonDivDisplay} id='combat-btn-div'>
                    <button className="btn" id='play-again'> Play Again</button>
                    <button className='btn combat-btn' id="attack-1" onClick={attackRoll}> {chosenCharacter.weapon.attack1} </button>
                    <button className='btn combat-btn' id="attack-2" onClick={attackRoll}>{chosenCharacter.weapon.attack2} </button>
                    <button className='btn combat-btn' id="special-button-1" onClick={special}> {chosenCharacter.special} </button>
                    <button className="btn combat-btn" id="potion-button"> Drink Potion </button>
                </div>
            </div>
        </div>
    )
}