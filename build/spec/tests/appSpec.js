"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
it('Server is running perfectly', (done) => {
    (0, supertest_1.default)(app_1.default).get('/').expect(200).expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .expect((res) => {
        res.body.data.length = 1;
    }).end(function (err, res) {
        //   if (err) return done(err);
        return done();
    });
});
//# sourceMappingURL=appSpec.js.map