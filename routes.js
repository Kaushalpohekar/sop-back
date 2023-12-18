const express = require('express');
const router = express.Router();
const db = ('./db')
const dash = require('./dashboard/dashboard')

router.post('/InsertSOPData',dash.InsertSOPInput);
router.get('/getSOPData' , dash.getSOPData);
router.delete('/deleteSOPData', dash.deleteSOPData);
module.exports = router;