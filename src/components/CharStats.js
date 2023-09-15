import React from "react";

export default function CharStats({chosenCharacter, heroStamPoints}) {
    return(
        <div className="card" id="character-card">
                <div id="character-avatar-div">
                    <h2 id="char-name"> {chosenCharacter.name}
                        </h2>
                        <img id="character-img-div" src={chosenCharacter.img}/>
                </div>
                <h3 className="card-header">Class: {chosenCharacter.charClass}</h3>
                <p className="card-item">Hitpoints: {chosenCharacter.currentHp}</p>
                <p className="card-item">Stamina: {heroStamPoints}</p>
                <p className="card-item">Strength: {chosenCharacter.strength}</p>
                <p className="card-item">Dexterity: {chosenCharacter.dexterity}</p>
                <p className="card-item">Wisdom: {chosenCharacter.wisdom}</p>
                <p className="card-item">Hit Chance: {chosenCharacter.hitChanceRate}</p>
                <p className="card-item">Special Ability: {chosenCharacter.special}</p>
            </div>
    )
}