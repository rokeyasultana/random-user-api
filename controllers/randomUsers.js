const fs = require('fs');

const randomUsers = (req,res) => {

fs.readFile("../user.json",'utf-8',(err,jsonString) =>{
    if(err){
        console.log(err);
    }
    else{
        const Users = JSON.parse(jsonString);

        if(Users.length === 0){
            res.status(200).json({ message: "no data found" });
        }
        else{
            const UserCount = Users.length;
            const UserIndex = Math.floor(Math.random()* dataCount);
            res.status(200).send( UserCount[UserIndex]);
        }
    }
})


};
module.exports = randomUsers;