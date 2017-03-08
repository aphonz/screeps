var roleUpgrader = require('role.upgrader');
var rolebuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
		if (!creep.memory.source) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
			creep.memory.source = source.id;
        }
         if (!creep.memory.home){
            var home = creep.room.name;
            creep.memory.home = home;
        }
        // Go home
        if (creep.room.name != creep.memory.home){
            creep.meory.role1 = creep.memory.role;
            creep.memory.role = "moveFlag"
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
            // Kill the Useless FUCKS
            if (creep.ticksToLive < 50) {
                //creep.log("Bai Bai " + creep.ticksToLive)
                creep.suicide()
            }
            //Harvest
            //    if (creep.memory.source === null) {
            //        creep.memory.source = creep.room.find(FIND_SOURCES);
            //    }
            //    if (creep.carry.energy < creep.carryCapacity) {
            //        if (creep.harvest(creep.memory.source) == ERR_NOT_IN_RANGE) {
            //            creep.moveTo(creep.memory.source)
            //        }
            //    }
            var source = Game.getObjectById(creep.memory.source);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
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

module.exports = rolebuilder;