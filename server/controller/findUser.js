const User = require('../model/User');

function findUser(email){
    return User.findOne({email: email})
                .then( user => {
                    return user;
                });
}

module.exports = findUser;