import { useState, useContext } from "react";
import { CharacterContext } from "../Main";

export default function ArenaHero({ heroStaticDisplay, heroAttackDisplay, heroRetreatDisplay, heroDmgSlash, heroFullDisplay }) {

    const chosenCharacter = useContext(CharacterContext)

    const hpBarWidth = (chosenCharacter.currentHp / chosenCharacter.maxHp * 100)

    const hpWidthStyle = {
        id: "mon-hp-bar-style",
        backgroundColor: 'red',
        width: `${hpBarWidth}%`,
        height: '15px'
    }

    const stamBarWidth = (chosenCharacter.currentStamPoints / chosenCharacter.maxStaminaPoints * 100)

    const stamWidthStyle = {
        id: "hero-stam-bar-style",
        backgroundColor: 'green',
        width: `${stamBarWidth}%`,
        height: '15px'
    }

    const potionBarHeight = (chosenCharacter.potionCount / chosenCharacter.potionMax * 100)

    const potionHeightStyle = {
        id: 'potion-juice-height-style',
        backgroundColor: 'pink',
        height: `${potionBarHeight}%`,
        width: '100%',
        borderRadius: '100px'
    }
    
    return (
        <div className={`arena-placement ${heroFullDisplay}`} id='arena-hero'>
            <div className="health-bar" id="hero-health-bar">
                <div className="health-juice" id="hero-health-juice" style={hpWidthStyle}></div>
            </div>
            <div className="stam-bar" id="hero-stam-bar">
                <div className="stam-juice" style={stamWidthStyle}></div>
            </div>
            <div id="potion-div">
                <div id="potion-lid"></div>
                <div id="potion-bottle">
                    <div id="potion-juice" style={potionHeightStyle}></div>
                </div>
            </div>
            <img className={heroStaticDisplay} id="arena-hero-avatar" src={chosenCharacter.img} />
            <img className= {heroAttackDisplay} id="arena-hero-attack" src={chosenCharacter.attackImg} />
            <img className= {heroRetreatDisplay} id="arena-hero-retreat" src={chosenCharacter.retreatImg} />
            <div className={`mon-slash-class ${heroDmgSlash}`}></div>
        </div>
    )
}
