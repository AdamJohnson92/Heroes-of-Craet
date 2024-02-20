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
    maxHp: 30,
    currentHp: 30,
    hitChanceRate: 12,
    img: undeadStatic,
    staticAlt: 'A zombie with red and brown rotten flesh, dragging it\'s left foot.',
    attackImg: undeadAttack,
    attackAlt: 'The zombie lurches forward with both hands towards the player\'s character.',
    maxStaminaPoints: 1,
    currentStamPoints: 1,

    attack1(targetHit, targetArmor) {
        const naturalRoll = Math.floor(Math.random() * (20 - 10) + 10)
        
        if (naturalRoll >= targetHit) {
            let damage = Math.floor(Math.random() * (7 - 2) + 2);
            
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            const combatLogText=`The ${this.name} hits you for ${dmgLessArmor} damage`
            const slash = 'mon-dmg-1'
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
    staticAlt: 'A goblin with green skin, hunched over wearing tattered clothes and weilding a wooden club.',
    attackImg: goblinAttack,
    attackAlt: 'The goblin jumps forward, slamming the club down with both hands.',
    maxStaminaPoints: 1,
    currentStamPoints: 1,

    attack1(targetHit, targetArmor) {
        const naturalRoll = Math.floor(Math.random() * (20 - 10) + 10)
        
        if (naturalRoll >= targetHit) {
            let damage = Math.floor(Math.random() * (7 - 2) + 2);
            
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            const combatLogText=`The ${this.name} hits you for ${dmgLessArmor} damage`
            const slash = 'mon-dmg-1'
            return {dmgLessArmor, combatLogText, slash};
        } else {
            const dmgLessArmor = 0
            const combatLogText =`The ${this.name} missed!`
            const slash = 'mon-miss-1'
            return {dmgLessArmor, combatLogText, slash};
        }

    }

    
}

const badFrog = {
    name: 'Bad Frog',
    maxHp: 35,
    currentHp: 35,
    hitChanceRate: 11,
    img: badFrogStatic,
    staticAlt: 'A big, purple toad.',
    attackImg: badFrogStatic,
    attackAlt: 'A big, purple toad.',
    maxStaminaPoints: 1,
    currentStamPoints: 1,
    
    attack1(targetHit, targetArmor) {
        const naturalRoll = Math.floor(Math.random() * (20 - 10) + 10)
        
        if (naturalRoll >= targetHit) {
            let damage = Math.floor(Math.random() * (7 - 2) + 2);
            
            let dmgLessArmor = damage - targetArmor
            if ((dmgLessArmor) < 0) {
                dmgLessArmor = 0;
            }
            const combatLogText=`The ${this.name} hits you for ${dmgLessArmor} damage`
            const slash = 'mon-dmg-1'
            return {dmgLessArmor, combatLogText, slash};
        } else {
            const dmgLessArmor = 0
            const combatLogText =`The ${this.name} missed!`
            const slash = 'mon-miss-1'
            return {dmgLessArmor, combatLogText, slash};
        }

    }

}

const monsterRoster = [goblin, undead, badFrog]

export { monsterRoster }