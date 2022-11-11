const express=require('express');
const app=express();
const mongose=require('mongoose');

mongose.connect("mongodb://127.0.0.1:27017/20761A05G7",(err)=>{
if(err)
	console.log("DB not connected");
else
	console.log("DB Connected");
});
const ns=new mongose.Schema({
name:String,
age:Number,
phno:Number});
const nm=new mongose.model("records",ns);
nm.insertMany([{
	name:'Runny',
	age:10,
	phno:6789023451},
	{name:'Shunny',
	age:8,
	phno:4567890213}]);
/* 
Output:
DB Connected

_id: ObjectId('636de08272b852810ef7e180')
name:"Runny"
age:10
phno:6789023451
__v:0


_id:ObjectId('636de08272b852810ef7e181')
name:"Shunny"
age:8
phno:4567890213
__v:0
*/



