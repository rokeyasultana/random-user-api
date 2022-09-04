const express = require('express');

const randomUsers = require('../controllers/randomUsers');
const allUser = require('../controllers/allUser');
const saveUser = require('../utils/saveUser');
const saveUser = require('../utils/saveUser');
const updateOneUser = require('../utils/updateUser');
const router = express.Router();

router.get("/all",  allUser);
router.get("/random", randomUsers);
router.post("/save",  saveUser);
router.patch("/update", updateOneUser);

module.exports = router;

