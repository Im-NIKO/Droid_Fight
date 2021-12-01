import getRandom from './getRandom.js'

const ddmg = (b1,b3) => {
    if(b3.isDead == true){
        b3.dmg = 0
        console.log(`|  droid \x1b[35m${b3.name}\x1b[0m \x1b[31mis dead\x1b[0m`)
        return
    }
    if(b1.accArr[getRandom(b1.accArr.length)] == 1){
        if(b3.ddgArr[getRandom(b3.ddgArr.length)] == 1) {
            b3.onBlock()
        } else {
            if(b1.crtArr[getRandom(b1.crtArr.length)] == 1) {
                console.log(`|  \x1b[31mСritical!!!\x1b[0m (\x1b[31mx2\x1b[0m damage)`)
                b3.getDamage(b1.dmg * 2)
            } else {
                b3.getDamage(b1.dmg)
            }
        }
    } else {
        console.log(`|  Atack \x1b[31mmissed\x1b[0m`)
    }
}

export default ddmg