const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/',(req,res,next) => {
    passport.authenticate('local',function(err,user,message){
        if(err){
            return next(err);
        }
        else if(!user){
            return res.send(message);
        }
        else{
            req.logIn(user, function(err){
                if(err){
                    return next(err);
                }
                return res.redirect('/dashboard');
            });
        }
    })(req,res,next);
})

module.exports = router;