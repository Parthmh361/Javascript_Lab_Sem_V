// ui.js — handles dynamic UI and responsive design behavior
import { highlightActiveSession } from './timer.js';

// Function to change background color based on screen size
export function handleViewportChange() {
	const width = window.innerWidth;
	// If screen width < 600px, apply a light blue background
	if (width < 600) {
		document.body.style.background = '#f0f8ff';
	} else {
		// For larger screens, use white background
		document.body.style.background = 'white';
	}

	// Responsive font size: smaller text on very narrow screens
	if (width < 500) {
		document.body.style.fontSize = '18px';
	} else {
		// Reset to default (inherits from CSS/user-agent)
		document.body.style.fontSize = '';
	}
}

// Function to add dynamic behavior (event delegation)
export function addDynamicSessions() {
const sessionsDiv = document.getElementById('sessions');
// Add event listener to parent container (event delegation)
sessionsDiv.addEventListener('click', (e) => {
// Check if clicked element has class "session"
if (e.target.classList.contains('session')) {
alert("You selected: " + e.target.textContent);
}
});

 // Enable "Add Session" button to create new sessions dynamically
 const addBtn = document.getElementById('addSessionBtn');
 if (addBtn) {
 addBtn.addEventListener('click', () => {
 // Ask user for session title and time
 const title = (prompt('Enter session title:', 'New Topic') || '').trim();
 const timeInput = (prompt('Enter session time (HH:MM 24h):', '12:00') || '').trim();

 // Basic validation for inputs
 if (!title) {
 alert('Session title is required.');
 return;
 }

 const timeMatch = timeInput.match(/^([0-1]?\d|2[0-3]):([0-5]\d)$/);
 if (!timeMatch) {
 alert('Invalid time. Please use HH:MM in 24-hour format (e.g., 09:30, 14:05).');
 return;
 }

 // Normalize time to HH:MM (zero-padded)
 const hour = String(parseInt(timeMatch[1], 10)).padStart(2, '0');
 const minute = timeMatch[2];
 const normalizedTime = `${hour}:${minute}`;

 // Create the new session element
 const newSession = document.createElement('div');
 newSession.className = 'session';
 newSession.dataset.time = normalizedTime;
 newSession.textContent = `${title} - ${normalizedTime}`;

	// Append to the sessions container
	sessionsDiv.appendChild(newSession);
	// Immediately re-check active session highlight
	try { highlightActiveSession(); } catch (_) { /* no-op */ }
 });
 }
}