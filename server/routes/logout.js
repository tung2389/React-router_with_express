const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.logout();
    res.send("You have logged out successfully")
});
  
module.exports = router;