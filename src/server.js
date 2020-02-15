const express = require('express');
const next = require('next');
const path = require('path');
const robots = require('express-robots-txt');

const compression = require('compression');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const ServiceWorker = app => (req, res) => {
  const filePath = path.join(__dirname, '.next', 'service-worker.js');
  app.serveStatic(req, res, filePath);
};

app
  .prepare()
  .then(() => {
    const server = express();

    if (dev) {
      server.use(robots({ UserAgent: '*', Disallow: '/' }));
    }

    server.use(compression());

    const robotsOptions = {
      root: `${__dirname}/static/`,
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      },
    };
    server.get('/robots.txt', (req, res) => res.status(200).sendFile('robots.txt', robotsOptions));

    // handle next files
    server.get('/_next/*', (req, res) => handle(req, res));

    server.get('/search', (req, res) => {
      const queryParams = { q: req.query.q };
      app.render(req, res, '/search', queryParams);
    });

    // match /page/subpage/sub_sub...
    // make sure req.url contains only leters, numbers and `-_` symbols
    server.get('(*/)?:slug([a-zA-Z0-9-_]+)', (req, res) => {
      const queryParams = { slug: req.params.slug, apiRoute: 'pages' };
      app.render(req, res, '/page', queryParams);
    });

    // ServiceWorker
    server.get('/service-worker.js', ServiceWorker(app));

    // Fallback handler
    server.get('*', (req, res) => handle(req, res));

    // Listen on the default port (3000)
    server.listen(port, err => {
      if (err) throw err;
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error(err.stack);
    process.exit(1);
  });
