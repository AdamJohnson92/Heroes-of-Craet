import React, { useEffect, useState, createContext } from "react";
import { Link } from 'react-router-dom'


export default function Shop() {

    return (
        <div className="centered">
            <div className="container parchment centered">
                <h2>WELCOME TO THE SHOP <br></br> Coming Soon!</h2>
                <p className="centered">Here, you will be able to spend that hard earned gold on magical items to help you on your quest. Until then, continue fighting the good fight!</p>
                <Link to='/Heroes-of-Craet/'>
                    <button className='btn' id="to-town-btn"> Back to Character Selection</button>
                </Link>
            </div>

        </div>
    )

}