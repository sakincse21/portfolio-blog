"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_contoller_1 = require("./user.contoller");
const client_1 = require("@prisma/client");
const authCheck_1 = require("../../utils/authCheck");
const router = express_1.default.Router();
router.get("/", (0, authCheck_1.authCheck)(client_1.Role.ADMIN), user_contoller_1.UserController.getAllFromDB);
router.get("/me", (0, authCheck_1.authCheck)(client_1.Role.ADMIN), user_contoller_1.UserController.getMe);
router.get("/:id", (0, authCheck_1.authCheck)(client_1.Role.ADMIN), user_contoller_1.UserController.getUserById);
router.post("/", (0, authCheck_1.authCheck)(client_1.Role.ADMIN), user_contoller_1.UserController.createUser);
router.patch("/:id", (0, authCheck_1.authCheck)(client_1.Role.ADMIN), user_contoller_1.UserController.updateUser);
router.delete("/:id", (0, authCheck_1.authCheck)(client_1.Role.ADMIN), user_contoller_1.UserController.deleteUser);
exports.userRouter = router;
