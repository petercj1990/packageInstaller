(function (){

	function installer(arg1){
		//console.log('running test with: ', arg1);
		if (arg1 == undefined){
			return false;
		};
		var hierarchy = [];
		var packNum = 0;
		for(var index in arg1){
			var packageVal =  arg1[index].split(": ");
			hierarchy[packNum] =  {package: packageVal[0], dep: packageVal[1], visited: false};
			
			packNum++;
		}
		var final = topoSort(hierarchy);
		
		var trimmed = final.substring(0, final.length -2);
		return trimmed;
	}
	function topoSort(deps){
		var route = "";
		console.log('number of deps ',deps.length);
		for (var index in deps){
			if(deps[index].visited === false){
				route  += sortReccursion(deps, route, index);
				route += ", ";
			}
		}
		return route;

	}
	function sortReccursion(verticies, route, i){
		console.log('recurring', route, verticies);
		if (verticies[i].visited === true) {
			console.log('looping deps');
			return false;
		};
		verticies[i].visited = true;
		for(var x in verticies){
			console.log('i check the whole stack', verticies[x].package);
			if(verticies[i].dep === verticies[x].package ){
				console.log('heres that boolshiz', verticies[i].dep);;;;
				return sortReccursion(verticies, route, x);
			}
		}
		console.log('i end the reccursion: ', verticies[i].package);
		return verticies[i].package;
	}
	module.exports = {
		installer: installer,
		topoSort: topoSort,
		sortReccursion: sortReccursion
	}
})()