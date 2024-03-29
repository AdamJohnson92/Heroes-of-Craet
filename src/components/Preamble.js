import React, { useContext } from "react";
import { CharacterContext } from "./Main";

export default function Preamble() {

    const chosenCharacter = useContext(CharacterContext)

    return (
        <div className="card parchment" >

            <h1> Welcome to Craet
            </h1>


            <h2 className= 'centered'> Untold Dangers Await </h2>
            <p className='paragraph'>The land of Craet has a rich history full of heroes and their many deeds. Valorous knights, and daring rogues. Disciplined monks, and wise sorcerors. This land was built on their many virtues.</p> 
            <p className='paragraph'>But Craet is once again being cast into shadow. Monsters are infecting the forests and plains, and threatening the peaceful citizens of the kingdom. Heroes must rise once again to slay the monsters where they stand. Will you be a Hero of Craet?</p> 
          
        </div>
    )
}