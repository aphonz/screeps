var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // source hunter AI
        if (!creep.memory.source) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
			creep.memory.source = source.id;
        }
        
		if(creep.carry.energy == 0) {
            creep.memory.harvesting = false;
	    }
	    if(!creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.harvesting = true;
	    }

	    if(creep.memory.harvesting === true) {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_TOWER || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                    }
            });
		
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
			else{
			creep.moveTo([35],[29]);
            
			}
		}
		if(creep.memory.harvesting === false ) {
			var source = Game.getObjectById(creep.memory.source);
			if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source);
			}
		}
        else{
			creep.moveTo([35],[29]);
            
        }
	}
};

module.exports = roleHarvester;