// these are core modules

const fs =require('fs');
const path =require('path')

// create a directry
const filepath= path.join(__dirname,'files')

// create 5 file using loop  

for(let i=0;i<5;i++){
fs.writeFileSync(filepath+`/hello${i}.txt`," I am Harsh Kumar")
}

// read all file using core modules of node

fs.readdir(filepath,(err,files)=>{ console.warn(files)})