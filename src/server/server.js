import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import { api } from "./api";

import React from "react"; 
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { ItemsContextProvider } from '../frontend/context/ItemsContext';
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes";
import cors from "cors";

dotenv.config();

const { PORT, ENV } = process.env;

const app = express();

app.use(cors())

if (ENV === 'development') {
  console.log('Dev config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddelware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = { serverSideRender: true, publicPath };

  app.use(webpackDevMiddelware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

/**
 * Llamado de URLS de API
 */
app.use('/api', api);

/**
 * 
 * @param {String} html elemento que se va a renderizar en cliente
 * @returns La cadena de renderizado de server side render
 */
const setResponse = (html) => (`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="utf-8" />
      <link rel="icon" href="favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Web site created using create-react-app"/>
      <link rel="manifest" href="manifest.json" />
      <link rel="stylesheet" href="assets/app.css">
      <title>Mercado libre</title>
  </head>
  <body>
      <main id="root">${html}</main>
      <script src="assets/app.js" type="text/javascript"></script>
  </body>
  </html>
`)

/**
 * Renderiza elemento de React Server Side Rendering
 */
const renderApp = (req, res) => {
  const html = renderToString(
    <ItemsContextProvider>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(routes)}
      </StaticRouter>
    </ItemsContextProvider>,
  );
  res.send(setResponse(html))
}

/**
 * Realiza el llamado del SSR en cualquier dirección que llame el cliente
 */
app.get('*', renderApp);

/**
 * Monta aplicación en un puerto determinado
 */
app.listen(PORT, (err) => {
  if (err) return console.log(err);
  return console.log(`Sever listen in port ${PORT}`);
});
