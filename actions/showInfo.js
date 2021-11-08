export default function showInfo(lvl, model, hp, dmg, ddg, crt, reg, acc, spd){
  if (model == 'PHANTOM R-63'){
    return `
                 /~\\                       |\x1b[35mBOT INFO\x1b[0m[\x1b[33m${model}\x1b[0m] lvl: \x1b[36m${lvl}\x1b[0m
              __.\\_/.__                    |   
           _/   |   |   \\_                 |\x1b[31mHP\x1b[0m ${hp}
          /|  \x1b[32m@\x1b[0m|| \x1b[36m${lvl}\x1b[0m ||\x1b[32m@\x1b[0m  |\\                |\x1b[35mDMG\x1b[0m ${dmg} 
        /_,|\x1b[32m@@@\x1b[0m||___||\x1b[32m@@@\x1b[0m|._\\              |\x1b[32mDdg\x1b[0m ${ddg*100}%
       /~\\  ~~~ /[_]\\ ~~~  /~\\             |\x1b[32mCrt\x1b[0m ${crt*100}%
      (\x1b[31mO\x1b[0m_\x1b[31mO\x1b[0m) /~~[_____]~~\\ (\x1b[31mO\x1b[0m_\x1b[31mO\x1b[0m)            |\x1b[32mReg\x1b[0m ${reg} hp
           (~~|       |~~)                 |\x1b[32mAcc\x1b[0m ${acc*100}%
          |~~ ]       [ ~~|                |\x1b[32mSpd\x1b[0m ${spd} shots
          |~~|         |~~|                |
          |~~|         |~~|                |This bot is a very fast, he don't 
         _<\\/>_       _<\\/>_               |have a lot of damage, but this is 
        /OOooOO\\     /OOooOO\\              |offset by high speed and crit.
    `
    
  }

  if (model == 'RAMPAGE Z-29'){
    return`
            ___       ___
      (\x1b[31mO\x1b[0m_\x1b[31mO\x1b[0m)[___] /~\\ [___](\x1b[31mO\x1b[0m_\x1b[31mO\x1b[0m)            |\x1b[35mBOT INFO\x1b[0m[\x1b[33m${model}\x1b[0m] lvl: \x1b[36m${lvl}\x1b[0m
        \\ ,|\x1b[31mooo\x1b[0m|.\\_/.|\x1b[31mooo\x1b[0m|, /              |
          \\|\x1b[31m000\x1b[0m||   ||\x1b[31m000\x1b[0m|/                |\x1b[31mHP\x1b[0m ${hp}
          /|\x1b[31m000\x1b[0m|| \x1b[36m${lvl}\x1b[0m ||\x1b[31m000\x1b[0m|\\                |\x1b[32mDMG\x1b[0m ${dmg}
        /_,|\x1b[31m000\x1b[0m||___||\x1b[31m000\x1b[0m|._\\              |\x1b[32mDdg\x1b[0m ${ddg*100}%
       /~\\  ~~~ /[_]\\ ~~~  /~\\             |\x1b[32mCrt\x1b[0m ${crt*100}%
      (\x1b[31mO\x1b[0m_\x1b[31mO\x1b[0m) /~~[_____]~~\\ (\x1b[31mO\x1b[0m_\x1b[31mO\x1b[0m)            |\x1b[35mVmp\x1b[0m ${reg} hp
           (~~|       |~~)                 |\x1b[32mAcc\x1b[0m ${acc*100}%
          |~~ ]       [ ~~|                |\x1b[32mSpd\x1b[0m ${spd} shot
          |~~|         |~~|                |
          |~~|         |~~|                |This bot is a great damager, but
         _<\\/>_       _<\\/>_               |without armor and have small 
        /_====_\\     /_====_\\              |heal points.
    `
  }

  if (model == 'GUARDIAN N-11'){
    return` 
     _______             _______
    \x1b[32m|@|@|@|@|\x1b[0m           \x1b[32m|@|@|@|@|\x1b[0m          |\x1b[35mBOT INFO\x1b[0m[\x1b[33m${model}\x1b[0m] lvl: \x1b[36m${lvl}\x1b[0m
    \x1b[32m|@|@|@|@|\x1b[0m   _____   \x1b[32m|@|@|@|@|\x1b[0m          |
    \x1b[32m|@|@|@|@|\x1b[0m /\\_T_T_/\\ \x1b[32m|@|@|@|@|\x1b[0m          |\x1b[31mHP\x1b[0m ${hp}
    \x1b[32m|@|@|@|@|\x1b[0m|         |\x1b[32m|@|@|@|@|\x1b[0m          |\x1b[32mDMG\x1b[0m ${dmg}
    \x1b[32m|@|@|@|@|\x1b[0m|    \x1b[36m${lvl}\x1b[0m    |\x1b[32m|@|@|@|@|\x1b[0m          |\x1b[35mBlc\x1b[0m ${ddg*100}%
    \x1b[32m|@|@|@|@|\x1b[0m \\       / \x1b[32m|@|@|@|@|\x1b[0m          |\x1b[32mCrt\x1b[0m ${crt*100}%
    \x1b[32m|@|@|@|\x1b[0m    \\\\#_#//    \x1b[32m|@|@|@|\x1b[0m          |\x1b[32mReg\x1b[0m ${reg} hp
    \x1b[32m||@|]\x1b[0m   /~~[_____]~~\\   \x1b[32m[|@||\x1b[0m          |\x1b[32mAcc\x1b[0m ${acc*100}%
    \x1b[31m[]\x1b[0m    (  |       |  )      \x1b[31m[]\x1b[0m          |\x1b[32mSpd\x1b[0m ${spd} shots
          [~  ]       [  ~]                |
          |~~|         |~~|                |This bot is heavy tank with 
          |  |         |  |                |a lot of armor and hp, but 
         _<\\/>_       _<\\/>_               |he is very slow and don't
        /_====_\\     /_====_\\              |have a lot of damage.
    `
  }

  if (model == 'CULTIST D-66'){
    return` 
                           
                                           |\x1b[35mBOT INFO\x1b[0m[\x1b[33m${model}\x1b[0m] lvl: \x1b[36m${lvl}\x1b[0m
                _____                      |
     _______  /\\_S_S_/\\  _______           |\x1b[31mHP\x1b[0m ${hp}
    \x1b[33m|#|#|#|#|\x1b[0m|         |\x1b[33m|#|#|#|#|\x1b[0m          |\x1b[32mDMG\x1b[0m ${dmg}
     \x1b[32m@/~@@~@\x1b[0m||__  \x1b[36m${lvl}\x1b[0m  __||\x1b[32m@~@@~\\@\x1b[0m           |\x1b[32mDdg\x1b[0m ${ddg*100}%
      \\|__|_|   |\x1b[32m@ @\x1b[0m|   |_|__|/            |\x1b[32mCrt\x1b[0m ${crt*100}%
      _| _|  __ |\x1b[32m@@@\x1b[0m| __  |_ |_            |\x1b[35mReg\x1b[0m ${reg} hp 
    \x1b[31m(O_O)\x1b[0m   /~~[_____]~~\\   \x1b[31m(O_O)\x1b[0m          |\x1b[32mAcc\x1b[0m ${acc*100}%
      \x1b[31m~\x1b[0m    (  |       |  )    \x1b[31m~\x1b[0m            |\x1b[32mSpd\x1b[0m ${spd} shots 
          [~  ]       [  ~]                |
          |~~|         |~~|                |This bot is great support 
          |  |         |  |                |he have middle characteristics, 
         _<\\/>_       _<\\/>_               |but his buffs can turn the fight 
        /_====_\\     /_====_\\              |in his favor.
    `
  }

}

