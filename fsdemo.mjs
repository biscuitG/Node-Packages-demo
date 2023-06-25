// callback based syntax const fs=require("fs")
//promise based syntax const fs=require("fs/promises");

// both are in common js module

// we are now making ES module 

//import { writeFile } from 'fs';
import {readFile,writeFile} from 'fs/promises';

console.log(import.meta.url);

const filePath = new URL('./index.html', import.meta.url);
let data=await readFile(filePath,{encoding : 'utf8'});
// remember await can be used only with await
// but top level module can also be done in ES module
// we get very big buffer use utf 8 
console.log(data);

const obj={
     title: "my custom title ",
     body : "custom body"
}

for( const[key,value] of Object.entries(obj) ){
    data=data.replace(`{${key}}`,value);
}
 await writeFile(new URL('./index.html',import.meta.url ), data);

