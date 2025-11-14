// Import functions from timer.js and ui.js modules
import { startCountdown, highlightActiveSession } from './timer.js';
import { handleViewportChange, addDynamicSessions } from './ui.js';
// Select the countdown display element from the DOM
const countdownDisplay = document.getElementById('countdown');
// Start countdown for next class (e.g., 5 minutes = 300 seconds)

startCountdown(300, countdownDisplay);
// Highlight the active session every minute automatically
setInterval(highlightActiveSession, 60000); // recheck every 60 seconds
highlightActiveSession(); // run once immediately on load
// Handle screen resizing for responsive behavior
window.addEventListener('resize', handleViewportChange);
handleViewportChange(); // run on page load as well
// Enable event delegation on session elements
addDynamicSessions();