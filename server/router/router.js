const express = require('express');
const router = express.Router();
const User = require('../model/User');
const {login} = require('../middleware/auth');
const {register} = require('../middleware/auth');
const protected = require('../middleware/auth');

router.post('/auth/login', login ) 
router.post('/auth/register', register )

module.exports = router