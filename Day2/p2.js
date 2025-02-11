const fs = require("fs");


fs.writeFile("./data.txt","utf8", (err,data) =>{
    if(err) throw err;
    console.log("Data read frim file", data);
})