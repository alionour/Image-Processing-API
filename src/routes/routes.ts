import { Router } from "express";
import apiRoutes from "./api/api";

// eslint-disable-next-line new-cap
const routes = Router();

routes.get("/", function (_req, res) {
  res.send({'result':"Entry Point"});
});

routes.use("/api", apiRoutes);

export default routes;
