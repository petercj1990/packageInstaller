(function (){
	this.hasLooped=false;
	function installer(arg1, cb){

		//console.log('running test with: ', arg1);
		if (arg1 == undefined || arg1 === []){
			cb(false);
		}
		else{
			var hierarchy = [];
			var packNum = 0;
			for(var index in arg1){
				var packageVal =  arg1[index].split(": ");
				hierarchy[packNum] =  {package: packageVal[0], dep: packageVal[1], visited: false, sorted: false};
				
				packNum++;
			};
			var route = [];
			topoSort(hierarchy, route, function(route){
				if(this.hasLooped ===true){
					return cb (false);
				}
				return printer(route, function(result){
					cb(result);
				});
			});
		}
	};

	function printer(route, cb){
		var installList = "";
		for(var x = 0; x < route.length-1 ; x++){
			installList += route[x];
			installList += ", ";
		}
		installList += route[route.length-1];
		cb(installList);
	};

	function topoSort(deps, route, cb){
		var route = [];
		for (var index in deps){
			if(deps[index].visited === false){
				sortReccursion(deps, route, index);
			};
			//console.log('updated route printout', route);
		};
		cb(route);
	};

	function sortReccursion(verticies, route, i){
		verticies[i].visited = true;
		if(verticies[i].dep != ''){
			var foundDep;
			for(var index in verticies){
				if (verticies[index].package === verticies[i].dep){
					foundDep = verticies[index];
					if(!foundDep.visited){
						sortReccursion(verticies, route, index);
					}
					else if(!foundDep.sorted){
						this.hasLooped = true;
						return false;
					}
				}
			}
		}
		verticies[i].sorted = true;
		route.push(verticies[i].package);
	}

	module.exports = {
		installer: installer,
		topoSort: topoSort,
		sortReccursion: sortReccursion
	}
})();
