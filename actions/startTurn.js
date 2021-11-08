import ddmg from './dealDamage.js'

const startTurn = (b1,b3) => {
    console.log(`\x1b[36mTURN STARED\x1b[0m droid \x1b[35m${b1.name}\x1b[0m atacking`)
    for (let i = 0; i < b1.spd; i+=1) {
        ddmg(b1,b3)
    }
    b3.regeneration()
    console.log('\x1b[35mTURN ENDED\x1b[0m')
}

export default startTurn