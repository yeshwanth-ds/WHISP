import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    try {
        // Generate token with a 15-day expiration
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: '15d'
        });

        // Set the token in an HTTP-only cookie with correct maxAge
        res.cookie("jwt", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in milliseconds
            httpOnly: true,
            sameSite:"strict",
            secure: process.env.NODE_ENV !== "development"

        });

    } catch (error) {
        console.error("Error generating token or setting cookie:", error);
        res.status(500).json({ message: "Error generating token or setting cookie" });
    }
};

export default generateTokenAndSetCookie;