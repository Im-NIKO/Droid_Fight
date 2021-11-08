import showInfo from '../actions/showInfo.js'
import Droid from './droid.js'

export default class CULTIST extends Droid{
    constructor(name, lvl) {
        super(name, lvl)
        this.model = 'CULTIST D-66'
        this.hp = 2000 + (2000 * lvl / 10);
        this.dmg = 20 + (20 * lvl / 10);
        this.ddg = 0.25; 
        this.crt = 0.2;
        this.reg = 50 + (50 * lvl / 10); // якшо регенерація 2 рази рідряд зілить 500
        this.acc = 0.3;
        this.spd = 3;
        this.doblehill = false
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
}
