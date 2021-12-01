import startTurn from './startTurn.js'
import getRandom from './getRandom.js'

const startBigBattle = (bot1,bot2,bot3,bot4,bigArr,team1,team2) => {
    let b1 = bot1
    let b2 = bot2
    let b3 = bot3
    let b4 = bot4
    let t1
    let t2
    let change

    if(getRandom(bigArr.length) == 0){
        t1 = team1
        t2 = team2
    } else {
        t1 = team2
        t2 = team1
    }

    if(getRandom(t1.length) == 0){
        b1 = bot1
        b2 = bot2
    } else {
        b1 = bot2
        b2 = bot1
    }

    if(getRandom(t2.length) == 0){
        b3 = bot3
        b4 = bot4
    } else {
        b3 = bot4
        b4 = bot3
    }

    while((b1.isDead == false || b2.isDead == false) && (b3.isDead == false || b4.isDead == false)) {
        if(t1 == team1){
            if(b1.isDead == false || b4.isDead == false && b2.isDead == false || b3.isDead == false){
                startTurn(b2,b3)
                startTurn(b1,b4)
            }
            startTurn(b1,b3)
            startTurn(b2,b4)
        } else {
            if(b1.isDead == false || b4.isDead == false && b2.isDead == false || b3.isDead == false){
                startTurn(b3,b2)
                startTurn(b4,b1)
            }
            startTurn(b3,b1)
            startTurn(b4,b2)
        }

        change = t1
        t1 = t2
        t2 = change
        change = b1
        b1 = b2
        b2 = change
        change = b3
        b3 = b4
        b4 = change
    }

    if(b1.isDead == false){
        console.log(`\x1b[33mWINNERS\x1b[0m \x1b[35m${b1.name}\x1b[0m and \x1b[35m${b2.name}\x1b[0m`)
    } else {
        console.log(`\x1b[33mWINNERS\x1b[0m \x1b[35m${b3.name}\x1b[0m and \x1b[35m${b4.name}\x1b[0m`)
    }
}

export default startBigBattle