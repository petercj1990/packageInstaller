(function(installer){
	function tester () {
		if (installer.installer() != false){
			console.log('failed on empty imput test');
			return false;
		};
		console.log('passes undefined');

		if(installer.installer([ "CamelCaser: " ]) != "CamelCaser"){
			console.log('failed on positive test 0');
			return false;
		}
		
		console.log('passes test 0')

	
		if(installer.installer(["KittenService: CamelCaser", "CamelCaser: " ]) != "CamelCaser, KittenService"){
			console.log('failed on positive test 1');
			return false;
		}
		
		console.log('passes test 1')

		if(installer.installer(["KittenService: ",   "Leetmeme: Cyberportal",   "Cyberportal: Ice",   "CamelCaser: KittenService",   "Fraudstream: Leetmeme",   "Ice: " ]) != "KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream"){
			console.log('failed on positive test 2');
			return false;
		}
	
		consoel.log('passes test 2')

		if (installer.installer(["KittenService: ",   "Leetmeme: Cyberportal",   "Cyberportal: Ice",   "CamelCaser: KittenService",   "Fraudstream: ",   "Ice: Leetmeme" ] )!= false) {
			console.log('failed on test 3');
			return false;
		}
		console.log('passes test 3');
		return true;
	}

	tester();

	return{
		tester
	}
})(require('./packageInstaller.js'));

