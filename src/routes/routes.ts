import {Router} from 'express';


// eslint-disable-next-line new-cap
const routes = Router();

routes.get('/', function(_req, res) {
  res.send('Entry Point');
});


export default routes;
