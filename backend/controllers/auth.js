// const passport = require('passport')
// const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

// dotenv.config()

// passport.use(new GoogleStrategy({
//     clientID:     GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:3001/auth/google/callback",
//     passReqToCallback   : true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//     //   return done(err, user);
//     // });
//     done(null, profile);
//   }
// ));


// passport.serializeUser((user, done)=>{
//     done(null,user)
// })

// passport.deserializeUser((user, done)=>{
//     done(null,user)
// })