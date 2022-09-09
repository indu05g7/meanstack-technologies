function tester(){
	var message;
	if(confirm("Press a button!")) {
		message="You pressed OK!";
	}
	else{
		message= "You pressed Cancel!";
	}
	console.log(message);
}
tester();
/*Output:
E:\20761A05G7\tester.js:3
        if(confirm("Press a button!")) {
        ^

ReferenceError: confirm is not defined
    at tester ←[90m(E:\20761A05G7\←[39mtester.js:3:2←[90m)←[39m
    at Object.<anonymous> ←[90m(E:\20761A05G7\←[39mtester.js:11:1←[90m)←[39m
←[90m    at Module._compile (node:internal/modules/cjs/loader:1126:14)←[39m
←[90m    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)←[39m
←[90m    at Module.load (node:internal/modules/cjs/loader:1004:32)←[39m
←[90m    at Function.Module._load (node:internal/modules/cjs/loader:839:12)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)←[39m
←[90m    at node:internal/main/run_main_module:17:47←[39m
*/
