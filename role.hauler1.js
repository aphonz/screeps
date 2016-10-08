var roleHauler = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // Add flag Location to memory
		creep.memory.containerId = '57eeea19edf777b251780953'
		creep.memory.StorageId = '57f1fc69c4cc49673c559fb2'
		if(creep.carry.energy == 0) {
            creep.memory.hauling = false;
	    }
	    if(!creep.memory.hauling && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.hauling = true;
	    }
		if(creep.memory.hauling === true ) {
			var source = Game.getObjectById(creep.memory.StorageId);
			if(creep.transfer(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source);
			}
		}
		if(creep.memory.hauling === false ) {
			var source2 = Game.getObjectById(creep.memory.containerId);
			if(creep.withdraw(source2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
					creep.moveTo(source2);
			}
		}
		
	           
	}
};

module.exports = roleHauler;