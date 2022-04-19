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
const express_1 = require("express");
const images_resize_1 = __importDefault(require("../../../modules/images_processing/images_resize"));
const express_validator_1 = require("express-validator");
const get_files_names_from_directory_1 = __importDefault(require("../../../utilities/get_files_names_from_directory"));
const images_rotate_1 = __importDefault(require("../../../modules/images_processing/images_rotate"));
const imagesRoutes = (0, express_1.Router)();
imagesRoutes.get("/", (req, res) => {
    res.send({ result: "images routes" });
});
// requires [filename. width ,height , target[optional]] and returns a json object
imagesRoutes.get("/resize", (0, express_validator_1.check)("filename", `filename does not exist try a different filename 
  through the following available choices [${(0, get_files_names_from_directory_1.default)("./assets/images")}]`)
    .exists()
    .isIn((0, get_files_names_from_directory_1.default)("./assets/images")), (0, express_validator_1.check)("width", "width must be a positive number and bigger than 0 ")
    .exists()
    .isInt({ min: 1 }), (0, express_validator_1.check)("height", "Height must be a positive number and  bigger than 0 ")
    .exists()
    .isInt({ min: 1 }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            result: "Something ewent wrong",
            errors: errors.array(),
        });
    }
    const filename = (_a = req.query) === null || _a === void 0 ? void 0 : _a.filename;
    const width = parseInt((_b = req.query) === null || _b === void 0 ? void 0 : _b.width);
    const height = parseInt((_c = req.query) === null || _c === void 0 ? void 0 : _c.height);
    const target = (_d = req.query) === null || _d === void 0 ? void 0 : _d.target;
    const filePath = "./assets/images/" + filename + ".jpg";
    res.sendFile(yield (0, images_resize_1.default)({
        source: filePath,
        target: target,
        height: height,
        width: width,
    }), { root: "./" });
}));
// requires [filename , angle , target[optional]] ] and returns a json object
imagesRoutes.get("/rotate", (0, express_validator_1.check)("filename", `filename does not exist try a different filename 
  through the following available choices [${(0, get_files_names_from_directory_1.default)("./assets/images")}]`)
    .exists()
    .isIn((0, get_files_names_from_directory_1.default)("./assets/images")), (0, express_validator_1.check)("angle").exists().isInt({
    min: 1,
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f, _g;
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            result: "Something ewent wrong",
            errors: errors.array(),
        });
    }
    const filename = (_e = req.query) === null || _e === void 0 ? void 0 : _e.filename;
    const angle = parseInt((_f = req.query) === null || _f === void 0 ? void 0 : _f.angle);
    const target = (_g = req.query) === null || _g === void 0 ? void 0 : _g.target;
    const filePath = "./assets/images/" + filename + ".jpg";
    res.sendFile(yield (0, images_rotate_1.default)({
        source: filePath,
        target: target,
        angle: angle,
    }), { root: "./" });
}));
exports.default = imagesRoutes;
//# sourceMappingURL=images.js.map