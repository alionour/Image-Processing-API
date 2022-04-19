"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../../src/app"));
describe('API ROUTING TESTING', () => {
    it('GET /api', (done) => {
        (0, supertest_1.default)(app_1.default).get('/api').expect(200).end(function (err, res) {
            //   if (err) return done(err);
            return done();
        });
    });
    it('GET /api/images', (done) => {
        (0, supertest_1.default)(app_1.default).get('/api/images/').expect(200).end(function (err, res) {
            //   if (err) return done(err);
            return done();
        });
    });
    it('GET /api/images/resize', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get(`/api/images/resize?filename=fjord&width=600&height=501`)
            .expect(200)
            .end(function (err, _res) {
            if (err)
                throw err;
            done();
        });
    });
    it('GET /api/images/rotate', (done) => {
        (0, supertest_1.default)(app_1.default)
            .get(`/api/images/rotate?filename=fjord&angle=45`)
            .expect(200)
            .end(function (err, _res) {
            if (err)
                throw err;
            done();
        });
    });
});
//# sourceMappingURL=apiSpec.js.map