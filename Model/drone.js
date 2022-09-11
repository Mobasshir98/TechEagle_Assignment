const mongoose=require('mongoose');

const droneSchema=mongoose.Schema({
    mode:String,
    roll:Number,
    pitch:Number,
    yaw:Number,
    heading:Number, 
    long:Number, 
    lat:Number,
    alt:Number
})

const model = mongoose.model("dronedata",droneSchema);

module.exports=model;