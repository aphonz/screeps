var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var rolerepair = require('role.repair');
var rolewallrepair = require('role.wallrepairer');
var rolerampartrepair = require('role.rampartrepairer');
var roleMinerP1 = require('role.minerP1');
var roleMinerP2 = require('role.minerP2');
var roleHauler1 = require('role.hauler1');
var roleHauler = require('role.hauler');
var roleBalancer = require('role.Balancer');
var roleClaimer = require('role.claimP1');
var roleHarvesterBasic = require('role.harvesterBasic');
var roleUpgraderBasic = require('role.upgraderBasic');
var roleBuilderBasic = require('role.builderBasic');
var roleAid = require('role.Aid');
var rolerepairBasic = require('role.repairBasic');
var rolewallrepairBasic = require('role.wallrepairerBasic');

//var roleHarvesterBasic = require('role.harvesterBasic');
//var roleUpgraderBasic = require('role.upgraderBasic');
//var roleBuilderBasic = require('role.builderBasic');
// var spawnScript = require('spawn.script');
// var towerDefence = require('tower.defence');
// var towerOffence = require('tower.offence');

module.exports.loop = function () {

    // Cleaning scripts
	if (Game.time % 100 === 0) {
		for(var name in Memory.creeps) {
			if(!Game.creeps[name]){
				delete Memory.creeps[name];
				// console.log('Getting rid of shit bloke ' + name);
			}
		}
	}
    // assigning roles
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'Builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'Repairer') {
            rolerepair.run(creep);
        }
        if(creep.memory.role == 'wallRepairer') {
            rolewallrepair.run(creep);
        }
        if(creep.memory.role == 'rampartRepairer') {
            rolerampartrepair.run(creep);
        }
		if(creep.memory.role == 'minerP1') {
            roleMinerP1.run(creep);
        }
		if(creep.memory.role == 'minerP2') {
            roleMinerP2.run(creep);
        }
        if(creep.memory.role == 'hauler1') {
            roleHauler1.run(creep);
        }
		if(creep.memory.role == 'hauler') {
            roleHauler.run(creep);
        }
        if(creep.memory.role == 'balancer') {
            roleBalancer.run(creep);
        }
        if(creep.memory.role == 'claimer') {
            roleClaimer.run(creep);
        }
        if(creep.memory.role == 'harvesterBasic') {
            roleHarvesterBasic.run(creep);
        }
        if(creep.memory.role == 'upgraderBasic') {
            roleUpgraderBasic.run(creep);
        }
        if(creep.memory.role == 'BuilderBasic') {
            roleBuilderBasic.run(creep);
        }
        if(creep.memory.role == 'aid') {
            roleAid.run(creep);
        }
        if(creep.memory.role == 'RepairerBasic') {
            rolerepairBasic.run(creep);
        }
        if(creep.memory.role == 'wallRepairerBasic') {
            rolewallrepairBasic.run(creep);
        }
    }
    //var tower = Game.getObjectById('578623a67cc1ee27207a0c7d');
    //towerDefence.run(tower);

    //TEMP SPAWNING SHIT IS DA SHIT CODES WAYY UP IN SHIT LAND OF FUCKED
	if (Game.time % 20 == 0) {
	    var w13s32Store = '57f1fc69c4cc49673c559fb2';
	    console.log('-- New Cycle --')
	    
		var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
		console.log('Harvesters: ' + harvesters.length);;
		var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
		console.log('Upgaders: ' + upgraders.length);
		var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'Builder');
		console.log('Builders: ' + builders.length);
		var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'Repairer');
		console.log('repairers: ' + repairers.length);
		var wallRepairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer');
		console.log('wallRepairers: ' + wallRepairers.length);
		var rampartRepairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'rampartRepairer');
		console.log('rampartRepairers: ' + wallRepairers.length);
		var miner1 = _.filter(Game.creeps, (creep) => creep.memory.flag == 'Miner1');
		console.log('miner 1 is ' + miner1.length);
		var haulers1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler1');
		console.log('haulers1: ' + haulers1.length);
		var miner2 = _.filter(Game.creeps, (creep) => creep.memory.flag == 'Miner2');
		console.log('miner 2 is ' + miner2.length);
		var haulers = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
		console.log('haulers2: ' + haulers.length);
		var balancers = _.filter(Game.creeps, (creep) => creep.memory.role == 'balancer');
		console.log('balancer: ' + balancers.length);
		var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
		console.log('claimer: ' + claimers.length);
		var harvestersBasic = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvesterBasic');
		console.log('HarvestersBasic: ' + harvestersBasic.length);;
		var upgradersBasic = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgraderBasic');
		console.log('UpgadersBasic: ' + upgradersBasic.length);
		var buildersBasic = _.filter(Game.creeps, (creep) => creep.memory.role == 'BuilderBasic');
		console.log('BuildersBasic: ' + buildersBasic.length);
        var repairssBasic = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'RepairerBasic');
		console.log('repairersBasic: ' + repairssBasic.length);
		var wallRepairersBasic = _.filter(Game.creeps, (creep) => creep.memory.role2 == 'wallRepairerBasic');
		console.log('wallRepairersBasic: ' + wallRepairersBasic.length);

		if(harvesters.length === 0) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
			console.log('Spawning new harvester: ' + newName);
		}
		else if(balancers.length < 1) {
			var newName = Game.spawns.Spawn1.createCreep([CARRY,CARRY,MOVE], undefined, {role: 'balancer', StorageId: '57f1fc69c4cc49673c559fb2', upgradeContainer: '57f0263b7ac830486d65d391' });
			console.log('Spawning new balancer: ' + newName);
		}
		else if(harvesters.length < 1) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE,WORK,WORK,CARRY,CARRY,MOVE], undefined, {role: 'harvester'});
			console.log('Spawning new harvester: ' + newName);
		}
		else if(miner1.length === 0) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], undefined, {role: 'minerP1', flag: 'Miner1'});
			console.log('Spawning Miner 1: ' + newName);
		}
		else if(haulers1.length < 1) {
			var newName = Game.spawns.Spawn1.createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'hauler1'});
			console.log('Spawning Hauler1: ' + newName);
		}
		else if(miner2.length === 0) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,CARRY,MOVE], undefined, {role: 'minerP1', flag: 'Miner2'});
			console.log('Spawning Miner 2: ' + newName);
		}		
		else if(upgraders.length < 1) {
			var newName = Game.spawns.Spawn1.createCreep([MOVE,MOVE,MOVE,CARRY,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK], undefined, {role: 'upgrader', upgradeContainer:'57f0263b7ac830486d65d391'});
			console.log('Spawning new Upgrader: ' + newName);
		}
		else if(repairers.length < 2) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,CARRY,MOVE,WORK,CARRY,MOVE], undefined, {role: 'Repairer'});
			console.log('Spawning new Repairer: ' + newName);
		}
		else if(wallRepairers.length < 1) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE,WORK,WORK,CARRY,MOVE,WORK,CARRY,MOVE], undefined, {role: 'wallRepairer'});
			console.log('Spawning new wallRepairer: ' + newName);
		}
		else if(haulers.length < 2) {
			var newName = Game.spawns.Spawn1.createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'hauler'});
			console.log('Spawning Hauler: ' + newName);
		}
		else if(balancers.length < 4) {
			var newName = Game.spawns.Spawn1.createCreep([CARRY,CARRY,MOVE,CARRY,CARRY,MOVE], undefined, {role: 'balancer', StorageId: '57f1fc69c4cc49673c559fb2' });
			console.log('Spawning new balancer: ' + newName);
		}
		else if(builders.length < 1 ) {
			//if (buildTargets.length != 0){
			var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE,WORK,WORK,CARRY,MOVE], undefined, {role: 'Builder'});
			console.log('Spawning new Builder: ' + newName);
        }
        else if(wallRepairers.length <1) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE,WORK,WORK,CARRY,MOVE], undefined, {role: 'rampartRepairer'});
			console.log('Spawning new rampartRepairer: ' + newName);
		}
		else if(claimers.length <0) {
			var newName = Game.spawns.Spawn1.createCreep([CLAIM,MOVE], undefined, {role: 'claimer', flag: 'ExitEast'});
			console.log('Spawing clamer: ' + newName);
		}
		else if(harvestersBasic.length < 1) {
			var newName = Game.spawns.Spawn2.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvesterBasic'});
			console.log('Spawning new harvesterBasic: ' + newName);
		}
		else if(upgradersBasic.length < 2) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE,WORK,WORK,CARRY,CARRY,MOVE], undefined, {role2: 'upgraderBasic', role: 'aid' , flag: 'ExitEast'});
			console.log('Spawning new UpgraderBasic: ' + newName);
		}
		else if(buildersBasic.length < 1 ) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE,WORK,WORK,CARRY,CARRY,MOVE], undefined, {role2: 'BuilderBasic', role: 'aid' , flag: 'ExitEast'});
			console.log('Spawning new BuilderBasic: ' + newName);
        }
		else if(repairssBasic.length < 1) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE,WORK,WORK,CARRY,CARRY,MOVE], undefined, {role2: 'RepairBasic', role: 'Aid'});
			console.log('Spawning new Baisc Repair: ' + newName);
		}
		else if(wallRepairersBasic.length < 1) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE,MOVE,WORK,WORK,CARRY,CARRY,MOVE], undefined, {role2: 'wallRepairerBasic', role: 'Aid'});
			console.log('Spawning new wallRepairerBasic: ' + newName);
		}
		
		// var buildTargets = room(W13S32).find(FIND_CONSTRUCTION_SITES)ReferenceError: room is not defined
//        else if(upgraders.length < 6) {
//            var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY,CARRY,MOVE, MOVE], undefined, {role: 'Upgrader'});
//            console.log('Spawning new Upgrader: ' + newName);
//      	}
//		}
	}
    // TOWER CODE
    var tower = Game.getObjectById('57ef5f84a68b96b76da0734a');
    if (tower) {
        //var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
         //       filter: (structure) = > structure.hits < structure.hitsMax
    //})
        //;
        //if (closestDamagedStructure) {
        //    tower.repair(closestDamagedStructure);
        //}

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            tower.attack(closestHostile);
       }
    }
    var tower = Game.getObjectById('57f38c63dcd7112e100cdee5');
    if (tower) {
    var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            tower.attack(closestHostile);
       }
    }
    // change supply chain to a mine/dump/collect
    // automated building roles?
    // leveling up command?
}