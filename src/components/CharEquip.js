import React, { useContext } from "react";
import goldImg from "../assets/gold-stack.png"
import { CharacterContext } from "./../pages/Main";


export default function CharEquip() {

    const chosenCharacter = useContext(CharacterContext)
    
    return(
        
        <div className="card" id="equipment-card">
        <h3>Equipment  </h3>
            <p className= "card-item"id="gold-line"> <img id="gold-img" src={goldImg}/>{chosenCharacter.gold}</p>
        <h4 className="card-header" id="weapon-name">{chosenCharacter.weapon.name}</h4>
        <p className="card-item"> Type: {chosenCharacter.weapon.name} </p>
        <p className="card-item">Weight: {chosenCharacter.weapon.weight} </p>
        <p className="card-item"> Attack 1: {chosenCharacter.weapon.attack1}</p>
        <p className="card-item"> Attack 2: {chosenCharacter.weapon.attack2}</p>
        <h4 className="card-header" id="armor-name">{chosenCharacter.armor.name}</h4>
            <p className="card-item"> Armor Class: {chosenCharacter.armor.armorClass} </p>
            <p className="card-item"> Armor Weight: {chosenCharacter.armor.weight}  </p>
            <p className="card-item"> Damage Reduction: {chosenCharacter.armor.armorRating}  </p>
    </div>
    )
}