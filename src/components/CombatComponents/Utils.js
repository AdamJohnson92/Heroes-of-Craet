import { useState } from "react"
import CombatDiv from "./CombatDiv"


export default function CombatUtil({ combatDisplay, StaminaReduce, heroStamPoints, monster, setMonster }) {
    const [monDmgSlash, setMonDmgSlash] = useState('mon-dmg-0')

    function handleMonSlash(slash, slash2, slash3) {
        setTimeout(setMonDmgSlash, 200, slash)
        setTimeout(setMonDmgSlash, 400, slash2)
        setTimeout(setMonDmgSlash, 600, slash3)
        setTimeout(setMonDmgSlash, 1000, 'mon-dmg-0')
    }

    return (
        <>
            <CombatDiv combatDisplay={combatDisplay} monster={monster} StaminaReduce={StaminaReduce} heroStamPoints={heroStamPoints} setMonster={setMonster} monDmgSlash={monDmgSlash} handleMonSlash={handleMonSlash} />
        </>
    )
}
