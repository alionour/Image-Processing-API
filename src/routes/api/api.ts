import { Router } from "express";
import imagesRoutes from "./images/images";

// eslint-disable-next-line new-cap
const apiRoutes = Router();

apiRoutes.use("/images", imagesRoutes);

apiRoutes.get("/", (_req, res) => {
  res.send({"result":"Api Routes"});
});
export default apiRoutes;
