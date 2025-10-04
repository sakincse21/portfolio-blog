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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const db_1 = require("../../configs/db");
const errorHelpers_1 = __importDefault(require("../../errorHelpers"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../../utils/jwt");
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const ifUserExists = yield db_1.prisma.user.findUnique({
        where: {
            email: payload.email
        }
    });
    if (!(ifUserExists === null || ifUserExists === void 0 ? void 0 : ifUserExists.id)) {
        throw new errorHelpers_1.default(http_status_codes_1.default.UNAUTHORIZED, "User not found.");
    }
    const passCheck = bcrypt_1.default.compare(payload.password, ifUserExists === null || ifUserExists === void 0 ? void 0 : ifUserExists.password);
    if (!passCheck) {
        throw new errorHelpers_1.default(http_status_codes_1.default.UNAUTHORIZED, "Wrong Password.");
    }
    const jwtPayload = {
        userId: ifUserExists.id,
        role: ifUserExists.role,
        email: ifUserExists.email
    };
    const { password } = ifUserExists, user = __rest(ifUserExists, ["password"]);
    const accessToken = (0, jwt_1.generateToken)(jwtPayload);
    return {
        user, accessToken
    };
});
exports.AuthService = {
    login
};
