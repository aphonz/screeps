var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // source hunter AI
        if (!creep.memory.upgradeContainer){
            (creep.memory.upgradeContainer = '57f0263b7ac830486d65d391');
        }
		if(creep.carry.energy == 0) {
            creep.memory.harvesting = false;
	    }
	    if(!creep.memory.harvesting && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.harvesting = true;
	    }

	    if(creep.memory.harvesting === true) {
	        var upgradeContainer = Game.getObjectById(creep.memory.upgradeContainer)
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
            else {
                if (creep.transfer(upgradeContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(upgradeContainer);
                }
                else{
			    creep.moveTo([35],[29]);
            
			    }
            }
            
			
		}
		if(creep.memory.harvesting === false ) {
		    var source2 = Game.getObjectById(creep.memory.StorageId);
			if(creep.withdraw(source2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			    creep.moveTo(source2);
			}
		}
        else{
			creep.moveTo([35],[29]);
            
        }
	}
};

module.exports = roleHarvester;