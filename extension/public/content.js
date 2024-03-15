
const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', () => {
    alert('Button clicked!');
});

const issueHeader = document.querySelector('.Layout-sidebar');

if (issueHeader) {
    // Append the button to the issue header
    issueHeader.insertBefore(button, issueHeader.firstChild);
}
