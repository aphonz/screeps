var roleAttack = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // source hunter AI
        var targetStructure = creep.room.find(FIND_HOSTILE_STRUCTURES);
        //var targetScreeps = creep.room.find(FIND_HOSTILE_CREEPS);
        //var targetTowers = creep.room.find(FIND_HOSTILE_STRUCTURES_TOWERS);
        //if(targetScreeps.length > 0) {
          //  focusedtarget = creep.pos.findClosestByRange(targetScreeps)
            //creep.say(focusedtarget.id)
            //if(creep.attack(focusedtarget) == ERR_NOT_IN_RANGE) {
              //  creep.moveTo(focusedtarget);
            //}
        //}
        
        //if(targetStructures.length > 0) {
            focusedtarget = creep.pos.findClosestByRange(targetStructure)
            //focusedtarget =  Game.getObjectById('589d6c47d19040a10bf18ab2')
            //creep.say(focusedtarget.id)
            if(creep.attack(focusedtarget) == ERR_NOT_IN_RANGE) {
                creep.moveTo(focusedtarget);
            }
        //}
       // else {
       //     creep.moveTo([20],[20]);
        //}
	}
};

module.exports = roleAttack;