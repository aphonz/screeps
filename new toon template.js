var roleClaim = {

    /** @param {Creep} creep **/
    // set Home 
    run: function(creep) {
        if (!creep.memory.home){
            var home = creep.room.name;
            creep.memory.home = home;
        }
        // Go home
        if (creep.room.name != creep.memory.home){
            creep.meory.role1 = creep.memory.role;
            creep.memory.role = "moveFlag"
        }
    

		
	}
};

module.exports = roleClaim;