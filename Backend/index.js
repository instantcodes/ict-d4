// Importing Express
import express from "express";

// Import DB connection
import "./db.js";

// Import Student Model
import StdModel from "./StudentModel.js";

// Initialize Express
const app = express();

// Middleware
app.use(express.json());

// Test API
app.get("/", (req, res) => {
    res.send("Hello from Server");
});

// API to add student data to DB
app.post("/", async (req, res) => {
    try {
        const student = new StdModel(req.body);
        await student.save();

        res.send("Student data added");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding student data");
    }
});

// Server Port
const port = 3000;

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});