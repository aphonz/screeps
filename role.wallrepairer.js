var roleBuilder = require('role.builder');

module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
        creep.memory.StorageId = '57f1fc69c4cc49673c559fb2'
        // if creep is trying to repair something but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }
        else if (creep.memory.working != true || false) {
            // switch state
            creep.memory.working = false;
        }

        // if creep is supposed to repair something
        if (creep.memory.working == true) {
            // find all walls in the room
            var walls = creep.room.find(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_WALL|| s.structureType == STRUCTURE_RAMPART
        });

            var target = undefined;

            // loop with increasing percentages
            for (let percentage = 0.0001; percentage <= 1; percentage = percentage + 0.0001){
                // find a wall with less than percentage hits

                // for some reason this doesn't work
                // target = creep.pos.findClosestByPath(walls, {
                //     filter: (s) => s.hits / s.hitsMax < percentage
                // });

                // so we have to use this
                target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (s) => s.structureType == STRUCTURE_WALL &&
                    s.hits / s.hitsMax < percentage
            });

                // if there is one
                if (target != undefined) {
                    // break the loop
                    break;
                }
            }

            // if we find a wall that has to be repaired
            if (target != undefined) {
                // try to repair it, if not in range
                if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(target);
                }
            }
            // if we can't fine one
            else {
                // look for construction sites
                roleBuilder.run(creep);
            }
        }
        // if creep is supposed to harvest energy from source
        else {
            
            var source2 = Game.getObjectById(creep.memory.StorageId);
			if(creep.withdraw(source2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
				creep.moveTo(source2);
			}
            //var source = creep.pos.findClosestByPath(FIND_SOURCES, {
             //       filter: (s) => s.energy > 0
        }
                    
    }
};