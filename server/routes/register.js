const express = require('express');
const router = express.Router();
const create_user = require('../controller/createUser');

router.post('/', (req,res) => {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    create_user(email, username, password, function(message){
        res.send(message);
    })
})

module.exports = router;