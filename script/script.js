// Function to submit the form with validation
function submitForm() {
    const form = document.getElementById('survey-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone-number');
    const ageInput = document.getElementById('age');
    const genderSelect = document.getElementById('gender');
    const occupationSelect = document.getElementById('occupation'); // Assuming this field exists
    const errorMsg = document.getElementsByClassName('error-msg')[0];
    const successMsg = document.getElementsByClassName('success-msg')[0];

    // Reset error message
    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';

    // Check if all fields are filled
    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || ageInput.value === '' || genderSelect.value === '' || occupationSelect.value === '') {
        errorMsg.style.display = 'inline';
        return false; // Prevent form submission
    }
    else{
        successMsg.style.display = 'inline';
        return true; // Prevent form submission
    }

    // Submit the form (assuming action attribute is set to a processing script)
    form.submit();

    // Display success message after successful submission (handled by processing script)
    successMsg.style.display = 'inline'; // Assuming success message is displayed on successful submission
}

