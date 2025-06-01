const jwt = require("jsonwebtoken");
require('dotenv').config();

const GenerateToken = (userid, res) => {
    try {
        // Create a JWT token with the user id and expiration time of 1 day
        const token = jwt.sign({ userid }, process.env.SECRET_CODE, {
            expiresIn: "1d", // Token expiration time
        });

        // Set the token in the cookie with necessary options
        res.cookie("jwt", token, {
            maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
            httpOnly: true, // Security setting (prevents JS access to the cookie)
            sameSite: "strict", // CSRF protection (prevents cross-site request)
            secure: process.env.NODE_ENV !== "development", // Secure cookie only in production
        });

        return token; // Return the token for further usage
    } catch (error) {
        console.error("Error generating token:", error);
        throw new Error("Failed to generate token"); // If there is an error, throw it
    }
};

module.exports = GenerateToken;
