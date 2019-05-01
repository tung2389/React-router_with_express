const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/',(req,res,next) => {
    passport.authenticate('local',function(err,user,message){
        if(err){
            console.log(1);
            return next(err);
        }
        else if(!user){
            console.log(2);
            return res.send(message);
        }
        else{
            req.logIn(user, function(err){
                if(err){
                    console.log(1);
                    return next(err);
                }
                console.log(4);
                return res.redirect('/dashboard');
            });
        }
    })(req,res,next);
})

module.exports = router;