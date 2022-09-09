const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});
readline.question('Who are you?\n', name =>{
	console.log('Hey there',name,'!');
	readline.close();
});
/*Output:
E:\20761A05G7>node third.js
Who are you?
Indu
Hey there Indu !
*/