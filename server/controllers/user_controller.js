const User = require('../models/user');

exports.register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const user = await User.create({ username, password, role });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    // Simple authentication example (replace with hashed password check).
    const user = await User.findOne({ where: { username, password } });
    if (user) {
        return res.json({ message: 'Login successful' });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
};

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
};
