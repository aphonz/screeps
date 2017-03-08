var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // source hunter AI
        if (!creep.memory.source) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
			creep.memory.source = source.id;
        }
        if (!creep.memory.home){
            var home = creep.room.name;
            creep.memory.home = home;
        }
        if (creep.room.name != creep.memory.home){
            creep.meory.role1 = creep.memory.role;
            creep.memory.role = "moveFlag"
        }
        if (!creep.memory.Wait) {
            var wait = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_SPAWN);
                    creep.memory.Wait = wait.pos;
                }
            })
        }
		if(creep.carry.energy == 0) {
            creep.memory.harvesting = false;
	    }
	    if(!creep.memory.harvesting && creep.carry.energy== creep.carryCapacity) {
	        creep.memory.harvesting = true;
	    }

	    if(creep.memory.harvesting === true) {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_TOWER|| structure.structureType == STRUCTURE_STORAGE || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                    }
            });
		
            if(targets.length > 0) {
                focusedtarget = creep.pos.findClosestByRange(targets)
                if(creep.transfer(focusedtarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(focusedtarget);
                }
            }
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTAINER ) &&
                            structure.energy < structure.energyCapacity;
                    }
            });
            if (targets.len > 0) {
                focusedtarget = creep.pos.findClosestByRange(targets)
                if(creep.transfer(focusedtarget, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(focusedtarget);
                }
            }
			else{
			    creep.moveTo([17],[29]);
			}
	    }
        // Kill the Useless FUCKS
	    if (creep.ticksToLive < 50){
	        //creep.say("Bai Bai " + creep.ticksToLive)
	        creep.suicide()
	    }
		if(creep.memory.harvesting === false ) {
			var source = Game.getObjectById(creep.memory.source);
			if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source);
			}
		}
        else{
			creep.moveTo(creep.memory.Wait);
            
        }
	}
};

module.exports = roleHarvester;