import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

app.use(routes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(5000);
}

module.exports = app;
