var roleClaimP1 = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // Add flag Location to memory
		
		var flag = Game.flags[creep.memory.flag];
		
		// travel to flag
		var pos1 = creep.pos
		var pos2 = flag.pos
		
		if (!pos1.isEqualTo(pos2)) {
			creep.moveTo(flag.pos);
		}	
		
		// Change AI to miner
		else if(creep.memory.flag == 'claim1'){
		    if (!creep.memory.controler) {
		        creep.memory.controler = '576a9c1057110ab231d88700'
                //var controler = creep.room.find(FIND_CONTROLER);
			    //creep.memory.controler = controler.id;
		    }
		    else{
		        var controler = Game.getObjectById(creep.memory.controler);
		        creep.claimController(controler);    
		    } 
		}
		
		
        else {
			(creep.memory.flag = 'claim1') ;
		}           
	}
};

module.exports = roleClaimP1;