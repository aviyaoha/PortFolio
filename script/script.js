// Function to display the thank you message
function showThankYouMessage() {
    // Display the thank you message
    const thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.style.display = 'block';

    // Clear the form inputs (assuming you have input fields with specific IDs)
    document.querySelector('input[name="uname"]').value = '';
    document.querySelector('input[name="umail"]').value = '';
    document.querySelector('input[name="usubject"]').value = '';
    document.querySelector('textarea[name="udetails"]').value = '';

    // Hide the thank you message after a few seconds (e.g., 5 seconds)
    setTimeout(function () {
        thankYouMessage.style.display = 'none';
    }, 5000);
}

// Attach the showThankYouMessage function to the button's click event
const ctbutton = document.getElementById('ctbutton');
ctbutton.addEventListener('click', showThankYouMessage);


const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}