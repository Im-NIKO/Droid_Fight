import PHANTOM from './classes/phantom.js'
import RAMPAGE from './classes/rampage.js'
import GUARDIAN from './classes/guardian.js'
import CULTIST from './classes/cultist.js'
import startBatle from './actions/startBattle.js'

let bb1 = new PHANTOM('kalyas', 6)
let bb2 = new RAMPAGE('bo', 4)
let bb3 = new GUARDIAN('sanec', 6)
let bb4 = new CULTIST('bik', 1)

const duoArr = [0,1]

// const getRandom = (max) => {
//     return Math.floor(Math.random() * max);
// }

// const startBatle = (bot1,bot2) => {
//     let b1
//     let b2
//     let change
//     if(getRandom(duoArr.length) == 0){
//         b1 = bot1
//         b2 = bot2
//     } else {
//         b1 = bot2
//         b2 = bot1
//     }

//     while(b1.isDead == false && b2.isDead == false) {
//         startTurn(b1,b2)
//         change = b1
//         b1 = b2
//         b2 = change
//     }

//     if(b1.isDead == false){
//         console.log(`\x1b[33mWINNER\x1b[0m \x1b[35m${b1.name}\x1b[0m`)
//     } else {
//         console.log(`\x1b[33mWINNER\x1b[0m \x1b[35m${b2.name}\x1b[0m`)
//     }
// }

// const startTurn = (b1,b3) => {
//     console.log(`\x1b[36mTURN STARED\x1b[0m droid \x1b[35m${b1.name}\x1b[0m atacking`)
//     for (let i = 0; i < b1.spd; i+=1) {
//         ddmg(b1,b3)
//     }
//     b3.regeneration()
//     console.log('\x1b[35mTURN ENDED\x1b[0m')
// }

// const ddmg = (b1,b3) => {
//     if(b1.accArr[getRandom(b1.accArr.length)] == 1){
//         if(b3.ddgArr[getRandom(b3.ddgArr.length)] == 1) {
//             b3.onBlock()
//         } else {
//             if(b1.crtArr[getRandom(b1.crtArr.length)] == 1) {
//                 console.log(`|  \x1b[31mСritical!!!\x1b[0m (\x1b[31mx2\x1b[0m damage)`)
//                 b3.getDamage(b1.dmg * 2)
//             } else {
//                 b3.getDamage(b1.dmg)
//             }
//         }
//     } else {
//         console.log(`|  Atack \x1b[31mmissed\x1b[0m`)
//     }
// }

startBatle(bb1,bb3,duoArr)

