const express = require('express');
const withAuth = require('../middleware/auth');
const findUser = require('../controller/findUser');

const router = express.Router();

router.get('/', withAuth, async (req,res) => {
    let user = await findUser(req.user.email);
    res.send(user);
});

module.exports = router;