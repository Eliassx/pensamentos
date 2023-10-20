const express = require('express');
const ThoughtsController = require('../controllers/ThoughtsController');

const router = express.Router();

router.get("/thoughts/dashboard", ThoughtsController.dashboard);

router.get('/thoughts', ThoughtsController.findThoughts);
router.get('/thought-create', ThoughtsController.registerThought)
router.post('/thoughts/create', ThoughtsController.createThoughts);
router.get('/thoughts/:id', ThoughtsController.findOneThought);
router.put('/thoughts/updateThoughts/:id', ThoughtsController.updateThought);
router.delete('/thoughts/deleteThought/:id', ThoughtsController.deleteThoughts);

module.exports = router;