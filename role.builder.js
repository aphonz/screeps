var roleUpgrader = require('role.upgrader');
var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        creep.memory.StorageId = '57f1fc69c4cc49673c559fb2'
		if (!creep.memory.source) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
			creep.memory.source = source.id;
        }

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
        else {

//            var source = Game.getObjectById(creep.memory.source);
//            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
//                creep.moveTo(source);
            var source2 = Game.getObjectById(creep.memory.StorageId);
			if(creep.withdraw(source2, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			    creep.moveTo(source2);
			}
        
        }
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if (targets.length < 1 ) {
           roleUpgrader.run(creep);
        }
        else {
            creep.memory.upgrading = 'no';
        }
    }
};

module.exports = roleBuilder;