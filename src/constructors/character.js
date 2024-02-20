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
    specialDesc: 'You steel your nerves and are prepared to brush off the next attack. Your damage reduction is reduced by 2 for one turn.',
    img: valeStatic,
    staticAlt: 'The knight, Vale, wearing plate armor, weilding a greatsword. He is tall, and has long brown hair pulled back in a ponytail.',
    attackImg: valeAttack,
    attackAlt: 'Vale lunging toward the enemey, swinging his sword.',
    retreatImg: valeRetreat,
    retreatAlt: 'Vale jumping backwards to return to his starting position.',
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
    specialDesc: 'You focus on your defensive reflexes to avoid the next attack. Your chance to dodge attacks is increased by 2 for one turn.',
    img: slickStatic,
    staticAlt: 'The rogue, Slick, wearing dark leather armor, weilding two daggers. She has dark red hair, and a scarf covering the bottom half of her face.',
    attackImg: slickAttack,
    attackAlt: 'Slick lunging toward the enemey, slashing with her daggers.',
    retreatImg: slickRetreat,
    retreatAlt: 'Slick jumping backwards to return to her starting position.',
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
    specialDesc:'Your rigourous training has prepared your body and your mind. Your chance to dodge attacks and your damage reduction are increased by 1 for one turn.',
    img: orbynStatic,
    staticAlt: 'The monk, Orbyn, wearing a cloth tunic, standing in a martial arts stance. His head is completely shaven.',
    attackImg: orbynAttack,
    attackAlt: 'Orbyn doing a jumping kick towards the enemy.',
    retreatImg: orbynRetreat,
    retreatAlt: 'Orbyn jumping backwards to return to his starting position.',
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

//A filler hero that's used so the character stat sheet can still populate even when not rendered
const tav = {
    name: "Tav",
    charClass: 'Knight',
    maxHp: 100,
    currentHp: 100,
    strength: 5,
    dexterity: 5,
    wisdom: 5,
    hitChanceRate: 20,
    weapon: valeGreatsword,
    armor: plateArmor,
    special: 'Tank',
    img: valeStatic,
    attackImg: valeAttack,
    retreatImg: valeRetreat,
    maxStaminaPoints: 3,
    currentStamPoints: 3,
    potionMax: 3,
    potionCount: 3,
    gold: 1000,
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

const characterRoster = [vale, slick, orbyn]

export { characterRoster, tav }
