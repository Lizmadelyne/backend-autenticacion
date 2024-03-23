const passport = require('passport');

const LocalStrategy = require('../strategy/local.strategy');
const JwtStrategy = require('../strategy/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
