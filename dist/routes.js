"use strict";

var express = require('express');
var router = express.Router();
var auth = require('./login/auth');
var dash = require('./dashboard/dashboard');
var multer = require('multer');
var upload = multer({
  dest: './uploads/'
});

//Login Routes
router.post('/addUser', auth.registerUser);
router.get('/fetchUserById/:userId', auth.getUserById);
router.get('/fetchAllUsers', auth.getUsers);
router.post('/login', auth.login);
router.get('/user', auth.user);
router.put('/editUser/:userId', auth.editUser);
router["delete"]('/deleteUser/:userId', auth.deleteUser);

//Dashboard Routes
router.post('/InsertSOPData', upload.single('file'), dash.InsertSOPData);
router.get('/getSOPData', dash.getSOPData);
router["delete"]('/deleteSOPData/:FileName', dash.deleteSOPData);
router.put('/updateSOPData/:ID', dash.updateSOPData);

//Screens Routes
router.post('/addScreen', dash.addScreen);
router.get('/getAllScreens', dash.getAllscreens);
router["delete"]('/deleteScreen/:ID', dash.deleteScreen);
router.put('/updateScreen/:screenId', dash.updateScreen);

//Screen Display Routes
router.get('/getSOPDataByScreenId/:screenId', dash.getSOPDataByScreenId);

module.exports = router;