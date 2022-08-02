import asynHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authMiddleware = asynHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      req.user = user;
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorised, invalid token!!!');
    }
  }
});

export default authMiddleware;
