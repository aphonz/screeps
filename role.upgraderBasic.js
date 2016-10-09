var roleUpgraderBasic = {

    /** @param {Creep} creep **/
    run: function(creep) {
		if (!creep.memory.source) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
			creep.memory.source = source.id;
        }

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
	    }
	    if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.upgrading = true;
	    }

	    if(creep.memory.upgrading === true) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
               creep.moveTo(creep.room.controller);
            }
            //if (creep.memory.controler === null) {
            //    creep.memory.controler = creep.room.controller;
            //}

            //if(creep.upgradeController(creep.memory.controler) == ERR_NOT_IN_RANGE){
            //    creep.moveTo(creep.memory.controler)
            //}
        }
        else {
            if(creep.carry.energy < creep.carryCapacity) {
				var source = Game.getObjectById(creep.memory.source);
				if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source);
				}
            }
        }
	}
};

module.exports = roleUpgraderBasic;