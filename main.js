// const formEl = document.querySelector(.form);

// formEl.addEventListener('submit', function(event) {
//   //prefent default behavior
//   event.preventDefault();
// })

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Collect form data
  var formData = {
    name: document.getElementById("name").value,
  };

  // Call the Google Apps Script function
  google.script.run
    .withSuccessHandler(onSuccess)
    .withFailureHandler(onFailure)
    .processForm(formData);
}

function onSuccess(response) {
  alert("Form submitted successfully!");
  // Handle success (e.g., display a success message, clear the form, etc.)
}

function onFailure(error) {
  alert("Form submission failed: " + error.message);
  // Handle failure (e.g., display an error message, etc.)
}
