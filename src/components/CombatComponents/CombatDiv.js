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


export default function CombatDiv({ combatDisplay, StaminaReduce, monster, setMonster, setChosenCharacter, monDmgSlash, handleMonSlash, heroDmgSlash, heroStaticDisplay, heroAttackDisplay, heroRetreatDisplay, monStaticDisplay, monAttackDisplay, monRetreatDisplay, attackAnimation, hideCombatButtons, showCombatButtons, buttonDivDisplay, setButtonDivDisplay, bannerText, setBannerText, bannerStyle, setBannerStyle, combatLog, setCombatLog, playGame }) {

    const chosenCharacter = useContext(CharacterContext)

    function MonsterHealthReduce(attackDmg, combatLogText) {
        if ((monster.currentHp - attackDmg) < 1) {
            setMonster({
                ...monster,
                currentHp: 0
            })
            setCombatLog(combatLogText)
            setTimeout(winner, 1200)
            setTimeout(hideCombatButtons, 1801)
        } else {
            setMonster({
                ...monster,
                currentHp: monster.currentHp - attackDmg
            })
            setCombatLog(combatLogText)
        }
    }

    function attackRoll(event) {
        console.log(chosenCharacter)
        hideCombatButtons()
        if (chosenCharacter.currentStamPoints > 1) {
            setTimeout(showCombatButtons, 500)
        }
        attackAnimation()

        let dmg
        let combatLogText
        let slash
        let slash2
        let slash3

        setChosenCharacter((prevState) => ({
            ...prevState,
            currentStamPoints: chosenCharacter.currentStamPoints - 1
        }))
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
        handleMonSlash(slash, slash2, slash3)
    }

    function special() {
        hideCombatButtons()
        if (chosenCharacter.currentStamPoints > 1) {
            setTimeout(showCombatButtons, 500)
        }
        setChosenCharacter((prevState) => ({
            ...prevState,
            currentStamPoints: chosenCharacter.currentStamPoints - 1,
            isBuffed: true
        }))
    }

    function takePotion() {
        const healed = chosenCharacter.takePotion()
        if (chosenCharacter.potionCount < 1) {
            setCombatLog("You are all out of potions.")
        } else if ((chosenCharacter.currentHp + healed.healAmount) > chosenCharacter.maxHp) {
            hideCombatButtons()
            if (chosenCharacter.currentStamPoints > 1) {
                setTimeout(showCombatButtons, 500)
            }
            setCombatLog(healed.combatLogText)
            setChosenCharacter((prevState) => ({
                ...prevState,
                currentStamPoints: chosenCharacter.currentStamPoints - 1,
                currentHp: chosenCharacter.maxHp,
                potionCount: chosenCharacter.potionCount - 1
            }))
        } else {
            hideCombatButtons()
            if (chosenCharacter.currentStamPoints > 1) {
                setTimeout(showCombatButtons, 500)
            }
            setCombatLog(healed.combatLogText)
            setChosenCharacter((prevState) => ({
                ...prevState,
                currentStamPoints: chosenCharacter.currentStamPoints - 1,
                currentHp: chosenCharacter.currentHp + healed.healAmount,
                potionCount: chosenCharacter.potionCount - 1
            }))
        }
    }

    //After much bug chasing, this was the only way I could get special buffs to work. 
    useEffect(() => {
        if (chosenCharacter.isBuffed === true) {
            const special = chosenCharacter.special1()
            const buffedHero = chosenCharacter
            buffedHero.armor.armorRating = buffedHero.armor.armorRating + special.armorBuff
            buffedHero.hitChanceRate = buffedHero.hitChanceRate + special.hitBuff
            setChosenCharacter(() => ({
                ...buffedHero
            })
            )
            setCombatLog(special.combatLogText)
            console.log(chosenCharacter)
        }
    }, [chosenCharacter.isBuffed])

    const [monFullDisplay, setMonFullDisplay] = useState('alive')

    function winner() {
        setCombatLog(`You have slain the ${monster.name}!`)
        setBannerText('You Win!')
        setBannerStyle('end-win')
        setMonFullDisplay('dead')
        setButtonDivDisplay('invisible')
    }

    useEffect(() => {
        if (monster.currentHp < 1) {
            setTimeout(winner, 1200)
        }
    }, [monster.currentHp])

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
                <ArenaMonster monster={monster} monDmgSlash={monDmgSlash} monStaticDisplay={monStaticDisplay} monAttackDisplay={monAttackDisplay} monRetreatDisplay={monRetreatDisplay} monFullDisplay={monFullDisplay} />
            </div>
            <div className="container" id="combat-UI-div">
                <div id="combat-log-parent-div">
                    <p id='combat-log'> {combatLog} </p>
                </div>
                <div className={buttonDivDisplay} id='combat-btn-div'>

                    <button className='btn combat-btn' id="attack-1" onClick={attackRoll}> {chosenCharacter.weapon.attack1} </button>
                    <button className='btn combat-btn' id="attack-2" onClick={attackRoll}>{chosenCharacter.weapon.attack2} </button>
                    <button className='btn combat-btn' id="special-button-1" onClick={special}> {chosenCharacter.special} </button>
                    <button className="btn combat-btn" id="potion-button" onClick={takePotion}> Drink Potion </button>
                </div>
            </div>
            <div className="hidden" id="post-game-btn-div">
                <button className="btn play-btn" onClick={playGame}> Keep Fighting</button>
                <button className='btn' id='char-select-btn'> New Character</button>
            </div>
        </div>
    )
}