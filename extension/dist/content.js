// content.js

// Create a button element
const button = document.createElement('button');
button.textContent = 'Click me'; // Set the text content of the button

// Add event listener to the button
button.addEventListener('click', () => {
    // This function will execute when the button is clicked
    alert('Button clicked!');
});

// Find the element on the GitHub issues page where you want to insert the button
// For example, if you want to insert it into the issue header, you might do something like this:
const issueHeader = document.querySelector('.Layout-sidebar');

// Check if the issue header exists before appending the button
if (issueHeader) {
    // Append the button to the issue header
    issueHeader.insertBefore(button, issueHeader.firstChild);
}
