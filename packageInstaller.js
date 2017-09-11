(function (){

	function installer(arg1){
		console.log('running test with: ', arg1);
		if (arg1 == undefined){
			return false;
		};
		var hierarchy = [];
		var packNum = 0;
		for(var package in arg1){
			var packageVal =  package.split(":");
			console.log('here be your package val', packageVal);
			hierarchy[packNum] =  {pakage: packageVal[0], dep: packageVal[1], visited: false};
			
			packNum++;
		}
		console.log(hierarchy);
		return topoSort(hierarchy);
	}
	function topoSort(deps){

		for(var x = 0; x < deps.lenght; x++){
			deps[x].visited = false;
		}
		var route = "";
		for (var x = 0; x < deps.lenght; x++){
			if(deps[x].visited===false){
				sortReccursion(deps, route, x);
			}
			console.log()
			route += deps[x].package;
		}
		console.log(route);

		return route;
	}
	function sortReccursion(dependencies, route, i){
		console.log('recurring', route, i);
		if(dependencies[i].visited === true){
			return false;
		}
		dependencies[i].visited = true;
		if(dependencies[i].dep = ""){
			return true;
		}
		for(var x = 0; x < dependencies.lenght; x++){
			if(dependencies[i].dep === dependencies[x].package ){
				return sortReccursion(dependencies, route, x);
			}
		}

	}
	module.exports = {
		installer: installer,
		topoSort: topoSort,
		sortReccursion: sortReccursion
	}
})()