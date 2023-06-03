// src/mocks/browser.js
import { setupWorker } from 'msw';
import { handlers } from './handlers/index';

// This configures a Service Worker with the given request handlers.
export const mswWorker = setupWorker(...handlers);
