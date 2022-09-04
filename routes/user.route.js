const express = require("express");
const randomUsers = require("../controllers/randomUsers");
const allUser = require("../controllers/allUser");
const router = express.Router();
/**
 * @api {get} /user/random Get Random User
 * @apiDescription Get Random User
 *
 * @apiSuccess {Object[]} random User
 */
 router.get("/random", randomUsers);

 /**
  * @api {get} /user/all All User
  * @apiDescription Get all User
  *
  * @apiParam  {Number{1-}}         [page=1]     List page
  * @apiParam  {Number{1-}}      [limit=10]  Users per page
  *
  * @apiSuccess {Object[]} All User.
  */
 router.get("/all", allUser);
 

module.exports = router;