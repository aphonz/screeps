var spawnscript = {
    var harvesters = _.filter(Game.creeps, (creep) = > creep.memory.role == 'Harvester'
)
;
console.log('Harvesters: ' + harvesters.length);
var upgraders = _.filter(Game.creeps, (creep) = > creep.memory.role == 'Upgrader'
)
;
console.log('Upgraders: ' + upgraders.length);
var builders = _.filter(Game.creeps, (creep) = > creep.memory.role == 'Builder'
)
;
console.log('Builders: ' + builders.length);
var buildTargets = creep.room.find(FIND_CONSTRUCTION_SITES)
var repairers = _.filter(Game.creeps, (creep) = > creep.memory.role == 'Repairer'
)
;
console.log('repairers ' + repairers.length);
var wallRepairers = _.filter(Game.creeps, (creep) = > creep.memory.role == 'wallRepairer'
)
;
console.log('wallRepairers ' + wallRepairers.length);

if (harvesters.length < 1) {
    var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: 'Harvester'});
    console.log('Spawning new harvester: ' + newName);
}
else if (upgraders.length < 3) {
    var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'Upgrader'});
    console.log('Spawning new Upgrader: ' + newName);
}
else if (repairers.length < 2) {
    var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, MOVE, CARRY, MOVE], undefined, {role: 'Repairer'});
    console.log('Spawning new Repairer: ' + newName);
}
else if (wallRepairers.length < 1) {
    var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, MOVE, CARRY, MOVE], undefined, {role: 'wallRepairer'});
    console.log('Spawning new wallRepairer: ' + newName);
}
else if (builders.length < 1) {
    if (buildTargets.length != 0) {
        var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE, MOVE], undefined, {role: 'Builder'});
        console.log('Spawning new Builder: ' + newName);
    }
    else if (upgraders.length < 5) {
        var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: 'Upgrader'});
        console.log('Spawning new Upgrader: ' + newName);
    }
}
}