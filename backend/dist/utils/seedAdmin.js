"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = void 0;
const client_1 = require("@prisma/client");
const env_1 = require("../configs/env");
const db_1 = require("../configs/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const seedAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isAdminExist = yield db_1.prisma.user.findUnique({
            where: {
                email: env_1.envVars.ADMIN_EMAIL,
            },
        });
        if (isAdminExist) {
            console.log("Admin exists already");
            return;
        }
        console.log("Trying to create Admin...");
        const hashedPassword = yield bcrypt_1.default.hash(env_1.envVars.ADMIN_PASSWORD, Number(env_1.envVars.BCRYPT_SALT_ROUND));
        const payload = {
            name: "Saleheen",
            role: client_1.Role.ADMIN,
            email: env_1.envVars.ADMIN_EMAIL,
            password: hashedPassword,
            phone: "01833410082",
        };
        const Admin = yield db_1.prisma.user.create({
            data: payload,
        });
        if (Admin === null || Admin === void 0 ? void 0 : Admin.role) {
            console.log("Admin created successfully.");
        }
        console.log(Admin);
    }
    catch (error) {
        console.log(error);
    }
});
exports.seedAdmin = seedAdmin;
