import React from 'react';
import { renderToString } from 'react-dom/server';
// import Layout from '../components/Layout';

export default function jsxRender(pathToFile, initState, cb) {
  const component = require(pathToFile).default;
  const layout = React.createElement(component, { initState });
  const html = renderToString(layout);
  return cb(null, `<!DOCTYPE html>${html}`);
}
