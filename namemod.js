// module.exports = "Hello sahyadri"
// var str = "exported variable"
//module.exports = str

// module.exports.exportmessage = str

// module.exports = {
//     name:"its in the flower brackets and a key"
// }

// function fiveA(){
//     console.log("this is a exportable function")
// }

// module.exports.anyname = fiveA

module.exports = {
    name:"its in the flower brackets and a key",
    //function name to be exported : function(){}
    exportfunction: function() {
        console.log("this is a exportable function")
    }
}