
import { useState } from "react";

export default function ArenaMonster({monster, monDmgSlash, monStaticDisplay, monAttackDisplay, monRetreatDisplay, monFullDisplay}) {
    const hpBarWidth = (monster.currentHp / monster.maxHp * 100)

    const hpWidthStyle = {
        id: "mon-hp-bar-style",
        backgroundColor: 'red',
        width: `${hpBarWidth}%`,
        height: '15px'
    }

    const stamBarWidth = (monster.currentStamPoints / monster.maxStaminaPoints * 100)

    const stamWidthStyle = {
        id: "mon-stam-bar-style",
        backgroundColor: 'green',
        width: `${stamBarWidth}%`,
        height: '15px'
    }

    return (
        <div className={`arena-placement ${monFullDisplay}`}
        id='arena-monster'>
            <div className="health-bar" id="monster-health-bar">
                <div className="health-juice" id="monster-health-juice" style={hpWidthStyle}></div>
            </div>
            <div className="stam-bar" id="monster-stam-bar">
                <div className="stam-juice" id="monster-stam-juice" style={stamWidthStyle}></div>
            </div>
            <div id="potion-div">
                <div id="potion-lid"></div>
                <div id="potion-bottle">
                    <div id="potion-juice"></div>
                </div>
            </div>
            <img className={monStaticDisplay} id="arena-monster-avatar" src={monster.img} />
            <img className={monAttackDisplay} id="arena-monster-attack" src={monster.attackImg}/>
            <img className= {monRetreatDisplay} id="arena-monster-retreat" src={monster.img} />
            <div className={`mon-slash-class ${monDmgSlash}`}></div>
        </div>
    )
}