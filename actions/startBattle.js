import startTurn from './startTurn.js'
import getRandom from './getRandom.js'


const startBattle = (bot1,bot2,duoArr) => {
    let b1
    let b2
    let change
    if(getRandom(duoArr.length) == 0){
        b1 = bot1
        b2 = bot2
    } else {
        b1 = bot2
        b2 = bot1
    }

    while(b1.isDead == false && b2.isDead == false) {
        startTurn(b1,b2)
        change = b1
        b1 = b2
        b2 = change
    }

    if(b1.isDead == false){
        console.log(`\x1b[33mWINNER\x1b[0m \x1b[35m${b1.name}\x1b[0m`)
    } else {
        console.log(`\x1b[33mWINNER\x1b[0m \x1b[35m${b2.name}\x1b[0m`)
    }
}

export default startBattle