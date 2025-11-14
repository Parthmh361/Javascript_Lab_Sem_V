// helper.js — utility functions for formatting and logging

// Format a total number of seconds as M:SS
export function formatAsMinutesSeconds(totalSeconds) {
  const t = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(t / 60);
  const seconds = t % 60;
  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Log events with an ISO timestamp prefix
export function logEvent(message) {
  const ts = new Date().toISOString();
  // eslint-disable-next-line no-console
  console.log(`[${ts}] ${message}`);
}
