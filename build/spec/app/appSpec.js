"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../src/app"));
it('expect myFunc(5) to equal 25', () => {
    expect((0, app_1.default)(5)).toEqual(25);
});
//# sourceMappingURL=appSpec.js.map