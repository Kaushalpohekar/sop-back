const express = require('express');
const router = express.Router();
const auth = require('./login/auth');
const dash = require('./dashboard/dashboard');

//Login Routes
router.post('/addUser', auth.registerUser);
router.get('/fetchUserById/:userId',auth.getUserById);
router.get('/fetchAllUsers',auth.getUsers);
router.post('/login', auth.login);
router.get('/user', auth.user);
router.put('/editUser/:userId', auth.editUser);
router.delete('/deleteUser/:userId', auth.deleteUser);

//Dashboard Routes
router.post('/InsertSOPData',dash.InsertSOPData);
router.get('/getSOPData' , dash.getSOPData);
router.delete('/deleteSOPData/:ID', dash.deleteSOPData);
router.put('/updateSOPData/:ID',dash.updateSOPData);

//Screens Routes
router.post('/AddScreen',dash.addScreen);
router.get('/getAllScreens',dash.getAllscreens);
router.delete('/deleteScreen/:ID',dash.deleteScreen);

//Screen Display Routes
router.get('/getContentForScreen/:ID', dash.getContentForScreen);

module.exports = router;