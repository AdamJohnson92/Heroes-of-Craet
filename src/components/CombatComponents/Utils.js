import { useContext, useEffect, useState } from "react"
import CombatDiv from "./CombatDiv"
import { CharacterContext } from "../Main"


export default function CombatUtil({ combatDisplay, StaminaReduce, heroStamPoints, monster, setMonster, setChosenCharacter }) {

    const chosenCharacter = useContext(CharacterContext)

    const [combatLog, setCombatLog] = useState('Begin!')

    //Renders the necessary slash depending on if the attack was a hit or a miss.
    const [monDmgSlash, setMonDmgSlash] = useState('mon-dmg-0')

    function handleMonSlash(slash, slash2, slash3) {
        setTimeout(setMonDmgSlash, 200, slash)
        setTimeout(setMonDmgSlash, 400, slash2)
        setTimeout(setMonDmgSlash, 600, slash3)
        setTimeout(setMonDmgSlash, 1000, 'mon-dmg-0')
    }


    //handles the posing of the character attack animations
    const [heroStaticDisplay, setHeroStaticDisplay] = useState('static-display')
    const [heroAttackDisplay, setHeroAttackDisplay] = useState('hidden')
    const [heroRetreatDisplay, setHeroRetreatDisplay] = useState('hidden')

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

    function heroRetreatDisappear() {
        setHeroRetreatDisplay('hidden')
        setHeroStaticDisplay('static-display')
    }

    //Displays or Hides the combat buttons so players can't click a button while something else is happening.
    const [buttonDivDisplay, setButtonDivDisplay] = useState('visible')

    function hideCombatButtons() {
        setButtonDivDisplay('invisible')
        setTimeout(setButtonDivDisplay, 1800, 'visible')
    }


    //Reduces the hero and monster's stamina by 1 whenever they do an action. 
    function StaminaReduce() {

        setChosenCharacter((prevState) => ({
            ...prevState,
            currentStamPoints: chosenCharacter.currentStamPoints - 1
        }))
    }

    function monStaminaReduce() {
        setMonster({
            ...monster,
            currentStamPoints: monster.currentStamPoints - 1
        })
    }

    //handles turn change
    const [isPlayerTurn, setIsPlayerTurn] = useState(true)

    useEffect(() => {
        if (chosenCharacter.currentStamPoints < 1) {
            setIsPlayerTurn(false)
            setBannerStyle('monster-turn')
            setBannerText('Enemy Turn')
            setButtonDivDisplay('invisible')
        
            const monAttack = monster.attack1(chosenCharacter.hitChanceRate, chosenCharacter.armor.armorRating)
            const dmg = monAttack.dmgLessArmor
            const combatLogText = monAttack.combatLogText
            const slash = monAttack.slash

            setCombatLog(combatLogText)

        }
    }, [chosenCharacter.currentStamPoints])

    const [bannerText, setBannerText] = useState('Your Turn')
    const [bannerStyle, setBannerStyle] = useState('player-turn')


    return (
        <>
            <CombatDiv combatDisplay={combatDisplay} monster={monster} StaminaReduce={StaminaReduce} heroStamPoints={heroStamPoints} setMonster={setMonster} monDmgSlash={monDmgSlash} handleMonSlash={handleMonSlash} heroStaticDisplay={heroStaticDisplay} heroAttackDisplay={heroAttackDisplay} heroRetreatDisplay={heroRetreatDisplay} attackAnimation={attackAnimation} buttonDivDisplay={buttonDivDisplay} hideCombatButtons={hideCombatButtons}
                bannerText={bannerText} setBannerText={setBannerText} bannerStyle={bannerStyle} setBannerStyle={setBannerStyle} combatLog={combatLog} setCombatLog={setCombatLog} />
        </>
    )
}
