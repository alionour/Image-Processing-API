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
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const check_if_file_exists_1 = __importDefault(require("../../utilities/check_if_file_exists"));
const get_metadata_1 = __importDefault(require("../../utilities/get_metadata"));
/**
 *
 *
 * @param {ResizeImageParameters} params
 * @return {*}  {(Promise<string|never>)}
 */
function rotateImage(params) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const filePath = params.source;
            const angle = params.angle;
            const metadata = yield (0, get_metadata_1.default)(params.source);
            const fileName = path_1.default.basename(filePath).split(".")[0];
            const target = ((_a = params.target) !== null && _a !== void 0 ? _a : "./assets/images/thumbnails/") +
                `${fileName}.angle.${angle}.${metadata === null || metadata === void 0 ? void 0 : metadata.format}`;
            // checks if image exists at thumbnails folder if not creates one
            const exists = yield (0, check_if_file_exists_1.default)(target);
            if (!exists) {
                yield (0, sharp_1.default)(filePath).rotate(angle).toFile(target);
            }
            return target;
        }
        catch (err) {
            if (err)
                console.log(`An error occurred during processing: ${err}`);
            throw err;
        }
    });
}
exports.default = rotateImage;
//# sourceMappingURL=images_rotate.js.map