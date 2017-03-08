// Options
var logCreepActive = true
var remoteCreepHarvest = true




var rolesList = ['harvester','upgrader',"builder","repair","wallrepairer","extractor","extractor2","MoveFlag","Attack","claim"]
var len = rolesList.length;
for (var i = 0; i < len; i++) {
    var role = rolesList[i];
    //console.log(role);
    var sliceRole = role.slice(0, 1)
    var roleName = 'role' + (sliceRole.toUpperCase() + role.slice(1))
    //console.log(roleName)
    var roleFile = 'role.' + role;
  //  console.log(roleFile);
    var roleName = require(roleFile); 


//for(var name in Game.creeps) {
//    var creep = Game.creeps[name];
    //console.log(role)
    // var ("role" + value) = require(("role," + value));
}


// Master Roles
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepair = require('role.repair');
var roleWallrepairer = require('role.wallrepairer');
var roleExtractor = require('role.extractor');
var roleExtractor2 = require('role.extractor2');
var roleMoveFlag = require('role.MoveFlag');
var roleAttack = require('role.Attack');
var roleAttackCreep = require('role.attackCreep');
var roleClaim = require('role.claim');
var towerDefence = require('tower.defence')

// FIX REPAIR OR REPAIERER
var roleRepairer = require('role.repair');
module.exports.loop = function () {

    // Cleaning scripts

    if (Game.time % 100 === 0) {
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]){
                delete Memory.creeps[name];
                console.log('Getting rid of shit bloke ' + name);
            }
        }
    }
    //tick tock
    if (Game.time % 400 == 0) {
        console.log("Ticky")
    }
    if (Game.time % 800 == 0) {
        console.log('Tocky')
    }
    // Spawn Finder / room info
    for (var i in Game.spawns) {
        var spawnName = i;
        var spawnRoom = Game.spawns[i].room;
        console.log(spawnRoom);
        console.log(" Spawn Names : " + i + ' Room name  :' + Game.spawns[i].room  );
    }


    // assigning roles
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
         var roleCreep = creep.memory.role;
         var sliceRoleCreep = roleCreep.slice(0, 1);
         var runMe = 'role' + (sliceRoleCreep.toUpperCase() + roleCreep.slice(1))+".run(creep)";
         runMe
      //runcode
      if(creep.memory.role == 'Builder') {
           creep.memory.role = "builder";
        }
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepair.run(creep);
        }
        if(creep.memory.role == 'wallRepairer') {
            roleWallrepairer.run(creep);
        }
        if(creep.memory.role == 'extractor') {
            roleExtractor.run(creep);
        }
        if(creep.memory.role == 'extractor2') {
            roleExtractor2.run(creep);
        }
         if(creep.memory.role == 'moveFlag') {
            roleMoveFlag.run(creep);
        }
         if(creep.memory.role == 'attack') {
            roleAttack.run(creep);
        }
         if(creep.memory.role == 'attackCreep') {
            roleAttackCreep.run(creep);
        }
         if(creep.memory.role == 'claim') {
            roleClaim.run(creep);
         }
    }
    //var tower = Game.getObjectById('578623a67cc1ee27207a0c7d');
    //towerDefence.run(tower);

    // spawning check
//    if (creep.length < 20) {
//       console.log('fuck');
//       spawnscript.run
//    }
    //TEMP SPAWNING SHIT IS DA SHIT CODES WAYY UP IN SHIT LAND OF FUCKED
    
    
	if (Game.time % 10 == 0) {
	    // Room ID's
	    var roomOneId = "W9N89"
	    var roomTwoId = "W9N88"
	    var roomThreeId = "W9N86"
	    var roomFourId = "W8N86"
	    // Room Array and for loop?
	    // Room one
	    
		var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.home == roomOneId);
		var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.home == roomOneId);
		var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.home == roomOneId);
		var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.home == roomOneId);
		var wallRepairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.home == roomOneId);
		var Extractors = _.filter(Game.creeps, (creep) => creep.memory.role == 'extractor' && creep.memory.home == roomOneId);
	    var Extractors2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'extractor2' && creep.memory.home == roomOneId);
		var attackersSouth = _.filter(Game.creeps, (creep) => creep.memory.role == 'attack');
		var claim = _.filter(Game.creeps, (creep) => creep.memory.role1 == 'claim');
		//Room two
		
		var harvestersBasic = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.home == roomTwoId);
		var upgradersBasic = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.home == roomTwoId);
		var buildersBasic = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.home == roomTwoId);
		var repairersBasic = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.home == roomTwoId);
		var wallRepairersR2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.home == roomTwoId);
		//Room Three
		var harvestersBasic1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.home == roomThreeId);
		var upgradersBasic1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.home == roomThreeId);
		var buildersBasic1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.home == roomThreeId);
		var repairersBasic1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.home == roomThreeId);
		var wallRepairersR3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.home == roomThreeId);
		// Room Four
		var harvestersBasic2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.memory.home == roomFourId);
		var upgradersBasic2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.memory.home == roomFourId);
		var buildersBasic2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.memory.home == roomFourId);
		var repairersBasic2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer' && creep.memory.home == roomFourId);
		var wallRepairersR4 = _.filter(Game.creeps, (creep) => creep.memory.role == 'wallRepairer' && creep.memory.home == roomFourId);
		

        // Show active creeps
        if (logCreepActive == true){
            //room one
            console.log('Room 1 ' + roomOneId);
            console.log('Harvesters        :' + harvesters.length);;
            console.log('Upgaders          :' + upgraders.length);
            console.log('Builders          :' + builders.length);
            console.log('repairers         :' + repairers.length);
            console.log('wallRepairers     :' + wallRepairers.length);
            console.log('Extractors        :' + Extractors.length);
            console.log('Extractors2       :' + Extractors.length);
            console.log('attackersSouth    :' + attackersSouth.length);
            console.log('claimer           :' + claim.length);
            //Room two
            console.log('Room 2 '+ roomTwoId );
            console.log('Harvesters        :' + harvestersBasic.length);;
            console.log('Upgaders          :' + upgradersBasic.length);
            console.log('Builders          :' + buildersBasic.length);
            console.log('repaierers        :' + repairersBasic.length);
            console.log('wallRepairers     :' + wallRepairersR2.length);
            //Room three
            console.log('Room 3 ' + roomThreeId );
            console.log('Harvesters        :' + harvestersBasic1.length);
            console.log('Upgaders          :' + upgradersBasic1.length);
            console.log('Builders          :' + buildersBasic1.length);
            console.log('repaierers        :' + repairersBasic1.length);
            console.log('wallRepairers     :' + wallRepairersR3.length);
            // Room Four
            console.log('Room 4 ' + roomFourId)
            console.log('Harvesters        :' + harvestersBasic2.length);
            console.log('Upgaders          :' + upgradersBasic2.length);
            console.log('Builders          :' + buildersBasic2.length);
            console.log('repaierers        :' + repairersBasic2.length);
            console.log('wallRepairers     :' + wallRepairersR4.length);
            console.log(' ')
            console.log(' ')
            console.log(' ')
        
            
        }
	    //Room 1
        spawnName = 'Spawn1 W9N89';
		if(harvesters.length === 0) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'harvester'});
			console.log('Spawning new harvester: ' + newName + " - " + spawnName);
		}
		if(harvesters.length < 2) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'harvester'});
			console.log('Spawning new harvester: ' + newName + " - " + spawnName);
		}
		else if(upgraders.length < 1) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});
			console.log('Spawning new Upgrader: ' + newName + " - " + spawnName);
		}
		else if(repairers.length < 1) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE], undefined, {role: 'repairer'});
			console.log('Spawning new Repairer: ' + newName + " - " + spawnName);
		}
		else if(wallRepairers.length < 1) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE,MOVE], undefined, {role: 'wallRepairer'});
			console.log('Spawning new wallRepairer: ' + newName + " - " + spawnName);
		}
		else if(builders.length < 1) {
			//if (buildTargets.length != 0){
			var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,CARRY,MOVE,MOVE], undefined, {role: 'builder'});
			console.log('Spawning new builder: ' + newName + " - " + spawnName);
		}
		else if(Extractors.length < 0) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'Extractor'});
			console.log('Spawning new Extractor: ' + newName + " - " + spawnName);
		}
		else if(Extractors2.length < 0) {
			var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,MOVE], undefined, {role: 'Extractor2'});
			console.log('Spawning new Extractor2: ' + newName + " - " + spawnName);
		}
		else if(attackersSouth.length < 0) {
			var newName = Game.spawns.Spawn1.createCreep([MOVE,MOVE,MOVE,TOUGH,TOUGH,MOVE,TOUGH,TOUGH,MOVE,ATTACK,TOUGH,MOVE,MOVE,MOVE], undefined, {role: 'moveFlag',role1: 'attack',flag: 'W9N86' });
			console.log('Spawning new Southen Attacker: ' + newName + " - " + spawnName);
		}
		else if(claim.length < 0) {
			var newName = Game.spawns.Spawn1.createCreep([CLAIM,MOVE], undefined, {role: 'moveFlag',role1: 'claim',flag: 'W9N86' });
			console.log('Claimer: ' + newName + " - " + spawnName);
		}
		
	    // Room 2
		spawnName = 'Spawn2 W9N88';
		if(harvestersBasic.length == 0) {
			var newName = Game.spawns.Spawn2.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
			console.log('Spawning new harvesterBasic: ' + newName + " - " + spawnName);
		}
		else if(harvestersBasic.length < 2) {
			var newName = Game.spawns.Spawn2.createCreep([WORK,CARRY,MOVE,WORK,CARRY,MOVE], undefined, {role: 'harvester'});
			console.log('Spawning new harvesterBasic: ' + newName + " - " + spawnName);
		}
		else if(upgradersBasic.length < 3) {
			var newName = Game.spawns.Spawn2.createCreep([WORK,WORK,WORK,CARRY,MOVE,WORK,CARRY,MOVE,MOVE,WORK], undefined, {role: 'upgrader' });
			console.log('Spawning new UpgraderBasic: ' + newName + " - " + spawnName);
		}
		else if(buildersBasic.length < 1 ) {
			var newName = Game.spawns.Spawn2.createCreep([WORK,WORK,CARRY,MOVE,WORK,CARRY,MOVE], undefined, {role: 'builder' , flag: 'W9N88'});
			console.log('Spawning new BuilderBasic: ' + newName + " - " + spawnName);
        }
        else if(repairersBasic.length < 1 ) {
			var newName = Game.spawns.Spawn2.createCreep([WORK,CARRY,MOVE,WORK,CARRY,MOVE], undefined, {role: 'repair' , flag: 'W9N88'});
			console.log('Spawning new repairerBasic: ' + newName + " - " + spawnName);
        }
        else if(wallRepairersR2.length < 1) {
			var newName = Game.spawns.Spawn2.createCreep([WORK,WORK,CARRY,MOVE,MOVE], undefined, {role: 'wallRepairer'});
			console.log('Spawning new wallRepairer: ' + newName + " - " + spawnName);
		}
        else if(attackersSouth.length < 0) {
			var newName = Game.spawns.Spawn2.createCreep([TOUGH,TOUGH,TOUGH,TOUGH,MOVE,ATTACK,MOVE,ATTACK,ATTACK,MOVE,MOVE], undefined, {role: 'moveFlag',role1: 'attack',flag: 'W9N86' });
			console.log('Spawning new Southen Attacker: ' + newName + " - " + spawnName);
		}
		
	    // Room 3
		spawnName = 'Spawn3 W9N86';
		if(harvestersBasic1.length == 0) {
			var newName = Game.spawns.Spawn3.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester',role1: 'harvester' , flag: 'W9N86'});
			console.log('Spawning new harvesterBasic: ' + newName + " - " + spawnName);
		}
		else if(harvestersBasic1.length < 3) {
			var newName = Game.spawns.Spawn3.createCreep([WORK,CARRY,MOVE,WORK,CARRY,MOVE], undefined, {role: 'harvester',role1: 'harvester' , flag: 'W9N86'});
			console.log('Spawning new harvesterBasic: ' + newName + " - " + spawnName);
		}
		else if(upgradersBasic1.length < 5) {
		    var newName = Game.spawns.Spawn3.createCreep([WORK,WORK,WORK,CARRY,MOVE,WORK,CARRY,MOVE,MOVE], undefined, {role: 'upgrader',role1: 'upgrader', flag: 'W9N86', source: '5873bcf311e3e4361b4d8707' });
			console.log('Spawning new UpgraderBasic: ' + newName + " - " + spawnName);
		}
		else if(buildersBasic1.length < 3 ) {
			var newName = Game.spawns.Spawn3.createCreep([WORK,CARRY,MOVE,WORK,CARRY,MOVE], undefined, {role: 'builder',role1: 'builder' , flag: 'W9N86'});
			console.log('Spawning new BuilderBasic: ' + newName + " - " + spawnName);
        }
        else if(repairersBasic1.length < 1 ) {
			var newName = Game.spawns.Spawn3.createCreep([WORK,CARRY,MOVE], undefined, {role: 'repair',role1: 'repair' , flag: 'W9N86'});
			console.log('Spawning new repairerBasic: ' + newName + " - " + spawnName);
        }
        else if(wallRepairersR3.length < 2) {
			var newName = Game.spawns.Spawn3.createCreep([WORK,WORK,CARRY,MOVE,MOVE], undefined, {role: 'wallRepairer'});
			console.log('Spawning new wallRepairer: ' + newName + " - " + spawnName);
		}
		
	    // Room 4
		spawnName = 'Spawn4 W8N86';
		if(harvestersBasic2.length == 0 ){
			var newName = Game.spawns.Spawn4.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester',role1: 'harvesterBasic2' , flag: 'W8N86'});
			console.log('Spawning new harvesterBasic: ' + newName + " - " + spawnName);
		}
		else if(harvestersBasic2.length < 2 ){
			var newName = Game.spawns.Spawn4.createCreep([WORK,WORK,WORK,CARRY,MOVE,MOVE,WORK,CARRY,MOVE], undefined, {role: 'harvester',role1: 'harvesterBasic2' , flag: 'W8N86'});
			console.log('Spawning new harvesterBasic: ' + newName + " - " + spawnName);
		}
		else if(upgradersBasic2.length < 3 ) {
			var newName = Game.spawns.Spawn4.createCreep([WORK,WORK,WORK,CARRY,MOVE,MOVE,WORK,CARRY,MOVE], undefined, {role: 'upgrader',role1: 'upgraderBasic2', flag: 'W8N86' });
			console.log('Spawning new UpgraderBasic: ' + newName + " - " + spawnName);
		}
		else if(buildersBasic2.length < 1 ) {
			var newName = Game.spawns.Spawn4.createCreep([WORK,WORK,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'builder',role1: 'builder' , flag: 'W8N86'});
			console.log('Spawning new BuilderBasic: ' + newName + " - " + spawnName);
        }
        else if(repairersBasic2.length < 1 ) {
			var newName = Game.spawns.Spawn4.createCreep([WORK,WORK,CARRY,MOVE,CARRY,MOVE], undefined, {role: 'repair',role1: 'repairer' , flag: 'W8N86'});
			console.log('Spawning new repairerBasic: ' + newName + " - " + spawnName);
        }
        else if(wallRepairersR4.length < 2) {
			var newName = Game.spawns.Spawn4.createCreep([WORK,WORK,CARRY,MOVE,MOVE], undefined, {role: 'wallRepairer'});
			console.log('Spawning new wallRepairer: ' + newName + " - " + spawnName);
		}
       // }
//        else if(upgraders.length < 6) {
//            var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY,CARRY,MOVE, MOVE], undefined, {role: 'Upgrader'});
//            console.log('Spawning new Upgrader: ' + newName);
//        }
	
	}
    // TOWER CODE

   // if (Game.spawns.Spawn1.find(FIND_HOSTILE_CREEPS) > 0) {
        //var Towers = 
        
        //for (var Tower in Towers)
    var tower =  Game.getObjectById('58b7d4d535347c3343b4e349');
    var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    //var closestDamagedStructure = tower.room.find(FIND_STRUCTURES, {
    //    filter: (structure) => {
    //        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_TOWER || structure.structureType == STRUCTURE_SPAWN) &&
    //               structure.hits < "500";
    //        }
    //});
    if (closestHostile != 0) {
        tower.attack(closestHostile);
    }
   // else if (closestDamagedStructure > 0) {
    //    tower.repair(closestDamagedStructure[0]);
    //var tower = Game.getObjectById('583262d26d9d3a27380774d0');
    //if (tower) {
        //var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
        //       filter: (structure) = > structure.hits < 500
    //})
        //;
        //if (closestDamagedStructure) {
        //    tower.repair(closestDamagedStructure);
        //}

   //    var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    //    if (closestHostile) {
    //        if (closestHostile.owner = 'Klapaucius') {
    //            tower.attack(closestHostile);
   //         }
    //        else {
    //            tower.attack(closestHostile);
   //         }
    //   }
   // }

  //  if (Game.time % 1000 == 0 ) {
  //      var Terminal = Game.getObjectById('58360202f288a0632bb1d1a3') 
       // Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_HYDROGEN});
    
  //}
    // change supply chain to a mine/dump/collect
    // automated building roles?
    // leveling up command?
}



