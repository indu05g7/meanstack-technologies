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
nm.findOne({name:'Runny'},function(err,data){
	if(err){
		console.log(err);
	}
	else{
console.log("First Function Call:",data);}
});
/*
Output:
E:\20761A05G7>node db5.js
DB Connected
First Function Call: [
  {
    _id: new ObjectId("636ddccb0b322fb8e791b97d"),
    name: 'priya',
    age: 20,
    __v: 0
  },
  {
    _id: new ObjectId("636dde003090fee33522fab2"),
    name: 'priya',
    age: 20,
    phno: 123456789,
    __v: 0
  }
]
^C
E:\20761A05G7>node db4.js
DB Connected
First Function Call: {
  _id: new ObjectId("636de08272b852810ef7e180"),
  name: 'Runny',
  age: 10,
  phno: 6789023451,
  __v: 0
}
*/