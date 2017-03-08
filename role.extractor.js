var roleExtractor = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if (!creep.memory.home){
            var home = creep.room.name;
            creep.memory.home = home;
        }
        // Go home
        if (creep.room.name != creep.memory.home){
            creep.meory.role1 = creep.memory.role;
            creep.memory.role = "moveFlag"
        }
        var flag = Game.flags['extractor1'];
		// travel to flag
		var pos1 = creep.pos
		var pos2 = flag.pos
        // source hunter AI
        if (!creep.memory.source) {
            //var source = creep.pos.findClosestByRange(FIND_MINERAL);
			//creep.memory.source = source.id;
			creep.memory.source = '579fab84b1f02a3b0cff008e'
        }
        if (!creep.memory.harvesting) {
            creep.memory.harvesting = false;
        }

        if (creep.carry.H > 20) {
           creep.memory.harvesting = true;
	    }
	    else{
	       creep.memory.harvesting = false;
        }

	    if(creep.memory.harvesting === true) {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_TERMINAL)     }
            });
		
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }         
			
		}
		if(creep.memory.harvesting === false ) {
		    if (!pos1.isEqualTo(pos2)) {
			creep.moveTo(flag.pos);
		    }
			var source = Game.getObjectById(creep.memory.source);
			if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source);
			}
		}
       
	}
};

module.exports = roleExtractor;