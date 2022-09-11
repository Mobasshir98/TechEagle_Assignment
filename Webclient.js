// Dummy code snippet to connect server and fetch data

/*
 *======	JSON DATA FIELDS ====================
 *
 * 	data['mode']    =  vehicle mode name
 *  	data['roll']    = roll angle
 *       data['pitch']   = pitch angle
 *       data['yaw']     = yaw angle
 *       data['heading'] = vehicle heading
 *       data['long']    = current longitude
 *       data['lat']     = current latitude
 *       data['alt']     = current altitude
 *============================================
 */

require('dotenv').config()
 var net = require("net");
var express = require("express");
const mongoose = require("mongoose");
const dronedata = require("./Model/drone");
const cors = require('cors')

let app = express();
app.use(cors())

mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() =>
    app.listen(5000, () => {
      console.log("Connected to server");
    })
  );

var client = new net.Socket();
client.connect(5000, "127.0.0.1", function () {
  console.log("Connected");
  client.write("GET"); // send acknowledge to request data
});

// Call this callback to fetch data



client.on('data', async function(data) {
		client.write('GET');
		// console.log('Received: ' + data);
		var jsondata = JSON.parse(data);
    try{
      let updateddata=await dronedata.updateOne({mode:"STABILIZE"},jsondata,{new:true})
    }
    catch(err){
      console.log(err)
    }
		// console.log(jsondata.mode); // "mode" field is parsed
		// client.destroy(); // kill client after server's response
	});
	
  app.get('/',async (req,res)=>{
    try{
      let data = await dronedata.find();
      res.status(200).json(...data)
    }
    catch(err){
      console.log(err)
    }
  })


client.on("close", function () {
  console.log("Connection closed");
});
