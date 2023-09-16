import { useState } from "react";

export default function ArenaHero({ chosenCharacter, heroStaticDisplay, heroAttackDisplay }) {


    const stamBarWidth = (chosenCharacter.currentStamPoints / chosenCharacter.maxStaminaPoints * 100)

    const stamWidthStyle = {
        id: "hero-stam-bar-style",
        backgroundColor: 'green',
        width: `${stamBarWidth}%`,
        height: '15px'
    }
    
    return (
        <div className='arena-placement' id='arena-hero'>
            <div className="health-bar" id="hero-health-bar">
                <div className="health-juice" id="hero-health-juice"></div>
            </div>
            <div className="stam-bar" id="hero-stam-bar">
                <div className="stam-juice" style={stamWidthStyle}></div>
            </div>
            <div id="potion-div">
                <div id="potion-lid"></div>
                <div id="potion-bottle">
                    <div id="potion-juice"></div>
                </div>
            </div>
            <img className={heroStaticDisplay} id="arena-hero-avatar" src={chosenCharacter.img} />
            <img className= {heroAttackDisplay} id="arena-hero-attack" src={chosenCharacter.attackImg} />
            <img className="dmg-img arena-img" id="hero-dmg" />
        </div>
    )
}
