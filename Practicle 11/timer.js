// timer.js — contains countdown and session highlight logic
import { formatAsMinutesSeconds, logEvent } from './helper.js';
// Function to start a countdown timer
export function startCountdown(duration, display) {
let time = duration; // time in seconds
// setInterval() runs the code every 1 second
// Reset any previous styles
display.style.color = '';
display.style.fontWeight = '';
// Log start of countdown
try { logEvent(`Countdown started for ${duration} seconds`); } catch (_) { /* no-op */ }
const timer = setInterval(() => {
// Update countdown message on the page

display.textContent = `Next session starts in ${formatAsMinutesSeconds(time)}`;

 // Visual alert when less than 1 minute remains
 if (time < 60 && time >= 0) {
 display.style.color = '#d9534f'; // red
 display.style.fontWeight = 'bold';
 } else {
 display.style.color = '';
 display.style.fontWeight = '';
 }
time--; // decrease the timer each second
// Stop timer when it reaches 0
if (time < 0) {
clearInterval(timer);
display.textContent = "Session Started!";
 // Reset styling on completion
 display.style.color = '';
 display.style.fontWeight = '';
 try { logEvent('Countdown completed: Session Started'); } catch (_) { /* no-op */ }
}
}, 1000); // executes every 1000 milliseconds (1 second)
}

// Function to highlight the currently active session
export function highlightActiveSession() {
const sessions = document.querySelectorAll('.session'); // get all session elements
const now = new Date(); // get current date/time
const currentHour = now.getHours(); // extract current hour (24-hour format)
// Loop through all session divs
sessions.forEach(session => {
const hour = parseInt(session.dataset.time.split(':')[0]); // extract hour from data-time
// If current hour matches session time → highlight
if (hour === currentHour) {
session.classList.add('active');
} else {
session.classList.remove('active');
}
});
}