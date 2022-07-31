import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({ message: 'User successfully registered!' });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong!!!' });
    }
});

router.post('/login', async (req, res) => {
    try {
        await res.send('Login Route');
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong!!!' });
    }
});

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
