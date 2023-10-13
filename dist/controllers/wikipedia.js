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
exports.getSummary = void 0;
const wikipedia_1 = __importDefault(require("wikipedia"));
const WikiSummary_1 = require("../models/WikiSummary");
const getSummary = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query } = req.query;
        if (!query) {
            res.status(400).json({
                message: "query parameter is required.",
            });
            return;
        }
        const normalized_query = query.toLowerCase();
        const doc = yield WikiSummary_1.WikiSummary.findOne({
            normalized_query,
        });
        if (!doc) {
            const page = yield wikipedia_1.default.page(query);
            const summary = yield page.summary();
            const result = Object.assign({ normalized_query }, summary);
            const newSummary = new WikiSummary_1.WikiSummary(result);
            newSummary.save();
            res.send(result);
            return;
        }
        res.send(doc);
        return;
    }
    catch (err) {
        next(err);
    }
});
exports.getSummary = getSummary;
