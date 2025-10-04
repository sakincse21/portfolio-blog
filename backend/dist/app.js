"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const env_1 = require("./configs/env");
const app = (0, express_1.default)();
// Middleware
// app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use((0, cors_1.default)({
    origin: env_1.envVars.FRONTEND_URL,
    credentials: true,
}));
app.use((0, compression_1.default)()); // Compresses response bodies for faster delivery
app.use(express_1.default.json()); // Parse incoming JSON requests
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.set("trust proxy", 1);
app.use("/api/v1", routes_1.AppRouter);
// Default route for testing
app.get("/", (_req, res) => {
    res.send("API is running");
});
// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found",
    });
});
exports.default = app;
