var roleMinerP1 = {

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
		
        else {
			(creep.memory.role = 'minerP2') ;
		}           
	}
};

module.exports = roleMinerP1;