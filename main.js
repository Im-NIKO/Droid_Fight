import PHANTOM from './classes/phantom.js'
import RAMPAGE from './classes/rampage.js'
import GUARDIAN from './classes/guardian.js'
import CULTIST from './classes/cultist.js'
import startBattle from './actions/startBattle.js'
import startBigBattle from './actions/startBigBattle.js'

let bb1 = new PHANTOM('kalyas', 6)
let bb2 = new RAMPAGE('bo', 4)
let bb3 = new GUARDIAN('sanec', 6)
let bb4 = new CULTIST('bik', 1)

// bb4.info()

const duoArr = [0,1]
const bigArr = [0,1]
const team1 = [0,1]
const team2 = [0,1]

startBattle(bb2,bb4,duoArr)

// startBigBattle(bb1,bb2,bb3,bb4,bigArr,team1,team2)