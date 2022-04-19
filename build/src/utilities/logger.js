"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * logs to console
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
function logger(req, res, next) {
    //   console.log(` Going to ${req.url}`);
    //   console.log(` Status ${res.statusCode}`);
    // prevent middleware from stucking here
    next();
}
exports.default = logger;
//# sourceMappingURL=logger.js.map