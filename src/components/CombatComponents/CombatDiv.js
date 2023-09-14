import { useState } from "react"
import ArenaHero from "./ArenaHero"
import ArenaMonster from "./ArenaMonster"
import styles from './stamBarStyle.module.css'



export default function CombatDiv({ combatDisplay, chosenCharacter, StaminaReduce, monster }) {

//function to handle stamina depletion 


    return (
        <div className={combatDisplay} id="combat-div">
            <div className="container" id="arena-banner">
                <h3 id="turn-display"></h3>
            </div>
            <div id='arena'>
                <div className="background-img"></div>
                <ArenaHero chosenCharacter={chosenCharacter} />
                <ArenaMonster monster={monster} />
            </div>
            <div className="container" id="combat-UI-div">
                <div id="combat-log-parent-div">
                    <p id='combat-log'> </p>
                </div>
                <div id="combat-btn-div"><button className="btn" id='play-again'> Play Again</button>
                    <button className='btn combat-btn' id="attack-1" onClick={StaminaReduce}> {chosenCharacter.weapon.attack1} </button>
                    <button className='btn combat-btn' id="attack-2" onClick={StaminaReduce}>{chosenCharacter.weapon.attack2} </button>
                    <button className='btn combat-btn' id="special-button-1" onClick={StaminaReduce}> {chosenCharacter.special} </button>
                    <button className="btn combat-btn" id="potion-button" onClick={StaminaReduce}> Drink Potion </button>
                </div>

            </div>
        </div>
    )
}