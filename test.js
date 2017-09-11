(function(installer){
	function tester () {
		console.log(installer);
		console.log('here i am');
		if (installer.installer() != false){
			console.log('failed on empty imput test');
			return false;
		};
	
		if(installer.installer(["KittenService: CamelCaser", "CamelCaser: " ]) != "CamelCaser, KittenService"){
			console.log('failed on positive test 1');
			return false;
		}
	
		if(installer.installer(["KittenService: ",   "Leetmeme: Cyberportal",   "Cyberportal: Ice",   "CamelCaser: KittenService",   "Fraudstream: Leetmeme",   "Ice: " ]) != "KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream"){
			console.log('failed on positive test 2');
			return false;
		}
	
		if (installer.installer(["KittenService: ",   "Leetmeme: Cyberportal",   "Cyberportal: Ice",   "CamelCaser: KittenService",   "Fraudstream: ",   "Ice: Leetmeme" ] )!= false) {
			console.log('failed on failure test');
			return false;
		}
		return true;
	}

	tester();

	return{
		tester
	}
})(require('./packageInstaller.js'));

