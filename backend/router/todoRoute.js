const express = require("express");
const todoRouter = express.Router();
const todoController = require("../controllers/todoController");

todoRouter.post("/createTodo", todoController.createTodo)
todoRouter.put("/updateTodo", todoController.updateTodo)
todoRouter.delete("/deleteTodo", todoController.deleteTodo)

module.exports = {todoRouter};