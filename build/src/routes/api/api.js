"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const images_1 = __importDefault(require("./images/images"));
// eslint-disable-next-line new-cap
const apiRoutes = (0, express_1.Router)();
apiRoutes.use("/images", images_1.default);
apiRoutes.get("/", (_req, res) => {
    res.send({ "result": "Api Routes" });
});
exports.default = apiRoutes;
//# sourceMappingURL=api.js.map