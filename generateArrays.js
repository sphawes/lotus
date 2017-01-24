
	var plants = [];
	
	for(var i = 0; i<nodesObj.nodes.length; i++){
		var currentNodePlant = nodesObj.nodes[i].plant;
		if (plants.includes(currentNodePlant) == false){
			plants.push(currentNodePlant);
		}
	}
	
	
	//Create "plantsByKind" matrix where the first index indicates plant, and the second indicates the number node that has that plant
	
	var plantsByKind = [];
	for(var i = 0; i<plants.length; i++){
		plantsByKind[i] = new Array();
	}
	
	for(var i = 0; i<plants.length; i++){
		for(var j = 0; j<nodesObj.nodes.length; j++){
			if (plants[i] == nodesObj.nodes[j].plant){
				plantsByKind[i].push(nodesObj.nodes[j]);
			}
		}
	}
