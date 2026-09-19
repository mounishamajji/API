const fs = require('fs');

const users = JSON.parse(
    fs.readFileSync('./dev-data/data/users.json', 'utf-8')
);

exports.getAllUsers = (req,res) => {
    res.status(200).json({
        status : "success",
        result : users.length,
        data : {
            users
        }
    })
}
exports.getUser =  (req,res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    const user = users.find(el => el.id === id);
    if(!user){
        return res.status(404).json({
            "status": "fail",
            "message":"user not found"
        });
    }
    
    res.status(200)
    .json({
        status:'success',
        data : {
            user
        }
        
        
    });
} 
exports.createUser = (req,res) => {
    // console.log(req.body);

    const newId = users[users.length - 1].id+1;
    const newUser = Object.assign({id:newId} , req.body);
    tours.push(newUser);
    fs.writeFile('./dev-data/data/users.json',JSON.stringify(users),err => {
       res.status(201).json({
        status :'success',
        data:{
            users: newUser
        }
       })
    })
    
} 
exports.updateUser = (req,res) => {
    if(req.params.id * 1 > users.length){
        res.status(404).json({
            status : "Not found",
            message : "Invalid user-not found"
        })
    }
    res.status(200).json({
        status:"success",
        data : {
            user : "<updated user here....>"
        }
    })
}
exports.deleteUser =  (req,res) => {
    if(req.params.id * 1 > users.length){
        res.status(404).json({
            status : "Not found",
            message : "Invalid user-not found"
        })
    }
    res.status(204).json({
        status:"success",
        data : null
    })
}