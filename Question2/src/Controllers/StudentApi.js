const timeModel= require('../Models/TimeEntry')
const studentModel=require('../Models/Student')
const { isValidObjectId } = require('mongoose');
const { find } = require('../Models/TimeEntry');


const valid = function (input){
    if(typeof(input)=== undefined || typeof(input)===null){ return false}
    if(typeof(input)==="string" && input.trim().length>0){ return true}
    if(typeof(input)==="object" && input.length>0) {return true}
    return false;
    }

const register= async (req,res)=>{
    try{
   const body= req.body;
      if(!body){
        return res.status(400).send({status:false,message:"please provide body"})
      }
      const {firstName,lastName,displayName,municipality }=body
      if(!valid(firstName)){
        return res.status(400).send({status:false,message:"Please fill in your firstName Properly"})
      }
      if(!valid(lastName)){
        return res.status(400).send({status:false,message:"Please fill in your lastName Properly"})
      }
      if(!valid(displayName)){
        return res.status(400).send({status:false,message:"Please fill in your displayName Properly"})
      }
      if(!valid(municipality)){
        return res.status(400).send({status:false,message:"Please fill municipality properly"})
      }
const create = await studentModel.create(body);
 return res.status(201).send({Status:true,data:create})
   }
   catch(err){
    return res.send({status:false,message:err.message})
   }
}

const validateDate = (value) => { 
    return (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/).test(value) 
}
const timeEntrie= async (req,res)=>{
    data=req.body
    try{
    if(!data){
        return res.status(400).send({status:false,message:"please provide body"})
      }   
      const  {timeEntries,student}=data
      if(!isValidObjectId(student)){
        return res.status(400).send({status:false,message:"please provide valid studentid"})
      }
      const checkid= await studentModel.findById(student)
      if(!checkid){
        return res.status(400).send({status:false,message:"Student not register"})
      }
      if(!validateDate(timeEntries)){
        return res.status(400).send({status:false,message:"please provide valid date"})
      }
      const create = await timeModel.create(data)
      return res.status(201).send({status:true,data:create})
}
catch(err){
    return res.Status(500).send({status:false,message:err.message})
}
}

const getstudentbytime = async (req,res)=>{
    try{
    const {date}= req.body
    if(!validateDate(date)){
        return res.status(400).send({status:false,message:"please provide valid date"})
      }
      const fetchdata = await timeModel.find({timeEntries:date}).populate('student')

      return res.status(200).send({status:true,data:fetchdata})
    }
    catch(err){
        return res.status(500).send({status:false,message:err.message})
    }
}

module.exports={register,timeEntrie,getstudentbytime}