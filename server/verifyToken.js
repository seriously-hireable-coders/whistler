import jwt from 'jsonwebtoken';
import { handleError } from './error.js';

export const verifyToken = (req, res, next) => {console.log('inside verifyToken');
  const token = req.cookies.access_token;
  console.log(token);
  if (!token) return (handleError(401, "You are not authenticated"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    console.log('inside JWT verify');
    if (err) return next(createError(403, "Token is invalid"));
    req.user = user;
    next();
  });
};
