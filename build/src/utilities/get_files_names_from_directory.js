"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
/**
 * gets the name of the files in a specified directory
 *
 * @export
 * @param {string} dir the directory to get fil names from
 * @return {*}  {Array<string>}
 */
function getAvailableFiles(dir) {
    const images = [];
    fs_1.default.readdirSync(dir).forEach((file) => {
        images.push(file.split(".")[0]);
    });
    return images;
}
exports.default = getAvailableFiles;
//# sourceMappingURL=get_files_names_from_directory.js.map