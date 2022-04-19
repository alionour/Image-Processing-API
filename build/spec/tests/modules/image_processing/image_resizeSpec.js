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
const fs_1 = __importDefault(require("fs"));
const app_1 = __importDefault(require("../../../../src/app"));
const supertest_1 = __importDefault(require("supertest"));
const images_resize_1 = require("../../../../src/modules/images_processing/images_resize");
/**
     * creates a folder if not exists
     *
     * @param {string} directory
     * @return {*}  {Promise<boolean>}
     */
function createFolderIfNotExists(directory) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!fs_1.default.existsSync('./assets/test')) {
                fs_1.default.mkdirSync(directory, {
                    recursive: true,
                });
                return true;
            }
            return true;
        }
        catch (error) {
            return false;
        }
    });
}
describe('IMAGES PROCESSING', () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    beforeAll((done) => {
        try {
            createFolderIfNotExists('./assets/test/images/thumbnails/')
                .then((exists) => __awaiter(void 0, void 0, void 0, function* () {
                if (exists) {
                    console.log('folder created');
                    fs_1.default.copyFile('./assets/images/fjord.jpg', './assets/test/images/fjord.jpg', (err) => {
                        if (err)
                            throw err;
                        console.log('Image was copied to ./assets/test/images/');
                    });
                }
            }));
            done();
        }
        catch (error) {
            throw error;
        }
    });
    describe('Images', () => {
        it('GET /api/images/resize', (done) => {
            console.log('cwd' + process.cwd());
            (0, supertest_1.default)(app_1.default)
                .get(`/api/images/resize?filename=fjord&width=600&height=501&target=./assets/test/images/thumbnails/)`)
                .expect(200)
                .end(function (err, _res) {
                if (err)
                    throw err;
                done();
            });
        });
        it('GET /api/images/rotate', (done) => {
            console.log(process.cwd());
            (0, supertest_1.default)(app_1.default)
                .get(`/api/images/rotate?filename=fjord&angle=45&target=./assets/test/images/thumbnails/)`)
                .expect(200)
                .end(function (err, _res) {
                if (err)
                    throw err;
                done();
            });
        });
    });
    it('should return metadata', () => __awaiter(void 0, void 0, void 0, function* () {
        const metadata = yield (0, images_resize_1.getFileMetadata)('./assets/images/fjord.jpg');
        expect(metadata !== null).toBeTrue();
    }));
    afterAll(() => {
        // deletes test folder
        fs_1.default.rmSync('./assets/test', { recursive: true, force: true });
    });
});
//# sourceMappingURL=image_resizeSpec.js.map