import React, { useContext } from "react";
import { CharacterContext } from "./Main";

export default function Preamble() {

    const chosenCharacter = useContext(CharacterContext)

    return (
        <div className="card" id="character-card">

            <h2 id="char-name"> Welcome to Craet
            </h2>


            <h3> Untold Dangers Await</h3>
            <p>Hello World!</p>
          
        </div>
    )
}