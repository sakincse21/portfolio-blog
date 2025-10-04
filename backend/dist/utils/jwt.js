"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../configs/env");
const generateToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, env_1.envVars.JWT_ACCESS_SECRET, { expiresIn: env_1.envVars.JWT_ACCESS_EXPIRES });
    return token;
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    const verifiedToken = jsonwebtoken_1.default.verify(token, env_1.envVars.JWT_ACCESS_SECRET);
    return verifiedToken;
};
exports.verifyToken = verifyToken;
