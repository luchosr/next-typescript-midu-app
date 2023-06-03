// src/mocks/browser.js
import { setupServer } from 'msw/node';
import { handlers } from './handlers/index';

// This configures a Service Worker with the given request handlers.
export const mswServer = setupServer(...handlers);
