const { UserModel } = require("../models/userModel")

module.exports = {



    signUp: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await UserModel.findOne({ email })

            if (user) {
                return res.status(400).json({
                    message: "existing user"
                })
            }

            await UserModel.create({ email, password })

            res.status(201).json({
                message: "account created"
            })


        } catch (error) {
            res.status(500).json({
                message: "Something is wrong with signing up", error
            })
        }
    },



    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await UserModel.findOne({ email })

            if (!user) {
                return res.status(500).json({
                    message: "Not a user yet!"
                })
            }

            return res.status(200).json({ user })

        } catch (error) {
            res.status(500).json({
                message: "Something is wrong with logging in", error
            })
        }
    },



    updateFirstName: async (req, res) => {
        try {
            const { email, firstName } = req.body;
            const user = await UserModel.findOne({ email });

            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            // Update the firstName field
            user.firstName = firstName;

            // Save the updated user
            await user.save();

            res.status(200).json({
                message: "First name updated successfully",
                user: user,
            });



        } catch (error) {
            res.status(500).json({
                message: "Something is wrong with updating first name", error
            })
        }
    },



    deleteUser: async (req, res) => {
        try {
            const user = await UserModel.findByIdAndRemove(req.params.id);

            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                });
            }

            res.status(200).json({
                message: "User deleted successfully",
            });
        } catch (error) {
            res.status(500).json({
                message: "Something is wrong with deleting the user",
                error: error,
            });
        }
    },

}