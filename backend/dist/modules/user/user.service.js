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
exports.UserService = void 0;
const db_1 = require("../../configs/db");
const errorHelpers_1 = __importDefault(require("../../errorHelpers"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield db_1.prisma.user.create({
        data: payload
    });
    return createdUser;
});
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
            role: true,
            posts: true
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return result;
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            phone: true,
            picture: true,
            createdAt: true,
            updatedAt: true,
            posts: true
        }
    });
    if (!result) {
        throw new errorHelpers_1.default(http_status_codes_1.default.NOT_FOUND, "User does not exist.");
    }
    return result;
});
const getMe = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true
        }
    });
    if (!result) {
        throw new errorHelpers_1.default(http_status_codes_1.default.NOT_FOUND, "User does not exist.");
    }
    return result;
});
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.update({
        where: {
            id
        },
        data: payload
    });
    if (!result) {
        throw new errorHelpers_1.default(http_status_codes_1.default.NOT_FOUND, "User does not exist.");
    }
    return result;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.prisma.user.delete({
        where: {
            id
        }
    });
    return result;
});
exports.UserService = {
    createUser,
    getAllFromDB,
    getUserById,
    updateUser,
    deleteUser,
    getMe
};
