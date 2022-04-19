import { Request, Response } from "express";
/**
 * logs to console
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */
function logger(req: Request, res: Response, next: Function): void {
    console.log(`${req.method}| ${req.url}`);
  // prevent middleware from stucking here
  next();
}

export default logger;
