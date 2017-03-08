var roleMiner = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // source hunter AI
        if (!creep.memory.home){
            var home = creep.room.name;
            creep.memory.home = home;
        }
        // Go home
        if (creep.room.name != creep.memory.home){
            creep.meory.role1 = creep.memory.role;
            creep.memory.role = "moveFlag"
        }
        if (creep.memory.source === null) {
            creep.memory.source = creep.room.find.pos(FIND_SOURCES);
        }

        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
                //if(creep.harvest(creep.memory.source.pos) == ERR_NOT_IN_RANGE){
                //    creep.moveTo(creep.memory.source.)
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType ==  structure.structureType == STRUCTURE_CONTAINER || &&
                structure.* < structure.energyCapacity;
        }
        });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
            else{
                creep.moveTo([8],[11]);
            }
        }
    }
};

module.exports = roleHarvester;


// filter: (s) => s.hits / s.hitsMax < percentage
