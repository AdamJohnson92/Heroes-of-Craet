// import { valeGreatsword, slickDoubleDaggers, unarmed } from "./weapons.js";
import { plateArmor, leatherArmor, tunic } from "./armor.js";

class Character {
    constructor(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionMax, potionCount, gold) {
        this.name = name;
        this.maxHp = maxHp;
        this.currentHp = currentHp;
        this.strength = strength;
        this.dexterity = dexterity;
        this.wisdom = wisdom;
        this.hitChanceRate = hitChanceRate
        this.weapon = weapon;
        this.armor = armor;
        this.special = special;
        this.img = img;
        this.attackImg = attackImg;
        this.staminaPoints = staminaPoints;
        this.potionMax = potionMax
        this.potionCount = potionCount;
        this.gold = gold;
    }

    takePotion() {
        const healAmount = Math.floor(Math.random() * (6 - 4) + 4);
        console.log('glug glug glug glug')
        if ((this.currentHp + healAmount) > this.maxHp) {
            this.currentHp = this.maxHp
        } else {
            this.currentHp = healAmount + this.currentHp
        }
        // heroHealthJuice.style.width = `${(this.currentHp / this.maxHp) * 100}%`
        // charHpDiv.textContent = `${this.currentHp}`
        // combatLog.textContent = `You heal for ${healAmount} hitpoints.`

    }
}

class Knight extends Character {
    constructor(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionMax, potionCount, gold) {
        super(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionMax, potionCount, gold)
        this.charClass = 'Knight'
    }

    special1() {
        this.armor.armorRating = this.armor.armorRating + 2

        // buffDisplay(this.armor.armorRating)
        console.log("Your damage reduction is increased by 2 for one turn")
        // combatLog.textContent = "Your damage reduction is increased by 2 for one turn"
    }

    undo1() {
        if (this.armor.armorRating > 2) {
            this.armor.armorRating = 2
        }
        // clearBuffDisplay()

    }
}

//--------

class Rogue extends Character {
    constructor(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionMax, potionCount, gold) {
        super(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionMax, potionCount, gold)
        this.charClass = 'Rogue'
    }

    special1() {
        this.hitChanceRate = this.hitChanceRate + 2
        // charHitDiv.textContent = `${this.hitChanceRate}`
        console.log("Your hit chance rating is increased by 2 for one turn")
        // combatLog.textContent = "Your hit chance rating is increased by 2 for one turn"
        // buffDisplay(charHitDiv)
    }

    undo1() {
        if (this.hitChanceRate > 14) {
            this.hitChanceRate = 14
        }
        // clearBuffDisplay()
        // charHitDiv.textContent = `${this.hitChanceRate}`
    }

}

//-------

class Monk extends Character {
    constructor(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionMax, potionCount, gold) {
        super(name, maxHp, currentHp, strength, dexterity, wisdom, hitChanceRate, weapon, armor, special, img, attackImg, staminaPoints, potionMax, potionCount, gold)
        this.charClass = 'Monk'
    }

    special1() {
        this.hitChanceRate = this.hitChanceRate + 1
        this.armor.armorRating = this.armor.armorRating + 1
        // charHitDiv.textContent = `${this.hitChanceRate}`
        // charArmorRating.textContent = `${this.armor.armorRating}`
        console.log("Your hit chance rating and your damage reduction are improved by 1 for one turn")
        // combatLog.textContent = "Your hit chance rating and your damage reduction are improved by 1 for one turn"
        // buffDisplay(charHitDiv)
        // buffDisplay(charArmorRating)
    }

    undo1() {
        if (this.hitChanceRate > 15) {
            this.hitChanceRate = 15
        }

        // charHitDiv.textContent = `${this.hitChanceRate}`
        if (this.armor.armorRating > 0) {
            this.armor.armorRating = 0
        }
        // clearBuffDisplay()
    }

}

new Knight("Vale", 20, 20, 3, 1, 0, 12,
    '// valeGreatsword',
    'GreatSword',
    plateArmor,
    `Tank`, "./assets/vale-static.png", './assets/vale-attack.png', 2, 1, 1, 0)

new Rogue("Slick", 15, 15, 1, 3, 0, 14,
    // slickDoubleDaggers, 
    'Double Daggers',
    leatherArmor,
    "Agile",
    "./assets/slick-static.png", "./assets/slick-attack.png", 3, 1, 1, 0)

new Monk('Orbyn', 15, 15, 2, 1, 1, 15,
    // unarmed, 
    'Unarmed',
    tunic,
    "Mindful", "./assets/orbyn-static.png", './assets/orbyn-attack.png', 3, 2, 2, 0)


// const characterRoster = [valeChar, slickChar, orbynChar]
const characterRoster = [new Knight("Vale", 20, 20, 3, 1, 0, 12,
//valeGreatsword
'GreatSword',
plateArmor, 
`Tank`, "./assets/vale-static.png", './assets/vale-attack.png', 2, 1, 1, 0), new Rogue("Slick", 15, 15, 1, 3, 0, 14, 
// slickDoubleDaggers, 
'Double Daggers',
leatherArmor, 
"Agile",
    "./assets/slick-static.png", "./assets/slick-attack.png", 3, 1, 1, 0), new Monk ('Orbyn', 15, 15, 2, 1, 1, 15, 
// unarmed, 
'Unarmed',
tunic, 
"Mindful", "./assets/orbyn-static.png", './assets/orbyn-attack.png', 3, 2, 2, 0), ]

// const characterRoster = [
//     {
//         name: 'Vale',
//         charClass: 'Knight'
//     },
//     {
//         name: 'Slick',
//         charClass: 'Rogue'
//     },
//     {
//         name: 'Orbyn',
//         charClass: 'Monk'
//     }
// ]
export { characterRoster }