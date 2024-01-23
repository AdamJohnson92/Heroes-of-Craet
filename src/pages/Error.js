import React, { useEffect, useState, createContext } from "react";

export const CharacterContext = createContext()


export default function Error() {

    return (
        <div>
            <h1>Oops! Page Not Found!</h1>
        </div>
    )

}