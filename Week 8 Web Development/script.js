// Select the button and body
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

// Function to apply saved theme from localStorage
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.className = savedTheme;
  } else {
    body.className = 'light';  // Default theme
  }
}

// Function to toggle theme and save preference
function toggleTheme() {
  if (body.classList.contains('light')) {
    body.className = 'dark';
    localStorage.setItem('theme', 'dark');
  } else {
    body.className = 'light';
    localStorage.setItem('theme', 'light');
  }

  // Trigger animation on button
  themeBtn.classList.add('bounce');
  
  // Remove animation class after animation ends
  themeBtn.addEventListener('animationend', () => {
    themeBtn.classList.remove('bounce');
  }, { once: true });
}

// Apply saved theme on page load
applySavedTheme();

// Add event listener to button
themeBtn.addEventListener('click', toggleTheme);