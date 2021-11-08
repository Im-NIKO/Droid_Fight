import showInfo from '../actions/showInfo.js'
import Droid from './droid.js'

export default class RAMPAGE extends Droid{
    constructor(name, lvl) {
        super(name, lvl)
        this.model = 'RAMPAGE Z-29'
        this.hp = 750 + (750 * lvl / 10);
        this.dmg = 150 + (150 * lvl / 10);
        this.ddg = 0.1;
        this.crt = 0.2;
        this.vpm = 15 + (15 * lvl / 10); //якшо кріт хілить на 150
        this.acc = 0.8;
        this.spd = 1;
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
}