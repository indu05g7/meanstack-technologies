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
const data=new nm({name:'Rakesh',age:20});
data.save();
