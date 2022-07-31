import express from "express";
import dbConnect from "./config/dbConnect.js";
import userRouter from "./routes/users.routes.js"

dbConnect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started at port ${port}...`);
});
