import { characterObj } from "../components/Main.js";
import { monsterObj } from "../components/RightDiv.js";
import damageSlash from '../assets/damage.png'
import missSlash from '../assets/miss.png'


// ATTACK ROLLS

function confidentRoll() {
    const confident = Math.floor(Math.random() * (20 - 5) + 5)
    return confident
}

function measuredRoll() {
    const measured = Math.floor(Math.random() * (20 - 3) + 3)
    return measured
}

function riskyRoll() {
    const risky = Math.floor(Math.random() * (18 - 2) + 2)
    return risky
}


//UTILO
function dmgAnimation(src) {
    setTimeout(dmgSlashAppear, 10, src)
    setTimeout(dmgSlashDisappear, 300)
}
function dmgSlashAppear(src) {
    // monsterDmgImg.setAttribute('src', src)
    // monsterDmgImg.style.display = 'block'
}
function dmgSlashDisappear() {
    // monsterDmgImg.style.display = 'none'
}
/////MUST MAKE THIS MORE DRY Second parameter that is only sent with the second attack

function dmgAnimation2(src) {
    setTimeout(dmgSlashAppear2, 301, src);
    setTimeout(dmgSlashDisappear2, 601)
}
function dmgSlashAppear2(src) {
    // monsterDmgImg2.setAttribute('src', src)
    // monsterDmgImg2.style.display = 'block'
}
function dmgSlashDisappear2() {
    // monsterDmgImg2.style.display = 'none'
}
//-------------------------------------
function dmgAnimation3(src) {
    setTimeout(dmgSlashAppear3, 602, src);
    setTimeout(dmgSlashDisappear3, 902)
}
function dmgSlashAppear3(src) {
    // monsterDmgImg3.setAttribute('src', src)
    // monsterDmgImg3.style.display = 'block'
}
function dmgSlashDisappear3() {
    // monsterDmgImg3.style.display = 'none'
}

//WEAPON CLASS CONSTRUCTORS
//-----------------------------------

class Weapon {
    constructor(name, type, weight, attack1, attack2, modifyingStat) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.attack1 = attack1;
        this.attack2 = attack2;
        this.modifyingStat = modifyingStat;
    }
}

class Greatsword extends Weapon {
    constructor(name, type, weight, attack1, attack2, modifyingStat) {
        super(name, type, weight, attack1, attack2, modifyingStat)
    }
    attackDam1(targetHit) {
        const naturalRoll = confidentRoll()
        const totalRoll = naturalRoll + characterObj.strength

        if (totalRoll >= targetHit) {
            const damage = Math.floor(Math.random() * (8 - 1) + 1);
            const totalDmg = damage + characterObj.strength
            const combatLogText = `You swing your sword in a wide arc and deal ${totalDmg} damage.`
            const slash = 'mon-dmg-1'
            return { totalDmg, combatLogText, slash }
        } else {
            const totalDmg = 0
            const combatLogText = 'You missed!'
            const slash = 'mon-miss-1'
            return {totalDmg, combatLogText, slash}
        }
        const dmg = 5
        const combatLogText = `You swing your sword in a wide arc and deal ${dmg} damage.`
        return { dmg, combatLogText }
    }

    attackDam2() {
        const dmg = 10
        const combatLogText = `You thrust forward with your sword and deal ${dmg} damage.`
        return { dmg, combatLogText }
    }
}

class DoubleDaggers extends Weapon {
    constructor(name, type, weight, attack1, attack2, modifyingStat) {
        super(name, type, weight, attack1, attack2, modifyingStat)
    }
    attackDam1(targetHit, targetHp) {
        const naturalRoll1 = confidentRoll()
        const totalRoll1 = naturalRoll1 + characterObj.dexterity

        let totalDmg1
        let multiLog1;
        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (2 - 1) + 1);
            dmgAnimation('./assets/damage.png', 1)
            totalDmg1 = damage1 + characterObj.dexterity
            multiLog1 = `deals ${totalDmg1} damage`
        } else {
            totalDmg1 = 0
            dmgAnimation('./assets/miss.png', 1)
            multiLog1 = 'misses';
        }

        const naturalRoll2 = confidentRoll()
        const totalRoll2 = naturalRoll2 + characterObj.dexterity

        let totalDmg2;
        let multiLog2;
        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (2 - 1) + 1);
            dmgAnimation2('./assets/damage-2.png', 2)
            totalDmg2 = damage2 + characterObj.dexterity
            multiLog2 = `deals ${totalDmg2} damage`
        } else {
            totalDmg2 = 0
            dmgAnimation2('./assets/miss-2.png', 2)
            multiLog2 = 'misses';
        }
        // combatLog.textContent = `Your first dagger slash ${multiLog1}, and you follow up with your second dagger that ${multiLog2}.`

        return targetHp - (totalDmg1 + totalDmg2);
    };

    attackDam2(targetHit, targetHp) {
        const naturalRoll1 = riskyRoll()
        const totalRoll1 = naturalRoll1 + characterObj.dexterity

        let totalDmg1
        let multiLog1;
        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (4 - 1) + 1);
            dmgAnimation('./assets/damage.png', 1)
            totalDmg1 = damage1 + characterObj.dexterity
            multiLog1 = `deals ${totalDmg1} damage`
        } else {
            totalDmg1 = 0
            dmgAnimation('./assets/miss.png', 1)
            multiLog1 = 'misses';
        }

        const naturalRoll2 = riskyRoll()
        const totalRoll2 = naturalRoll2 + characterObj.dexterity

        let totalDmg2;
        let multiLog2;
        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (4 - 1) + 1);
            dmgAnimation2('./assets/damage-2.png', 2)
            totalDmg2 = damage2 + characterObj.dexterity
            multiLog2 = `deals ${totalDmg2} damage`
        } else {
            totalDmg2 = 0
            dmgAnimation2('./assets/miss-2.png', 2)
            multiLog2 = 'misses';
        }
        // combatLog.textContent = `Your first dagger stab ${multiLog1}, and you follow up with your second dagger that ${multiLog2}.`

        return targetHp - (totalDmg1 + totalDmg2);
    }
}

class Unarmed extends Weapon {
    constructor(name, type, weight, attack1, attack2, modifyingStat) {
        super(name, type, weight, attack1, attack2, modifyingStat)
    }
    attackDam1(targetHit, targetHp) {
        const naturalRoll1 = confidentRoll()
        let totalRoll1;
        if (characterObj.charClass === 'Monk') {
            totalRoll1 = naturalRoll1 + characterObj.dexterity + characterObj.strength
        } else {
            totalRoll1 = naturalRoll1 + characterObj.dexterity
        }


        let totalDmg1
        let multiLog1;
        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (2 - 1) + 1);
            dmgAnimation('./assets/damage.png', 1)
            if (characterObj.charClass === 'Monk') {
                totalDmg1 = damage1 + characterObj.dexterity + characterObj.strength
            } else {
                totalDmg1 = damage1 + characterObj.dexterity
            }
            multiLog1 = `deals ${totalDmg1} damage`
        } else {
            totalDmg1 = 0
            dmgAnimation('./assets/miss.png', 1)
            multiLog1 = 'misses';
        }

        const naturalRoll2 = confidentRoll()
        let totalRoll2;
        if (characterObj.charClass === 'Monk') {
            totalRoll2 = naturalRoll2 + characterObj.dexterity + characterObj.strength
        } else {
            totalRoll2 = naturalRoll2 + characterObj.dexterity
        }

        let totalDmg2;
        let multiLog2;
        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (2 - 1) + 1);
            dmgAnimation2('./assets/damage-2.png')
            if (characterObj.charClass === 'Monk') {
                totalDmg2 = damage2 + characterObj.dexterity + characterObj.strength
            } else {
                totalDmg2 = damage2 + characterObj.dexterity
            }

            multiLog2 = `deals ${totalDmg2} damage`
        } else {
            totalDmg2 = 0
            dmgAnimation2('./assets/miss-2.png')
            multiLog2 = 'misses';
        }

        const naturalRoll3 = confidentRoll()
        let totalRoll3;
        if (characterObj.charClass === 'Monk') {
            totalRoll3 = naturalRoll3 + characterObj.dexterity + characterObj.strength
        } else {
            totalRoll3 = naturalRoll3 + characterObj.dexterity
        }

        let totalDmg3;
        let multiLog3 = 'poops';
        if (totalRoll3 >= targetHit) {
            const damage3 = Math.floor(Math.random() * (2 - 1) + 1);
            dmgAnimation3('./assets/damage-3.png')

            if (characterObj.charClass === 'Monk') {
                totalDmg3 = damage3 + characterObj.dexterity + characterObj.strength
            } else {
                totalDmg3 = damage3 + characterObj.dexterity
            }
            multiLog3 = `deals ${totalDmg3} damage`
        } else {
            totalDmg3 = 0
            dmgAnimation3('./assets/miss-3.png')
            multiLog3 = 'misses';
        }

        // combatLog.textContent = `Your first strike ${multiLog1}, your second strike ${multiLog2}, and your third strike ${multiLog3}.`

        return targetHp - (totalDmg1 + totalDmg2);
    };

    attackDam2(targetHit, targetHp) {
        const naturalRoll1 = confidentRoll()
        let totalRoll1;
        if (characterObj.charClass === 'Monk') {
            totalRoll1 = naturalRoll1 + characterObj.dexterity + characterObj.strength
        } else {
            totalRoll1 = naturalRoll1 + characterObj.dexterity
        }

        let totalDmg1
        let multiLog1;
        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (4 - 2) + 2);
            if (characterObj.charClass === 'Monk') {
                totalDmg1 = damage1 + characterObj.dexterity + characterObj.strength
            } else {
                totalDmg1 = damage1 + characterObj.dexterity
            }
            dmgAnimation('./assets/damage.png', 1)
            totalDmg1 = damage1 + characterObj.strength
            multiLog1 = `deals ${totalDmg1} damage`
        } else {
            totalDmg1 = 0
            dmgAnimation('./assets/miss.png', 1)
            multiLog1 = 'misses';
        }

        const naturalRoll2 = confidentRoll()
        let totalRoll2;
        if (characterObj.charClass === 'Monk') {
            totalRoll2 = naturalRoll2 + characterObj.dexterity + characterObj.strength
        } else {
            totalRoll2 = naturalRoll2 + characterObj.dexterity
        }

        let totalDmg2;
        let multiLog2;
        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (4 - 2) + 2);
            dmgAnimation2('./assets/damage-2.png', 2)
            if (characterObj.charClass === 'Monk') {
                totalDmg2 = damage2 + characterObj.dexterity + characterObj.strength
            } else {
                totalDmg2 = damage2 + characterObj.dexterity
            }
            totalDmg2 = damage2 + characterObj.strength
            multiLog2 = `deals ${totalDmg2} damage`
        } else {
            totalDmg2 = 0
            dmgAnimation2('./assets/miss-2.png', 2)
            multiLog2 = 'misses';
        }

        // combatLog.textContent = `Your first punch ${multiLog1}, and you follow up with a second punch that ${multiLog2}.`

        return targetHp - (totalDmg1 + totalDmg2);
    }
}


//WEAPON LIST
//-----------------------------------

const valeGreatsword = new Greatsword("Greatsword", 'Sword', 6, 'Sweep Attack', 'Lunge Attack', 'strength')

const slickDoubleDaggers = new DoubleDaggers("Double Daggers", "Daggers", 3, 'Double Slash', 'Double Stab', 'dexterity')

const unarmed = new Unarmed('Unarmed', 'N/A', 0, 'Flurry of Blows', 'One-Two Punch', 'dexterity')

export { valeGreatsword, slickDoubleDaggers, unarmed }
