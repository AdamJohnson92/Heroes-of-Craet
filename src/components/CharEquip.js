import React from "react";
import goldImg from "../assets/gold-stack.png"

export default function CharEquip({chosenCharacter}) {
    
    return(
        <div className="card" id="equipment-card">
        <h3>Equipment  </h3>
            <h4> {chosenCharacter.gold}<img id="gold-img" src={goldImg}/></h4>
  
       
        <h4 className="card-header" id="weapon-name"></h4>
        <p className="card-item"> Type: </p>
        <p className="card-item">Weight: </p>
        <p className="card-item"> Attack 1: </p>
        <p className="card-item"> Attack 2: </p>
        <h4 className="card-header" id="armor-name">{}</h4>
            <p className="card-item"> Armor Class: {} </p>
            <p className="card-item"> Armor Weight: </p>
            <p className="card-item"> Damage Reduction: </p>
    </div>
    )
}