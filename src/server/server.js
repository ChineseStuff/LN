import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../client/App';

const PORT = 5000;

const app = express();
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

app.use('/ssr', (req, res, next) => {
  debugger;
  fs.readFile(
    path.resolve(__dirname, '../../public/index.html'),
    'utf-8',
    (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Something went wrong');
      }
      return res.send(
        data.replace(
          '<div id="app"></div>',
          `<div id="app">${ReactDOMServer.renderToString(<App />)}</div>`
        )
      );
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} `);
});
