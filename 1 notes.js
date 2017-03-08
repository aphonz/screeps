main code depreciated 7/3/17
//Code Deprciciated 
        // Room 1 
		if(creep.memory.role == 'harvesterBasic') {
		    roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgraderBasic') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builderBasic') {
            roleBuilder.run(creep);
        }
		if(creep.memory.role == 'repairerBasic') {
            roleRepairer.run(creep);
		}
		if (creep.memory.role == 'wallRepairerBasic') {
		    roleWallRepaierer.run(creep);
		}
		
        // Room 2
        if(creep.memory.role == 'harvesterBasic1') {
		   roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgraderBasic1') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builderBasic1') {
            roleBuilder.run(creep);
        }
		if(creep.memory.role == 'repairerBasic1') {
            roleRepairer.run(creep);
		}
		if (creep.memory.role == 'wallRepairerBasic1') {
		    roleWallRepaierer.run(creep);
		}
        // Room 3 
        if(creep.memory.role == 'harvesterBasic2') {
		   roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgraderBasic2') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builderBasic2') {
            roleBuilder.run(creep);
        }
		if(creep.memory.role == 'repairerBasic2') {
            roleRepairer.run(creep);
		}
		if (creep.memory.role == 'wallRepairerBasic2') {
		    roleWallRepaierer.run(creep);
		}
        //Code Depreciated -- Fin
        

// Room 1
//var roleHarvester = require('role.harvesterBasic');
//var roleUpgrader = require('role.upgraderBasic');
//var roleBuilder = require('role.builderBasic');
//var roleRepairer = require('role.repairerBasic');
// Room 2
//var roleHarvester = require('role.harvesterBasic1');
//var roleUpgrader = require('role.upgraderBasic1');
//var roleBuilder = require('role.builderBasic1');
//var roleRepairer = require('role.repairerBasic1');
// Room 3
//var roleHarvester = require('role.harvesterBasic2');
//var roleUpgrader = require('role.upgraderBasic2');
//var roleBuilder= require('role.builderBasic2');
//var roleRepairer = require('role.repairer');
//var roleDefence = require('role.defence')
// var spawnScript = require('spawn.script');
// var towerDefence = require('tower.defence');
// var towerOffence = require('tower.offence');




        Run code
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
        