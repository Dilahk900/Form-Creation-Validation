document.addEventListener('DOMContentLoaded',function(){

  let form = document.getElementById('registration-form');
  let feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener("submit", function(event){
    //Form Submission Event Listener
    event.preventDefault();

    //User Inputs
    username = document.getElementById('username').value.trim();
    email = document.getElementById('email').value.trim();
    password = document.getElementById('password').value.trim();
    
    // Validation Variables
    let isValid = true;
    let messages = [];

    //Validations
    if(username.length < 3){
      isValid = false;
      messages.push('Username must be at least 3 letters !');
    }

    if(!email.includes('@') || !email.includes('.')){
      isValid = false;
      messages.push('Please enter a valid email address !');
    }

    if(password.length < 8){
      isValid = false;
      messages.push('Password must be at least 8 letters !');
    }    

    //Feedback Display
    feedbackDiv.style.display = "block";

    if(isValid){
      feedbackDiv.innerHTML = 'Registration successful!';
      feedbackDiv.color = "#28a745";
    } else{
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.color = "#dc3545";
    }

  });
});