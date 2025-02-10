//libraries
import JwtS from 'passport-jwt';
import EJwt from 'passport-jwt';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const cookieExtractor = (req) => {
  let token = null;

  if (req && req.cookies) {
    token = req.cookies.access_token;
  }

  return token;
};

const JwtStrategy = JwtS.Strategy;
const ExtractJwt = EJwt.ExtractJwt;
const User = mongoose.model('User');

const options = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

const configurePassport = (passport) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      console.log('payload', payload);
      try {
        const user = await User.findById(payload.userId).select(
          'username userId'
        );

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
