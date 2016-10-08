var roleMinerP2 = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // source hunter AI
         if (!creep.memory.source) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
			creep.memory.source = source.id;
        }
		 if (!creep.memory.container) {
            var container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER
            });
			creep.memory.container = container.id;
        }
		if(creep.carry.energy == 0) {
            creep.memory.mineing = false;
	    }
	    if(!creep.memory.mineing && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.mineing = true;
	    }

	    if(creep.memory.mineing === true) {
            var target = Game.getObjectById(creep.memory.container);		        		           
            if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(target);          			           
			}
		}
		if(creep.memory.mineing === false ) {
			var source = Game.getObjectById(creep.memory.source);
			if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source);
			}                                     
        }
    }
};

module.exports = roleMinerP2;

