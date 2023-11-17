import valeStatic from '../assets/vale-static.png'
import valeAttack from '../assets/vale-attack.png'
import valeRetreat from '../assets/vale-retreat.png'
import slickStatic from '../assets/slick-static.png'
import slickAttack from '../assets/slick-attack.png'
import slickRetreat from '../assets/slick-retreat.png'
import orbynStatic from '../assets/orbyn-static.png'
import orbynAttack from '../assets/orbyn-attack.png'
import orbynRetreat from '../assets/orbyn-retreat.png'

import { valeGreatsword, slickDoubleDaggers, unarmed } from "./weapons.js";
import { plateArmor, leatherArmor, tunic } from "./armor.js";


const vale = {
    name: "Vale",
    charClass: 'Knight',
    maxHp: 20,
    currentHp: 20,
    strength: 3,
    dexterity: 1,
    wisdom: 0,
    hitChanceRate: 12,
    weapon: valeGreatsword,
    armor: plateArmor,
    special: 'Tank',
    img: valeStatic,
    attackImg: valeAttack,
    retreatImg: valeRetreat,
    maxStaminaPoints: 2,
    currentStamPoints: 2,
    potionMax: 1,
    potionCount: 1,
    gold: 100,
    isBuffed: false,

    takePotion() {
        const healAmount = Math.floor(Math.random() * (6 - 4) + 4);
        console.log('glug glug glug glug')
        const combatLogText = `You heal for ${healAmount} hitpoints.`

        return { healAmount, combatLogText }
    },

    special1() {
        const armorBuff = 2
        const hitBuff = 0
        const combatLogText = "Your damage reduction is increased by 2 for one turn"


        return { combatLogText, armorBuff, hitBuff }
    },

    undo1() {
        const armorDeBuff = -2
        const hitDeBuff = 0

        return { armorDeBuff, hitDeBuff }
    }

}

const slick = {
    name: "Slick",
    charClass: 'Rogue',
    maxHp: 15,
    currentHp: 15,
    strength: 1,
    dexterity: 3,
    wisdom: 0,
    hitChanceRate: 14,
    weapon: slickDoubleDaggers,
    armor: leatherArmor,
    special: 'Agile',
    img: slickStatic,
    attackImg: slickAttack,
    retreatImg: slickRetreat,
    maxStaminaPoints: 3,
    currentStamPoints: 3,
    potionMax: 1,
    potionCount: 1,
    gold: 100,
    isBuffed: false,

    takePotion() {
        const healAmount = Math.floor(Math.random() * (6 - 4) + 4);
        console.log('glug glug glug glug')
        const combatLogText = `You heal for ${healAmount} hitpoints.`

        return { healAmount, combatLogText }
    },

    special1() {
        const armorBuff = 0
        const hitBuff = 2
        const combatLogText = "Your chance to dodge attacks is increased by 2 for one turn."


        return { combatLogText, armorBuff, hitBuff }
    },

    undo1() {
        const armorDeBuff = 0
        const hitDeBuff = -2

        return { armorDeBuff, hitDeBuff }
    }


}



const orbyn = {
    name: "Orbyn",
    charClass: 'Monk',
    maxHp: 15,
    currentHp: 15,
    strength: 2,
    dexterity: 1,
    wisdom: 1,
    hitChanceRate: 15,
    weapon: unarmed,
    armor: tunic,
    special: 'Mindful',
    img: orbynStatic,
    attackImg: orbynAttack,
    retreatImg: orbynRetreat,
    maxStaminaPoints: 3,
    currentStamPoints: 3,
    potionMax: 2,
    potionCount: 2,
    gold: 100,
    isBuffed: false,

    takePotion() {
        const healAmount = Math.floor(Math.random() * (6 - 4) + 4);
        console.log('glug glug glug glug')
        const combatLogText = `You heal for ${healAmount} hitpoints.`

        return { healAmount, combatLogText }

    },

    special1() {
        //MINDFUL
        const armorBuff = 1
        const hitBuff = 1
        const combatLogText = "Your chance to dodge attacks and your damage reduction are increased by 1 for one turn."


        return { combatLogText, armorBuff, hitBuff }
    },

    undo1() {
        const armorDeBuff = -1
        const hitDeBuff = -1

        return { armorDeBuff, hitDeBuff }
    }

}


const characterRoster = [vale, slick, orbyn]

export { characterRoster }

// class Character {
//     constructor(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, retreatImg, maxStaminaPoints, currentStamPoints, potionMax, potionCount, gold) {
//         this.name = name;
//         this.maxHp = maxHp;
//         this.currentHp = currentHp;
//         this.strength = strength;
//         this.dexterity = dexterity;
//         this.wisdom = wisdom;
//         this.hitChanceRate = hitChanceRate
//         this.weapon = weapon;
//         this.armor = armor;
//         this.special = special;
//         this.img = img;
//         this.attackImg = attackImg;
//         this.retreatImg = retreatImg
//         this.maxStaminaPoints = maxStaminaPoints; 
//         this.currentStamPoints = currentStamPoints
//         this.potionMax = potionMax
//         this.potionCount = potionCount;
//         this.gold = gold;
//     }

//     takePotion() {
//         const healAmount = Math.floor(Math.random() * (6 - 4) + 4);
//         console.log('glug glug glug glug')
//         if ((this.currentHp + healAmount) > this.maxHp) {
//             this.currentHp = this.maxHp
//         } else {
//             this.currentHp = healAmount + this.currentHp
//         }
//         // heroHealthJuice.style.width = `${(this.currentHp / this.maxHp) * 100}%`
//         // charHpDiv.textContent = `${this.currentHp}`
//         // combatLog.textContent = `You heal for ${healAmount} hitpoints.`

//     }
// }

// class Knight extends Character {
//     constructor(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, retreatImg, maxStaminaPoints, currentStamPoints, potionMax, potionCount, gold) {
//         super(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, retreatImg, maxStaminaPoints, currentStamPoints, potionMax, potionCount, gold)
//         this.charClass = 'Knight'
//     }

//     special1() {
//         this.armor.armorRating = this.armor.armorRating + 2

//         // buffDisplay(this.armor.armorRating)
//         console.log("Your damage reduction is increased by 2 for one turn")
//         // combatLog.textContent = "Your damage reduction is increased by 2 for one turn"
//     }

//     undo1() {
//         if (this.armor.armorRating > 2) {
//             this.armor.armorRating = 2
//         }
//         // clearBuffDisplay()

//     }
// }

// //--------

// class Rogue extends Character {
//     constructor(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, retreatImg, maxStaminaPoints, currentStamPoints, potionMax, potionCount, gold) {
//         super(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, retreatImg, maxStaminaPoints, currentStamPoints, potionMax, potionCount, gold)
//         this.charClass = 'Rogue'
//     }

//     special1() {
//         this.hitChanceRate = this.hitChanceRate + 2
//         // charHitDiv.textContent = `${this.hitChanceRate}`
//         console.log("Your hit chance rating is increased by 2 for one turn")
//         // combatLog.textContent = "Your hit chance rating is increased by 2 for one turn"
//         // buffDisplay(charHitDiv)
//     }

//     undo1() {
//         if (this.hitChanceRate > 14) {
//             this.hitChanceRate = 14
//         }
//         // clearBuffDisplay()
//         // charHitDiv.textContent = `${this.hitChanceRate}`
//     }

// }

// //-------

// class Monk extends Character {
//     constructor(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, retreatImg, maxStaminaPoints, currentStamPoints, potionMax, potionCount, gold) {
//         super(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, retreatImg, maxStaminaPoints, currentStamPoints, potionMax, potionCount, gold)
//         this.charClass = 'Monk'
//     }

//     special1() {
//         this.hitChanceRate = this.hitChanceRate + 1
//         this.armor.armorRating = this.armor.armorRating + 1
//         // charHitDiv.textContent = `${this.hitChanceRate}`
//         // charArmorRating.textContent = `${this.armor.armorRating}`
//         console.log("Your hit chance rating and your damage reduction are improved by 1 for one turn")
//         // combatLog.textContent = "Your hit chance rating and your damage reduction are improved by 1 for one turn"
//         // buffDisplay(charHitDiv)
//         // buffDisplay(charArmorRating)
//     }

//     undo1() {
//         if (this.hitChanceRate > 15) {
//             this.hitChanceRate = 15
//         }

//         // charHitDiv.textContent = `${this.hitChanceRate}`
//         if (this.armor.armorRating > 0) {
//             this.armor.armorRating = 0
//         }
//         // clearBuffDisplay()
//     }

// }

// const valeChar = new Knight ("Vale", 20, 20, 3, 1, 0, 12, valeGreatsword,plateArmor,`Tank`, valeStatic, valeAttack, valeRetreat, 2, 2, 1, 1, 0)

// const slickChar = new Rogue ("Slick", 15, 15, 1, 3, 0, 14,slickDoubleDaggers, leatherArmor,"Agile", slickStatic, slickAttack, slickRetreat, 3, 3, 1, 1, 0)

// const orbynChar = new Monk ('Orbyn', 15, 15, 2, 1, 1, 15,unarmed, tunic,"Mindful", orbynStatic, orbynAttack, orbynRetreat, 3, 3, 2, 2, 0)