(function(){
	var installer = require('./packageInstaller.js');

	if (installer() != false){
		console.log()
		return false;
	};

	if(installer([ "KittenService: CamelCaser", "CamelCaser: " ]) != "CamelCaser, KittenService"){
		return false;
	}

})

