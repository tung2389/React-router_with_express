const user = require('../model/user_authentication');
const bcrypt = require('bcrypt');
// function create_user(email,username,password,callback1,callback2)
// {
//     user.findOne({email:email},function(err,data){
//         if(data !== null) //if user existed
//         callback1();
//         else //if ok
//         {
//         new_user(email,username,password);
//         callback2();
//         }
//     });
// }
// function new_user(email,username,password)
// {
//         user.create({
//             email:email,
//             username:username,
//             password:password
//         })
// }

module.exports = {create_user,authenticate};