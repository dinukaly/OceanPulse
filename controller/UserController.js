const User = require("../model/UserSchema");

const registerUser = async (req, res) => {
    const { username, firstName, lastName, email, dateOfBirth, password, phone, language, boatId, emergencyContact } = req.body;
    try {
        const newUser = new User({
            username,
            firstName,
            lastName,
            email,
            dateOfBirth,
            password,
            phone,
            language,
            boatId,
            emergencyContact
        });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};