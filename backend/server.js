const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Dummy Users
const users = [
    {
        email: "patient@gmail.com",
        password: "1234",
        role: "patient"
    },
    {
        email: "doctor@gmail.com",
        password: "1234",
        role: "doctor"
    }
];

// ✅ OTP Storage
let otpStore = {};


// ✅ Test Route
app.get("/", (req, res) => {
    res.send("Backend is running");
});


// ✅ Login API
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (user) {
        res.json({
            message: "Login successful",
            role: user.role
        });
    } else {
        res.status(401).json({
            message: "Invalid credentials"
        });
    }
});


// ✅ Generate OTP API
app.post("/generate-otp", (req, res) => {
    const { email } = req.body;

    const otp = Math.floor(1000 + Math.random() * 9000).toString();

    otpStore[email] = otp;

    res.json({
        message: "OTP generated",
        otp: otp
    });
});


// ✅ Verify OTP API (NEW - VERY IMPORTANT)
app.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;

    if (otpStore[email] && otpStore[email] === otp) {

        // Delete OTP after successful use (security)
        delete otpStore[email];

        res.json({
            message: "Access granted"
        });

    } else {
        res.status(401).json({
            message: "Invalid OTP"
        });
    }
});


// ✅ Start Server (Keep this ALWAYS at bottom)
app.listen(5000, () => {
    console.log("Server running on port 5000");
});