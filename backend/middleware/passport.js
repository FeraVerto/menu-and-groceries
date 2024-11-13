//libraries
import JwtS from 'passport-jwt';
import EJwt from 'passport-jwt';
import mongoose from 'mongoose';

//const
import { keys } from '../config/keys.js';

const JwtStrategy = JwtS.Strategy;
const ExtractJwt = EJwt.ExtractJwt;
const User = mongoose.model('User');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwt,
};

const configurePassport = (passport) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await User.findById(payload.userId).select('username id');

        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (e) {
        console.log(e);
      }
    })
  );
};

export default configurePassport;
