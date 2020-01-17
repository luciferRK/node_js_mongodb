var MdbVap = require('mongodb').MongoClient;
var MdbVar = "mongodb://localhost:27017";
var Nam
MdbVap.connect(MdbVar, function(Err, Svr){
    if(Err) throw Err;
    Nam = Svr.db('testing_mongodb');
    console.log("DataBase Connected..")

    // var query = { name: "Likhith"};

    // MdbVar.collection("students").find(query).toArray(function(Err, Res){
    //         if(Err) throw Err;
    //         console.log(Res);
    //          Svr.close()
    //     });


})






















// var m = require("./namemod.js")
// var ms = require("./namemod.js")

//import namemod from './namemod'  //es6
//import {funct1,funct2,funct3} from './namemod'


// // console.log(ms.exportmessage)
// console.log(ms.name)

// m.anyname()

// console.log(m.name)
// m.exportfunction()

//_______________________________________________

// let namevar = "Dhanush BVC"
// var friends = ["Dhanush BVC","Brendan","Jaison","Vibha"]
// for(var i=0;i<friends.length;i++){
//     console.log(friends[i])
// } 
// console.log(i)
//let will be in its own scope
//var will be in scope of function

//const  will be as let and value cannot be changed
// const pi = 3.14
// console.log(pi)


// var tabro = "<tr><td>"+data1+"</td><td>"+data2+"</td><td>"+data3+"</td></tr><tr><td>"+data4+"</td>";
// //literals to make above thing easy

// var tabro2 =    `<tr>
//                     <td>${data1}</td>
//                     <td>${data2}</td>
//                 </tr>
//                 <tr>
//                     <td>${data3}</td>
//                     <td>${data4}</td>
//                 </tr>`

// var multi =     `line1
//                 line2`

// var newarray = ["elements of this array",...friends]
// console.log(newarray)

// function add(a,b,c){
//     return a+b+c
// }


// console.log(add("Dhanush","is","BVC"))
 
//__________________________________________________
//using expres below


// first install Express
// npm i -g express



var SvrMgr = require('express');
 var SvrMgrVaj = SvrMgr();

SvrMgrVaj.listen(8008,function(){
    console.log("Server started and running");
});

// SvrMgrVaj.get("/",function(req,res){
//     res.send("<h1>Nice</h1>");
// });
// alternative for above

// SvrMgrVaj.get("/",homepage);                                     path is root /

// function homepage(req,res){
//     res.send("<h1>Nice</h1>");
// }

//methods
//get, post, put, delete


// SvrMgrVaj.get("/nameApi",function(req,res){                         //path should be /nameApi in order to display
//     res.send("<h1>Nice</h1>");
// });

// SvrMgrVaj.post("/bvcs",function(req,res){                         //path should be /nameApi in order to display
//     res.send("<h1>Dhanush, Brendan</h1>");
// });

//json request
// SvrMgrVaj.get("/json",function(req,res){                         //path should be /nameApi in order to display
//     res.json(friends);
// });

// SvrMgrVaj.put("/jsonput",function(req,res){                         
//     res.send(friends+"Put");
// });

// SvrMgrVaj.delete("/jsondel",function(req,res){                         
//     res.send(friends+"Delete");
// });



// to get info from browser we need body-parser
//npm i -g body-parser

var BvrBdyTdrVap = require('body-parser');

SvrMgrVaj.use(BvrBdyTdrVap.json());

SvrMgrVaj.post("/addstudents",function(req,res){
    var student ={
        "name":req.body.name,
        "phone":req.body.phone,
        "email":req.body.email
    }
    Nam.collection("students").insertOne(
        student,function(Err,Res){
            if (Err) throw Err;
            console.log("Data is inserted "+Res.insertCount)
            res.status(201);
            res.send("Data inserted")
        }
    )
});


// SvrMgrVaj.put("/updatepeople",function(req,res){
//     var updfrnd = req.body.updfrnd
//     var updidx = req.body.idx
//     friends[updidx]=updfrnd;
//     res.json(friends+" -Updated");
// });

// SvrMgrVaj.delete("/deletepeople",function(req,res){
//     var delidx = req.body.idx
//     friends.splice(delidx,1)
//     res.json(friends+" -Delete");
// })

// SvrMgrVaj.put("/updatepeople/:id",function(req,res){
//     var updfrnd = req.body.updfrnd
//     var updidx = req.query.id
//     friends[updidx]=updfrnd;
//     res.json(friends+" -Updated");
// });



