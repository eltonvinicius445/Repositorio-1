import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Guard against "Converting circular structure to JSON" from HTML elements (e.g. HTMLButtonElement)
if (typeof window !== 'undefined') {
  const originalStringify = JSON.stringify;
  JSON.stringify = function (value: any, replacer?: any, space?: string | number) {
    const seen = new WeakSet();
    const safeReplacer = (key: string, val: any) => {
      if (val !== null && typeof val === 'object') {
        if (val instanceof HTMLElement || val?.constructor?.name?.includes('Element')) {
          return `[${val.constructor?.name || 'HTMLElement'}]`;
        }
        if (seen.has(val)) {
          return '[Circular]';
        }
        seen.add(val);
      }
      if (typeof replacer === 'function') {
        return replacer(key, val);
      }
      return val;
    };
    return originalStringify.call(
      this,
      value,
      typeof replacer === 'function' ? safeReplacer : (Array.isArray(replacer) ? replacer : safeReplacer),
      space
    );
  };

  window.addEventListener('unhandledrejection', (event) => {
    const reasonStr = event.reason ? String(event.reason.message || event.reason) : '';
    if (reasonStr.includes('Converting circular structure to JSON') || reasonStr.includes('HTMLButtonElement')) {
      console.warn('Caught and prevented circular structure rejection:', reasonStr);
      event.preventDefault();
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
