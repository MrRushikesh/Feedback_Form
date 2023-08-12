document.getElementById('registrationForm').addEventListener("submit",function(event){

    var isValid = true; 



    var email = document.getElementById('email').value;
    var fname = document.getElementById('fname').value;
    var sdetails = document.getElementById('sdetails').value;
    var sfeedback = document.getElementById('sfeedback').value;
    var srating = document.querySelector('input[name="rating"]:checked');
    var topicRating = document.querySelector('input[name="topic-rating"]:checked'); 
    var trainerRating = document.querySelector('input[name="trainer-rating"]:checked');
    var suggestion = document.getElementById('suggestion').value;
    var testtimonial = document.getElementById('testimonial').value;


    var emailError = document.getElementById('emailError');
    var fnameError = document.getElementById('fnameError');
    var sdetailsError = document.getElementById('sdetailsError');
    var sfeedbackError = document.getElementById('sfeedbackError');
    var sratingError = document.getElementById('sratingError');
    var topicratingError = document.getElementById('topicratingError');
    var trainerRatingError = document.getElementById('trainerRatingError');
    var suggestionError = document.getElementById('suggestionError');
    var testimonialError = document.getElementById('testimonialError');

    emailError.textContent = '';
    fnameError.textContent = '';
    sdetailsError.textContent = '';
    sfeedbackError.textContent = '';
    topicratingError.textContent = '';
    trainerRatingError.textContent = '';
    suggestionError.textContent = '';
    testimonialError.textContent = '';


    
    if(!/\S+@\S+\.\S+/.test(email)){
        emailError.textContent = "This is a required";
        isValid = false;
    }

    if(fname.trim() === ''){
        fnameError.textContent = "This is a Required";
        isValid = false;
    }

    if(sdetails === ''){
        sdetailsError.textContent = "This is a Required";
        isValid = false;

    }

    if(sfeedback.trim() === ''){
        sfeedbackError.textContent = "This is a Required";
        isValid = false;
    }

    if(!(srating)){
        sratingError.textContent = "This is a Required";
        isValid = false;
    }

    if(!(topicRating)){
        topicratingError.textContent = "This is Required";
        isValid = false;
    }

    if(!(trainerRating)){
        trainerRatingError.textContent = "This is Required";
    }

    if(suggestion === ''){
        suggestionError.textContent = "This is a Required";
        isValid = false;

    }

    if(testtimonial === ''){
        testimonialError.textContent = "This is Required";
        isValid = false;
    }

    if(!(isValid)){
        event.preventDefault();
    }else{
        alert("Thank You for Your Valuable Feedback...");
    }
})