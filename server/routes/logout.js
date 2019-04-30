const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/login');
});
  
module.exports = router;