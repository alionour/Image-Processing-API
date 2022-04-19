import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/routes";
import logger from "./utilities/logger";
dotenv.config();

const app: express.Application = express();
const PORT: string | number | undefined = process.env.PORT || 3000;

// logs routing in console
app.use(logger);
// enables cors and parses responses
app.use(express.json());
app.use(cors());
app.use("/", routes);

// listens to app object
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
