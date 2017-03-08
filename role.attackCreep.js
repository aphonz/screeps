var roleAttackCreep = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // source hunter AI
        //var targetStructure = creep.room.find(FIND_HOSTILE_STRUCTURES);
        var targetScreeps = creep.room.find(FIND_HOSTILE_CREEPS);
        //var targetTowers = creep.room.find(FIND_HOSTILE_STRUCTURES_TOWERS);
        if(targetScreeps.length > 0) {
            focusedtarget = creep.pos.findClosestByRange(targetScreeps)
            //creep.say(focusedtarget.id)
            if(creep.attack(focusedtarget) == ERR_NOT_IN_RANGE) {
                creep.moveTo(focusedtarget);
            }
        }
        
        //if(targetStructures.length > 0) {
            //focusedtarget = creep.pos.findClosestByRange(targets)
            focusedtarget =  Game.getObjectById('589ec7afca61ae4f6b28cd3f')
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

module.exports = roleAttackCreep;