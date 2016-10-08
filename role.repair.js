var roleBuilder = require('role.builder');

module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
//		if (!creep.memory.source) {
//            var source = creep.pos.findClosestByRange(FIND_SOURCES);
//			creep.memory.source = source.id;
//        }
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
            // find closest structure with less than max hits
            // Exclude walls because they have way too many max hits and would keep
            // our repairers busy forever. We have to find a solution for that later.
            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL
        });

            // if we find one
            if (structure != undefined) {
                // try to repair it, if it is out of range
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure);
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

            if(creep.carry.energy < creep.carryCapacity) {
                var source2 = Game.getObjectById(creep.memory.StorageId);
			    if(creep.withdraw(source2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source2);
		    	}
            //  var source = Game.getObjectById(creep.memory.source);
			//	if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
			//		creep.moveTo(source);
			//	}
			}
		}                  
    }
};