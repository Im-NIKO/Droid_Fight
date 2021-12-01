import showInfo from '../actions/showInfo.js'
import Droid from './droid.js'

export default class RAMPAGE extends Droid{
    constructor(name, lvl) {
        super(name, lvl)
        this.model = 'RAMPAGE Z-29'
        this.hp = 750 + (750 * lvl / 10);
        this.dmg = 150 + (150 * lvl / 10);
        this.ddgArr = [1,1,0,0,0]
        this.ddg = 0.1;
        this.crt = 0.2;
        this.crtArr = [1,0,0,0,0,0,0,0,0,0]
        this.vpm = 15 + (15 * lvl / 10); 
        this.acc = 0.8;
        this.accArr = [1,1,1,1,1,1,1,0,0,0]
        this.spd = 1;
        this.isDead = false
    }

    info(){
        console.log(showInfo(
            this.lvl,
            this.model,
            this.hp,
            this.dmg,
            this.ddg,
            this.crt,
            this.vpm,
            this.acc,
            this.spd
            )
        )
    }
    

    getDamage(dmg){
        if(this.isDead == true){
            this.dmg = 0
            console.log(`|  droid \x1b[35m${this.name}\x1b[0m \x1b[31mis dead\x1b[0m`)
            return
        }
        this.hp = this.hp - dmg
        console.log(`|  Droid \x1b[35m${this.name}\x1b[0m got \x1b[31m${dmg}\x1b[0m damage, \x1b[32m${this.hp}\x1b[0m hp left`)
    }

    onBlock(){
        if(this.isDead == true){
            this.dmg = 0
            console.log(`|  droid \x1b[35m${this.name}\x1b[0m \x1b[31mis dead\x1b[0m`)
            return
        }
        this.dmg = this.dmg + 5
        console.log(`|  Atack \x1b[31mbloked\x1b[0m, droid \x1b[35m${this.name}\x1b[0m angry (Damage increased \x1b[32m+5\x1b[0m) current damage \x1b[32m${this.dmg}\x1b[0m`)
    }

    regeneration(){
        if(this.isDead == true){
            this.dmg = 0
            console.log(`|  droid \x1b[35m${this.name}\x1b[0m \x1b[31mis dead\x1b[0m`)
            return
        }
        if(this.hp <= 0){
            this.death()
            console.log(`|  Droid \x1b[35m${this.name}\x1b[0m \x1b[31mDESTROYED!!!\x1b[0m`)
        } else { 
            this.hp = this.hp + this.vpm
            console.log(`|  Droid \x1b[35m${this.name}\x1b[0m \x1b[32mregenerated\x1b[0m \x1b[33m${this.vpm}\x1b[0m hp, \x1b[32m${this.hp}\x1b[0m hp left`)
        }
    }

    death(){
        this.isDead = true
    }


}