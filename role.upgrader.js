var roleUpgrader = {

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
	        // Kill the Useless FUCKS
	        if (creep.ticksToLive < 50) {
	           // creep.log("Bai Bai " + creep.ticksToLive)
	            creep.suicide()
	        }
            //Harvest
            if(creep.carry.energy < creep.carryCapacity) {
				var source = Game.getObjectById(creep.memory.source);
				if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source);
				}
            //if(creep.harvest(creep.memory.source.pos) == ERR_NOT_IN_RANGE){
            //    creep.moveTo(creep.memory.source.)
            }
        
             //   if (creep.memory.source === null) {
            //    creep.memory.source = creep.room.find(FIND_SOURCES);
            //}
            //if(creep.carry.energy < creep.carryCapacity) {
            //    if(creep.harvest(creep.memory.source) == ERR_NOT_IN_RANGE){
            //        creep.moveTo(creep.memory.source)
            //    }
            //}



        }
	}
};

module.exports = roleUpgrader;