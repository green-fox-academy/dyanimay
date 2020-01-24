//kell az új db tábla (heroId, actionType és timestamp) és ennek a segítségével UPDATEelni kell már meglévő táblákat: heroInfo és dungeonInstanceben a scouted obstaclet kell updatelni)

//olyan middleware kell mint az authentication, de azután fog szerepelni mint 2. middleware

const { DungeonInstance } = require('../models/dungeonInstanceModel');
const { Hero } = require('../models/heroModel');

class idleHeroUpdateService {
  constructor(conn) {
    this.conn = conn;
  }

  //resting
  characterRest(){
    
  }

}