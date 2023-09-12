import React from "react";

export default function CharStats() {
    return(
        <div className="card" id="character-card">
                <div id="character-avatar-div">
                    <h2 id="char-name">
                        </h2>
                        <img id="character-img-div"/>
                </div>
                <h3 className="card-header">Class: </h3>
                <p className="card-item">Hitpoints: </p>
                <p className="card-item">Strength: </p>
                <p className="card-item">Dexterity: </p>
                <p className="card-item">Wisdom: </p>
                <p className="card-item">Hit Chance: </p>
                <p className="card-item">Special Ability: </p>
            </div>
    )
}