import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import { api } from "./api";
import helmet from "helmet"; 
import path from 'path'
import React from "react"; 
import { renderToString } from "react-dom/server";
import { ItemsContextProvider } from '../frontend/context/ItemsContext';
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes";

dotenv.config();

const { PORT, ENV } = process.env;

const app = express();

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
} else {
  app.use(express.static(path.join(__dirname, '/public')))
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by')
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", "*"],
        scriptSrc: ["'self'", "*"],
        objectSrc: ["'none'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "*", "https://*", "data:"],
        fontSrc: ["'self'", '*', "https://*", "data:"],
        upgradeInsecureRequests: [],
      },
    })
  );
}

/**
 * Llamado de URLS de API
 */
app.use('/api', api);

const favicon = `
  <link rel="apple-touch-icon" sizes="57x57" href="/assets/icons/apple-touch-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/apple-touch-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="/assets/icons/apple-touch-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="/assets/icons/apple-touch-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="/assets/icons/apple-touch-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="167x167" href="/assets/icons/apple-touch-icon-167x167.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon-180x180.png">
  <link rel="apple-touch-icon" sizes="1024x1024" href="/assets/icons/apple-touch-icon-1024x1024.png">
  <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href="/assets/icons/apple-touch-startup-image-320x460.png">
  <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href="/assets/icons/apple-touch-startup-image-640x920.png">
  <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="/assets/icons/apple-touch-startup-image-640x1096.png">
  <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="/assets/icons/apple-touch-startup-image-750x1294.png">
  <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href="/assets/icons/apple-touch-startup-image-1182x2208.png">
  <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href="/assets/icons/apple-touch-startup-image-1242x2148.png">
  <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href="/assets/icons/apple-touch-startup-image-748x1024.png">
  <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href="/assets/icons/apple-touch-startup-image-1496x2048.png">
  <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href="/assets/icons/apple-touch-startup-image-768x1004.png">
  <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href="/assets/icons/apple-touch-startup-image-1536x2008.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="228x228" href="/assets/icons/coast-228x228.png">
  <link rel="manifest" href="/assets/manifest.json">
  <link rel="shortcut icon" href="/assets/favicon.ico">
  <link rel="yandex-tableau-widget" href="/assets/yandex-browser-manifest.json">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title">
  <meta name="application-name">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="msapplication-TileColor" content="#fff">
  <meta name="msapplication-TileImage" content="/assets/mstile-144x144.png">
  <meta name="msapplication-config" content="/assets/browserconfig.xml">
  <meta name="theme-color" content="#fff">
`

/**
 * 
 * @param {String} html elemento que se va a renderizar en cliente
 * @returns La cadena de renderizado de server side render
 */
const setResponse = (html) => (`
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="utf-8" />
      ${favicon}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="La comunidad de compra y venta online más grande de América Latina."/>
      <link rel="manifest" href="manifest.json" />
      <link rel="stylesheet" href="/assets/app.css">
      <title>Mercado libre</title>
      <base href="/">
  </head>
  <body>
      <main id="root">${html}</main>
      <script src="/assets/app.js" type="text/javascript"></script>
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
