const User = require('../model/User');

function findUser(email){
    return User.findOne({email: email})
                .then( user => {
                    user.json();
                });
}

module.exports = findUser;