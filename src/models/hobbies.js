const path=require('path');
const fs=require('fs');
const hobbies=JSON.parse(fs.readFileSync(path.resolve(__dirname,"./hobbies.json"),"utf-8"));

const hobbiesModel={
    findAll: ()=>{
        return hobbies;
    }
}

module.exports=hobbiesModel;