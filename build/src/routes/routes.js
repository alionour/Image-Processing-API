"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_1 = __importDefault(require("./api/api"));
// eslint-disable-next-line new-cap
const routes = (0, express_1.Router)();
routes.get("/", function (_req, res) {
    res.send({ 'result': "Entry Point" });
});
routes.use("/api", api_1.default);
exports.default = routes;
//# sourceMappingURL=routes.js.map