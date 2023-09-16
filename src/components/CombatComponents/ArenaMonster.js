
import { useState } from "react";

export default function ArenaMonster({monster}) {
    const hpBarWidth = (monster.currentHp / monster.maxHp * 100)

    const hpWidthStyle = {
        id: "hero-stam-bar-style",
        backgroundColor: 'red',
        width: `${hpBarWidth}%`,
        height: '15px'
    }

    return (
        <div className='arena-placement' id='arena-monster'>
            <div className="health-bar" id="monster-health-bar">
                <div className="health-juice" id="monster-health-juice" style={hpWidthStyle}></div>
            </div>
            <div className="stam-bar" id="monster-stam-bar">
                <div className="stam-juice" id="monster-stam-juice"></div>
            </div>
            <div id="potion-div">
                <div id="potion-lid"></div>
                <div id="potion-bottle">
                    <div id="potion-juice"></div>
                </div>
            </div>
            <img className='static-display' id="arena-monster-avatar" 
            src={monster.img} 
            />
            <img className='arena-img' id="arena-monster-attack" 
            // src = {monster.attackImg}
            />
            <img className="dmg-img arena-img" id="monster-dmg" />
        </div>
    )
}