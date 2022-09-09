const prompt = require('prompt-sync')();
a=prompt("enter:");
a=Number(a);
even_check(a);
function even_check(a){
for(i=1;i<=a;i++){
	if(i%2==0){
		console.log(i);
	}
}
}
/*Output:enter:12
2
4
6
8
10
12*/