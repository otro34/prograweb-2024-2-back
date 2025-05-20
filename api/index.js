import app from '../../app.js';
import { createServer } from 'http';
import { parse } from 'url';

export default function handler(req, res) {
  // Let Express handle the request
  app(req, res);
}
