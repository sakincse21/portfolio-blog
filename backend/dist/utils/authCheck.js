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
exports.authCheck = void 0;
const jwt_1 = require("../utils/jwt");
const errorHelpers_1 = __importDefault(require("../errorHelpers"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const db_1 = require("../configs/db");
const authCheck = (...authRoles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.cookies);
    const accessToken = req.cookies.accessToken || req.headers.authorization;
    // const accessToken = req.cookies?.accessToken;
    if (!accessToken) {
        throw new errorHelpers_1.default(http_status_codes_1.default.UNAUTHORIZED, "No token provided");
    }
    const verifiedToken = (0, jwt_1.verifyToken)(accessToken);
    if (!verifiedToken) {
        throw new errorHelpers_1.default(http_status_codes_1.default.UNAUTHORIZED, "User is not authorized.");
    }
    const ifUserExitst = yield db_1.prisma.user.findUnique({
        where: { id: verifiedToken.id, email: verifiedToken.email },
    });
    if (!(ifUserExitst === null || ifUserExitst === void 0 ? void 0 : ifUserExitst.id)) {
        throw new errorHelpers_1.default(http_status_codes_1.default.FORBIDDEN, "User does not exist.");
    }
    if (!authRoles.includes(ifUserExitst.role)) {
        throw new errorHelpers_1.default(http_status_codes_1.default.UNAUTHORIZED, "You do not have permission to access the endpoint.");
    }
    req.user = verifiedToken;
    console.log(req.user);
    next();
});
exports.authCheck = authCheck;
