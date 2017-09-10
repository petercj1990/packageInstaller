(function(arg1){
	if (arg1.constructor != Array){
		return false;
	};
	var hierarchy = [][];
	var packNum = 0;
	for(var package in arg1){
		var packageVal =  package.split(": ");
		hierarchy[packNum] = packageVal[0]
			for(var x = 1; x < packageVal.length; x++){
				hierarchy[packNum].push(packageVal[x]);
			}
		packNum++;
	}
})