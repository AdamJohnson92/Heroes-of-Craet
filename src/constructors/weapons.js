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
            const slash2 = 'mon-dmg-1'
            const slash3 = 'mon-dmg-1'
            return { totalDmg, combatLogText, slash, slash2, slash3 }
        } else {
            const totalDmg = 0
            const combatLogText = 'You missed!'
            const slash = 'mon-miss-1'
            const slash2 = 'mon-miss-1'
            const slash3 = 'mon-miss-1'
            return { totalDmg, combatLogText, slash, slash2, slash3 }
        }
    }

    attackDam2(targetHit) {
        const naturalRoll = measuredRoll()
        const totalRoll = naturalRoll + characterObj.strength

        if (totalRoll >= targetHit) {
            const damage = Math.floor(Math.random() * (10 - 2) + 2);
            const totalDmg = damage + characterObj.strength
            const combatLogText = `You thrust your sword forward and deal ${totalDmg} damage.`
            const slash = 'mon-dmg-1'
            const slash2 = 'mon-dmg-1'
            const slash3 = 'mon-dmg-1'
            return { totalDmg, combatLogText, slash, slash2, slash3 }
        } else {
            const totalDmg = 0
            const combatLogText = 'You missed!'
            const slash = 'mon-miss-1'
            const slash2 = 'mon-miss-1'
            const slash3 = 'mon-miss-1'
            return { totalDmg, combatLogText, slash, slash2, slash3 }
        }
    }
}

class DoubleDaggers extends Weapon {
    constructor(name, type, weight, attack1, attack2, modifyingStat) {
        super(name, type, weight, attack1, attack2, modifyingStat)
    }
    attackDam1(targetHit, targetHp) {
        let totalDmg
        let totalDmg1
        let totalDmg2
        let multiLog1
        let multiLog2
        let slash
        let slash2
        let slash3
        let combatLogText 
        
        const naturalRoll1 = confidentRoll()
        const totalRoll1 = naturalRoll1 + characterObj.dexterity

        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (2 - 1) + 1);
            totalDmg1 = damage1 + characterObj.dexterity
            multiLog1 = `deal ${totalDmg1} damage`
            slash = 'mon-dmg-1'
        } else {
            totalDmg1 = 0
            multiLog1 = "miss"
            slash = 'mon-miss-1'
        }

        const naturalRoll2 = confidentRoll()
        const totalRoll2 = naturalRoll2 + characterObj.dexterity

        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (2 - 1) + 1);
            totalDmg2 = damage2 + characterObj.dexterity
            multiLog2 = `deal ${totalDmg2} damage`
            slash2 = 'mon-dmg-2'
            slash3 = 'mon-dmg-2'
        } else {
            totalDmg2 = 0
            multiLog2 = "miss"
            slash2 = 'mon-miss-2'
            slash3 = 'mon-miss-2'
        }

        totalDmg = totalDmg1 + totalDmg2
        combatLogText = `You slash with your first dagger and ${multiLog1}, then follow up with your second dagger and ${multiLog2}.`

        return { totalDmg, combatLogText, slash, slash2, slash3 }

    };

    attackDam2(targetHit, targetHp) {
        let totalDmg
        let totalDmg1
        let totalDmg2
        let multiLog1
        let multiLog2
        let slash
        let slash2
        let slash3
        let combatLogText 
        
        const naturalRoll1 = measuredRoll()
        const totalRoll1 = naturalRoll1 + characterObj.dexterity

        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (4 - 1) + 1);
            totalDmg1 = damage1 + characterObj.dexterity
            multiLog1 = `deal ${totalDmg1} damage`
            slash = 'mon-dmg-1'
        } else {
            totalDmg1 = 0
            multiLog1 = "miss"
            slash = 'mon-miss-1'
        }

        const naturalRoll2 = confidentRoll()
        const totalRoll2 = naturalRoll2 + characterObj.dexterity

        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (4 - 1) + 1);
            totalDmg2 = damage2 + characterObj.dexterity
            multiLog2 = `deal ${totalDmg2} damage`
            slash2 = 'mon-dmg-2'
            slash3 = 'mon-dmg-2'
        } else {
            totalDmg2 = 0
            multiLog2 = "miss"
            slash2 = 'mon-miss-2'
            slash3 = 'mon-miss-2'
        }

        totalDmg = totalDmg1 + totalDmg2
        combatLogText = `You stab with your first dagger and ${multiLog1}, then follow up with your second dagger and ${multiLog2}.`

        return { totalDmg, combatLogText, slash, slash2, slash3 }
    };
}

class Unarmed extends Weapon {
    constructor(name, type, weight, attack1, attack2, modifyingStat) {
        super(name, type, weight, attack1, attack2, modifyingStat)
    }
    attackDam1(targetHit, targetHp) {
        let totalDmg
        let totalDmg1
        let totalDmg2
        let totalDmg3
        let multiLog1
        let multiLog2
        let multiLog3
        let slash
        let slash2
        let slash3
        let combatLogText 
        
        const naturalRoll1 = measuredRoll()
        const totalRoll1 = naturalRoll1 + characterObj.strength

        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (2 - 1) + 1);
            totalDmg1 = damage1 + characterObj.strength
            multiLog1 = `deals ${totalDmg1} damage`
            slash = 'mon-dmg-1'
        } else {
            totalDmg1 = 0
            multiLog1 = "misses"
            slash = 'mon-miss-1'
        }

        const naturalRoll2 = measuredRoll()
        const totalRoll2 = naturalRoll2 + characterObj.strength

        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (2 - 1) + 1);
            totalDmg2 = damage2 + characterObj.strength
            multiLog2 = `deals ${totalDmg2} damage`
            slash2 = 'mon-dmg-2'
            slash3 = 'mon-dmg-2'
        } else {
            totalDmg2 = 0
            multiLog2 = "misses"
            slash2 = 'mon-miss-2'
            slash3 = 'mon-miss-2'
        }

        const naturalRoll3 = measuredRoll()
        const totalRoll3 = naturalRoll3 + characterObj.strength

        if (totalRoll3 >= targetHit) {
            const damage3 = Math.floor(Math.random() * (2 - 1) + 1);
            totalDmg3 = damage3 + characterObj.strength
            multiLog3 = `deals ${totalDmg3} damage`
            slash3 = 'mon-dmg-3'
            
        } else {
            totalDmg3 = 0
            multiLog3 = "misses"
            slash3 = 'mon-miss-3'
            
        }

        totalDmg = totalDmg1 + totalDmg2 + totalDmg3
        combatLogText = `Your first strike ${multiLog1}, your second strike ${multiLog2}, and your third strike ${multiLog3}.`

        return { totalDmg, combatLogText, slash, slash2, slash3 }

    

    };

    attackDam2(targetHit, targetHp) {
        let totalDmg
        let totalDmg1
        let totalDmg2
        let multiLog1
        let multiLog2
        let slash
        let slash2
        let slash3
        let combatLogText 
        
        const naturalRoll1 = confidentRoll()
        const totalRoll1 = naturalRoll1 + characterObj.strength

        if (totalRoll1 >= targetHit) {
            const damage1 = Math.floor(Math.random() * (4 - 2) + 2);
            totalDmg1 = damage1 + characterObj.strength
            multiLog1 = `deal ${totalDmg1} damage`
            slash = 'mon-dmg-1'
        } else {
            totalDmg1 = 0
            multiLog1 = "misses"
            slash = 'mon-miss-1'
        }

        const naturalRoll2 = confidentRoll()
        const totalRoll2 = naturalRoll2 + characterObj.strength

        if (totalRoll2 >= targetHit) {
            const damage2 = Math.floor(Math.random() * (4 - 2) + 2);
            totalDmg2 = damage2 + characterObj.strength
            multiLog2 = `deal ${totalDmg2} damage`
            slash2 = 'mon-dmg-2'
            slash3 = 'mon-dmg-2'
        } else {
            totalDmg2 = 0
            multiLog2 = "misses"
            slash2 = 'mon-miss-2'
            slash3 = 'mon-miss-2'
        }

        totalDmg = totalDmg1 + totalDmg2
        combatLogText = `Your first punch ${multiLog1}, and you follow up with a second punch that ${multiLog2}.`

        return { totalDmg, combatLogText, slash, slash2, slash3 }
    }
}


//WEAPON LIST
//-----------------------------------

const valeGreatsword = new Greatsword("Greatsword", 'Sword', 6, 'Sweep Attack', 'Lunge Attack', 'strength')

const slickDoubleDaggers = new DoubleDaggers("Double Daggers", "Daggers", 3, 'Double Slash', 'Double Stab', 'dexterity')

const unarmed = new Unarmed('Unarmed', 'N/A', 0, 'Flurry of Blows', 'One-Two Punch', 'dexterity')

export { valeGreatsword, slickDoubleDaggers, unarmed }
