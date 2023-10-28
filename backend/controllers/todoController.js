const PostModel = require("../models/postModel")


module.exports = {
    createTodo: async (req, res) => {
        try {
            await PostModel.create({
                title: req.body.title,
                caption: req.body.caption,
                likes: 0,
                user: req.user.id,
            })
            res.status(201).json({
                message: "todo created!",
            })
        } catch (error) {
            res.status(500).json({
                message: "could not create todo", error
            })
        }
    },

    updateTodo: async (req, res) => {
        try {
            const { id, title, caption, likes } = req.body;
            const userId = req.user.id; // Assuming you have user authentication in place

            // Find the existing todo by its ID and ensure it belongs to the logged-in user
            const existingTodo = await PostModel.findOneAndUpdate(
                { _id: id, user: userId },
                {
                    title: title,
                    caption: caption,
                    likes: likes,
                },
                { new: true } // This option returns the updated document
            );

            if (!existingTodo) {
                return res.status(404).json({
                    message: "Todo not found or does not belong to the user",
                });
            }

            res.status(200).json({
                message: "Todo updated successfully",
                todo: existingTodo,
            });
        } catch (error) {
            res.status(500).json({
                message: "Could not update todo",
                error: error,
            });
        }
    },

    deleteTodo: async (req, res) => {
        try {
            let post = await PostModel.findById({ _id: req.params.id });
            await PostModel.remove({ _id: req.params.id });

            res.status(200).json({
                message: "Todo deleted successfully",
            });


        } catch (error) {
            res.status(500).json({
                message: "could not delete todo"
            })
        }
    },
}