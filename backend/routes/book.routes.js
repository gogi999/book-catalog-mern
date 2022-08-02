import express from "express";
import asyncHandler from "express-async-handler";
import authMiddleware from "../middlewares/authMiddleware.js";
import Book from "../models/book.model.js";

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
    const book = await Book.create(req.body);

    if (book) {
        res.status(201).json(book);
    } else {
        res.status(500);
        throw new Error('Book creating failed!!!');
    }
}));

router.get('/', asyncHandler(async (req, res) => {
    const books = await Book.find({});

    if (books) {
        res.status(200).json(books);
    } else {
        res.status(500);
        throw new Error('There are no books!!!');
    }
}));

router.put('/:id', authMiddleware, asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    
    if (book) {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json(updatedBook);
    } else {
        res.status(500);
        throw new Error('Update failed!!!');
    }
}));

router.delete('/:id', authMiddleware, asyncHandler(async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.json(error);
    }
}));

export default router;
