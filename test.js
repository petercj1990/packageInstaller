(function(installer){

	function tester () {

		//single value pass
	 	installer.installer([ "CamelCaser: " ], function(res){
			if(res != "CamelCaser"){
				console.log('failed test 1');
				return false;
			}
			console.log('passed test 1');
		});
	 	//two values passed
		installer.installer(["KittenService: CamelCaser", "CamelCaser: " ], function(res){
			if(res != "CamelCaser, KittenService"){
				console.log('failed test 2: ', res);
				return false;
			}
			console.log('passed test 2');
		});
		//standard test
		installer.installer(["KittenService: ",   "Leetmeme: Cyberportal",   "Cyberportal: Ice",   "CamelCaser: KittenService",   "Fraudstream: Leetmeme",   "Ice: " ],
		 function(res){
			if(res != "KittenService, Ice, Cyberportal, Leetmeme, CamelCaser, Fraudstream"){
				console.log('failed test 3: ', res);
				return false;
			}
			console.log('passed test 3');
		});
		//failing test
		installer.installer(["KittenService: ",   "Leetmeme: Cyberportal",   "Cyberportal: Ice",   "CamelCaser: KittenService",   "Fraudstream: ",   "Ice: Leetmeme" ],
		 function(res){
			if(res != false){
				console.log('failed test 4: ', res);
				return false;
			}
			console.log('passed test 4');
		});
		//empty test
		installer.installer([], function(res){
			if(res != false){
				console.log('failed test 5: ',res);
				return false;
			}
			console.log('passed test 5');
		});
		console.log('passed all tests');
		return true;
	}

	tester();

	return{
		tester
	}
})(require('./packageInstaller.js'));

