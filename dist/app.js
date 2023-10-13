"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const wikipedia_1 = __importDefault(require("./api/wikipedia"));
const error_1 = require("./middlewares/error");
const database_1 = require("./config/database");
const app = (0, express_1.default)();
app.use("/api", wikipedia_1.default);
app.use(error_1.errorHandler);
(0, database_1.connectToDB)(() => {
    app.listen(3000, () => console.log("Server started on: http://localhost:3000/"));
});
