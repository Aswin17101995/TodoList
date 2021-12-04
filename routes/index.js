const express = require('express')
const router =  express.Router();
const homecontroller = require('../controller/home_controller')
router.get('/',homecontroller.home);
router.post('/addtask',homecontroller.addtask)
router.post('/delete',homecontroller.delete)
module.exports =router