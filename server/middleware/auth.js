const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
const JWT_SECRET = process.env.JWT_SECRET;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //it can be handle in frontend
    // if (!email || !password) {
    //     return res.status(400).json({message: 'All fields are required'})
    // }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const alreadyUser = await User.findOne({ email });
    if (alreadyUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // const user = await User.create({ name, email, password });
    const user = await User.create({ name, email, password: hashedPassword });
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const protected = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    res.json({ message: "Access granted", userId: req.userId });
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { login, register, protected };
