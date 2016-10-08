var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        creep.memory.StorageId = '57f1fc69c4cc49673c559fb2'
        creep.memory.upgradeContainer = '57f0263b7ac830486d65d391'
		if (!creep.memory.source) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
			creep.memory.source = source.id;
        }
        var upgradeCan = Game.getObjectById(creep.memory.upgradeContainer);
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
            if(creep.withdraw(upgradeCan, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			    var source2 = Game.getObjectById(creep.memory.StorageId);
			    if(creep.withdraw(source2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				    	creep.moveTo(source2);
			    }
			}
		}
 //           if(creep.carry.energy < creep.carryCapacity) {
//				var source = Game.getObjectById(creep.memory.source);
//				if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
//					creep.moveTo(source);
//				}
//        }
	}
};

module.exports = roleUpgrader;