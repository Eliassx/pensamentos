const express = require("express");
const UsersController = require("./controllers/UserController");
const ThoughtsController = require('./controllers/ThoughtsController');
const router = express.Router();

router.get("/", UsersController.findUsers);
router.post("/users", UsersController.createUser);
router.get("/users/:id", UsersController.findUser);
router.put("/users/:id", UsersController.update);
router.delete("/users/:id", UsersController.deleteUser);

// Thoughts routes
router.get("/thoughts", ThoughtsController.findThoughts);
router.post('/thoughts', ThoughtsController.createThoughts);
router.get("/thoughts/:id", ThoughtsController.findOneThought);
router.put("/thoughts/updateThoughts/:id", ThoughtsController.updateThought);
router.delete("/thoughts/deleteThought/:id", ThoughtsController.deleteThoughts);

module.exports = router;