import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

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

router.put('/update', async (req, res) => {
    try {
        await res.send('Update route');
    } catch (error) {
        
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await res.send('Delete route');
    } catch (error) {
        
    }
});

router.get('/', async (req, res) => {
    try {
        await res.send('Fetch users');
    } catch (error) {
        
    }
});

export default router;
