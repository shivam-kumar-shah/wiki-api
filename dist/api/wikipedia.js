"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wikipedia_1 = require("../controllers/wikipedia");
const router = (0, express_1.Router)();
router.get("/wikipedia", wikipedia_1.getSummary);
exports.default = router;
