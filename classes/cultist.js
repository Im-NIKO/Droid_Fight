import showInfo from '../actions/showInfo.js'
import Droid from './droid.js'

export default class CULTIST extends Droid{
    constructor(name, lvl) {
        super(name, lvl)
        this.model = 'CULTIST D-66'
        this.hp = 2000 + (2000 * lvl / 10);
        this.dmg = 20 + (20 * lvl / 10);
        this.ddg = 0.25; 
        this.ddgArr = [1,1,0,0,0]
        this.crt = 0.2;
        this.crtArr = [1,0,0,0,0,0,0,0,0,0]
        this.reg = 50 + (50 * lvl / 10);
        this.acc = 0.3;
        this.accArr = [1,1,1,1,1,1,1,0,0,0]
        this.spd = 3;
        this.doblehill = false
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
            this.reg,
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
            this.hp = this.hp + this.reg
            console.log(`|  Droid \x1b[35m${this.name}\x1b[0m \x1b[32mregenerated\x1b[0m \x1b[33m${this.reg}\x1b[0m hp, \x1b[32m${this.hp}\x1b[0m hp left`)
        }
    }

    death(){
        this.isDead = true
    }


}
