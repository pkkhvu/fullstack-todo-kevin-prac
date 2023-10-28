const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { homeRoute } = require("./backend/router/homeRoute.js")
const { todoRoute } = require("./backend/router/todoRoute.js")
require('./backend/controllers/auth.js');
// const passport = require('passport')
// const session = require('express-session')




dotenv.config()

mongoose.connect(process.env.MONGOURL).then(() => console.log("im connected"))
    .catch((error) => console.log("no connection", error))

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
//   }));

// function isLoggedIn(req, res){
//     req.user ? next() : res.status(401).json({
//         message: "not logged in"
//     })
// };



// app.use(passport.initialize())
// app.use(passport.session())

app.use(cors())
app.use(express.json())
app.use("/", homeRoute)
app.use("/todo", todoRoute)

// app.get('/auth/google',
//   passport.authenticate('google', { scope:
//       [ 'email', 'profile' ] }
// ));

// app.get( '/auth/google/callback',
//     passport.authenticate( 'google', {
//         successRedirect: '/auth/google/success',
//         failureRedirect: '/auth/google/failure'
// }));

// app.get('/auth/protected', isLoggedIn, (req,res)=>{
//     let name = req.user.displayName();
//     res.send('hello there!')
// })

// app.get('/auth/google/failure', (req,res)=>{
//     res.send('not good!')
// })




app.listen(3001, () => console.log("this is working"));