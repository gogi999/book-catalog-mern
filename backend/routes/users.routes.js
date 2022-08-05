import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/register', asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) throw new Error('User already exists!!!');

    const userCreated = await User.create({
        name,
        email,
        password
    });
    
    res.status(201).json({
        id: userCreated._id,
        name: userCreated.name,
        password: userCreated.password,
        email: userCreated.email,
        token: generateToken(userCreated._id)
    });
}));

router.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))) {
        res.status(200).json({
          _id: user._id,
          name: user.name,
          password: user.password,
          email: user.email,
          token: generateToken((user._id))
        });
      } else {
        res.status(401);
        throw new Error('Invalid credentials!!!');
      }
}));

router.put('/profile/update', authMiddleware, asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        
        if (req.body.password) {
            user.password = req.body.password || user.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            token: generateToken(updatedUser._id)
        });
    } 
}));

router.delete('/:id', async (req, res) => {
    try {
        await res.send('Delete route');
    } catch (error) {
        
    }
});

router.get(
    '/',
    authMiddleware,
    asyncHandler(async (req, res) => {
      const users = await User.find({});
  
      if (users) {
        res.status(200).json(users);
      } else {
        res.status(500);
  
        throw new Error('No users found at the moment');
      }
    })
);

router.get('/profile', authMiddleware, asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('books');

        if (!user) throw new Error("You don't have profile yet!");

        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error('Something went wrong!');
    }
}));

export default router;
