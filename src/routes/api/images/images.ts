import { Router } from "express";
import resizeImage from "../../../modules/images_processing/images_resize";
import validator, { check, validationResult } from "express-validator";
import fs from "fs";
import path from "path";
import getAvailableFiles from "../../../utilities/get_files_names_from_directory";
import rotateImage from "../../../modules/images_processing/images_rotate";
// eslint-disable-next-line new-cap
const imagesRoutes = Router();

imagesRoutes.get("/", (req, res) => {
  res.send({ result: "images routes" });
});

imagesRoutes.get(
  "/resize",
  check(
    "filename",
    `filename does not exist try a different filename 
  through the following available choices [${getAvailableFiles(
    "./assets/images"
  )}]`
  )
    .exists()
    .isIn(getAvailableFiles("./assets/images")),
  check("width", "width must be a positive number and bigger than 0 ")
    .exists()
    .isInt({ min: 1 }),
  check("height", "Height must be a positive number and  bigger than 0 ")
    .exists()
    .isInt({ min: 1 }),
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        result: "Something ewent wrong",
        errors: errors.array(),
      });
    }
    const filename: string = req.query?.filename as string;
    const width: number = parseInt(req.query?.width as string);
    const height: number = parseInt(req.query?.height as string);
    const target: string | undefined = req.query?.target as string | undefined;
    const filePath = "./assets/images/" + filename + ".jpg";

    res.sendFile(
      await resizeImage({
        source: filePath,
        target: target,
        height: height,
        width: width,
      }),
      { root: "./" }
    );
  }
);

imagesRoutes.get(
  "/rotate",
  check(
    "filename",
    `filename does not exist try a different filename 
  through the following available choices [${getAvailableFiles(
    "./assets/images"
  )}]`
  )
    .exists()
    .isIn(getAvailableFiles("./assets/images")),
  check("angle").exists().isInt({
    min: 1,
  }),
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        result: "Something ewent wrong",
        errors: errors.array(),
      });
    }
    const filename: string = req.query?.filename as string;
    const angle: number = parseInt(req.query?.angle as string);
    const target: string | undefined = req.query?.target as string | undefined;
    const filePath = "./assets/images/" + filename + ".jpg";

    res.sendFile(
      await rotateImage({
        source: filePath,
        target: target,
        angle: angle,
      }),
      { root: "./" }
    );
  }
);

export default imagesRoutes;
