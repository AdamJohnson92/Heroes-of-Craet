import undeadStatic from '../assets/undead-static.png'
import undeadAttack from '../assets/undead-attack.png'
import goblinStatic from '../assets/goblin-static.png'
import goblinAttack from '../assets/goblin-attack.png'
import badFrogStatic from '../assets/bad-frog-static.png'

// import { monDmgAnimation, combatLog } from "../combatUtil.js";

// MONSTER ROSTER
//-----------------------------------

const undead = {
    name: 'Undead',
    maxHp: 23,
    currentHp: 23,
    hitChanceRate: 12,
    img: undeadStatic,
    attackImg: undeadAttack,
    maxStaminaPoints: 1,
    currentStamPoints: 1,

    attack1(targetHit, targetArmor) {
        const naturalRoll = Math.floor(Math.random() * (20 - 10) + 10)
        console.log('hello world!')

        if (naturalRoll >= targetHit) {
            let damage = Math.floor(Math.random() * (7 - 2) + 2);
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            const combatLogText=`The ${this.name} hits you for ${dmgLessArmor} damage`
            const slash = 'mon-dmg-1'

            // if ((targetHp - dmgLessArmor) < 1) {
            //     // heroHealthJuice.style.width = '0%'
            //     // loser()
            // }
            return {dmgLessArmor, combatLogText, slash};
        } else {
            const dmgLessArmor = 0
            const combatLogText =`The ${this.name} missed!`
            const slash = 'mon-miss-1'
            return {dmgLessArmor, combatLogText, slash};
        }

    }

}

const goblin = {
    name: 'Goblin',
    maxHp: 30,
    currentHp: 30,
    hitChanceRate: 13,
    img: goblinStatic,
    attackImg: goblinAttack,
    maxStaminaPoints: 1,
    currentStamPoints: 1,

    
}

const badFrog = {
    name: 'Bad Frog',
    maxHp: 35,
    currentHp: 35,
    hitChanceRate: 11,
    img: badFrogStatic,
    attackImg: badFrogStatic,
    maxStaminaPoints: 1,
    currentStamPoints: 1,
    
    attack1(targetHit, targetHp, targetArmor) {
        const naturalRoll = Math.floor(Math.random() * (20 - 12) + 12)

        if (naturalRoll >= targetHit) {
            let damage = Math.floor(Math.random() * (9 - 2) + 2);
            // monDmgAnimation('./assets/damage.png')
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            // combatLog.textContent = `The ${this.name} hits you for ${dmgLessArmor} damage`
            // charHpDiv.textContent = `${(targetHp - dmgLessArmor)}`
            if ((targetHp - dmgLessArmor) < 1) {
                // loser()
            }
            return targetHp - dmgLessArmor;
        } else {
            // monDmgAnimation('./assets/miss.png')
            // combatLog.textContent = `The ${this.name} missed!`
            return targetHp;
        }

    }
}

const monsterRoster = [goblin, undead, badFrog]

export { monsterRoster }