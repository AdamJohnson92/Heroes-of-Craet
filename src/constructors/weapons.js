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
    attackDam1(mon, hero) {
        const naturalRoll = confidentRoll()
        const totalRoll = naturalRoll + hero.strength

        if (totalRoll >= mon.hitChanceRate) {
            const damage = Math.floor(Math.random() * (8 - 1) + 1);
            const totalDmg = damage + hero.strength
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

    attackDam2(mon, hero) {
        const naturalRoll = measuredRoll()
        const totalRoll = naturalRoll + hero.strength

        if (totalRoll >= mon.hitChanceRate) {
            const damage = Math.floor(Math.random() * (10 - 2) + 2);
            const totalDmg = damage + hero.strength
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
    attackDam1(mon, hero) {
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
        const totalRoll1 = naturalRoll1 + hero.dexterity

        if (totalRoll1 >= mon.hitChanceRate) {
            const damage1 = Math.floor(Math.random() * (2 - 1) + 1);
            totalDmg1 = damage1 + hero.dexterity
            multiLog1 = `deal ${totalDmg1} damage`
            slash = 'mon-dmg-1'
        } else {
            totalDmg1 = 0
            multiLog1 = "miss"
            slash = 'mon-miss-1'
        }

        const naturalRoll2 = confidentRoll()
        const totalRoll2 = naturalRoll2 + hero.dexterity

        if (totalRoll2 >= mon.hitChanceRate) {
            const damage2 = Math.floor(Math.random() * (2 - 1) + 1);
            totalDmg2 = damage2 + hero.dexterity
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

    attackDam2(mon, hero) {
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
        const totalRoll1 = naturalRoll1 + hero.dexterity

        if (totalRoll1 >= mon.hitChanceRate) {
            const damage1 = Math.floor(Math.random() * (4 - 1) + 1);
            totalDmg1 = damage1 + hero.dexterity
            multiLog1 = `deal ${totalDmg1} damage`
            slash = 'mon-dmg-1'
        } else {
            totalDmg1 = 0
            multiLog1 = "miss"
            slash = 'mon-miss-1'
        }

        const naturalRoll2 = confidentRoll()
        const totalRoll2 = naturalRoll2 + hero.dexterity

        if (totalRoll2 >= mon.hitChanceRate) {
            const damage2 = Math.floor(Math.random() * (4 - 1) + 1);
            totalDmg2 = damage2 + hero.dexterity
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
    attackDam1(mon, hero) {
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
        const totalRoll1 = naturalRoll1 + hero.strength

        let isMonk;

        if (hero.charClass === 'Monk') {
            isMonk = true
        }

        if (totalRoll1 >= mon.hitChanceRate) {
           
            const damage1 = Math.floor(Math.random() * (2 - 1) + 1);
            if (isMonk) {
                totalDmg1 = damage1 + hero.dexterity + hero.strength
            } else {
                totalDmg1 = damage1 + hero.dexterity
            } 
            console.log( damage1 )
            console.log( totalDmg1)

            multiLog1 = `deals ${totalDmg1} damage`
            slash = 'mon-dmg-1'
        } else {
            totalDmg1 = 0
            multiLog1 = "misses"
            slash = 'mon-miss-1'
        }

        const naturalRoll2 = measuredRoll()
        const totalRoll2 = naturalRoll2 + hero.strength

        if (totalRoll2 >= mon.hitChanceRate) {
            const damage2 = Math.floor(Math.random() * (2 - 1) + 1);
            if (isMonk) {
                totalDmg2 = damage2 + hero.dexterity + hero.strength
            } else {
                totalDmg2 = damage2 + hero.dexterity
            }
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
        const totalRoll3 = naturalRoll3 + hero.strength

        if (totalRoll3 >= mon.hitChanceRate) {
            const damage3 = Math.floor(Math.random() * (2 - 1) + 1);
            if (isMonk) {
                totalDmg3 = damage3 + hero.dexterity + hero.strength
            } else {
                totalDmg3 = damage3 + hero.dexterity
            }
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

    attackDam2(mon, hero) {
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
        const totalRoll1 = naturalRoll1 + hero.strength

        if (totalRoll1 >= mon.hitChanceRate) {
            const damage1 = Math.floor(Math.random() * (4 - 2) + 2);
            totalDmg1 = damage1 + hero.strength
            multiLog1 = `deal ${totalDmg1} damage`
            slash = 'mon-dmg-1'
        } else {
            totalDmg1 = 0
            multiLog1 = "misses"
            slash = 'mon-miss-1'
        }

        const naturalRoll2 = confidentRoll()
        const totalRoll2 = naturalRoll2 + hero.strength

        if (totalRoll2 >= mon.hitChanceRate) {
            const damage2 = Math.floor(Math.random() * (4 - 2) + 2);
            totalDmg2 = damage2 + hero.strength
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
