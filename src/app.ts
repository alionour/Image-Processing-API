
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/routes';
dotenv.config();

const app:express.Application = express();
const PORT:string | undefined = process.env.PORT;
// enables cors and parses responses
app.use(cors, express.json());
app.use('/', routes);

// listens to app object
app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;


