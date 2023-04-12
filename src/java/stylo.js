  alert('hello')
  
  
  document.getElementById("radio1").addEventListener("click", function() {
    document.getElementsByTagName("h1")[0].style.display = "block";
  });

  document.getElementById("radio2").addEventListener("click", function() {
    document.getElementsByTagName("h1")[0].style.display = "none";
  });

  document.getElementById("radio3").addEventListener("click", function() {
    document.getElementsByTagName("h1")[0].style.display = "none";
  });

  ///////////////////////// SHOW AND HIDE TABS //////////////////////////  -->
    function showH1() {
      document.getElementById("h1tag").style.display = "block";
      document.getElementById("h2tag").style.display = "none";
      document.getElementById("h3tag").style.display = "none";
    }

    function showH2() {
      document.getElementById("h1tag").style.display = "none";
      document.getElementById("h2tag").style.display = "block";
      document.getElementById("h3tag").style.display = "none";
    }

    function showH3() {
      document.getElementById("h1tag").style.display = "none";
      document.getElementById("h2tag").style.display = "none";
      document.getElementById("h3tag").style.display = "block";
    }
 


 ///////////////STUDENT SIGNUP /////////////////////////  -->

  // Get the login form and signup content elements
const loginForm = document.getElementById('login-form');
const signupContent = document.getElementById('signup-content');

// Get the signup link element
const signupLink = document.getElementById('signup-link');

// Add an event listener to the signup link
signupLink.addEventListener('click', function(event) {
event.preventDefault(); // prevent the link from redirecting

// Hide the login form
loginForm.style.display = 'none';

// Show the signup content
signupContent.style.display = 'block';
});

{/* <!-- ///////////////////////FACULTY SINGUP //////////////// --> */}


document.getElementById("signup-link2").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("login-form2").style.display = "none";
  document.getElementById("signup-form2").style.display = "block";
  document.getElementById("login-form3").style.display = "block";
  document.getElementById("signup-form3").style.display = "none";
});


{/* <!-- ///////////////////////ALUMNI SINGUP //////////////// --> */}

document.getElementById("signup-link3").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("login-form3").style.display = "none";
  document.getElementById("signup-form3").style.display = "block";
  document.getElementById("login-form2").style.display = "block";
  document.getElementById("signup-form2").style.display = "none";
});

{/* <!-- ///////////////////////OTHER PERSON SINGUP //////////////// --> */}

document.getElementById("signup-link4").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("login-form4").style.display = "none";
  document.getElementById("signup-form4").style.display = "block";
  document.getElementById("login-form3").style.display = "block";
  document.getElementById("signup-form3").style.display = "none";
});

{/* <!-- //////////////////////////////////HIGHLIGHT BUTTONS ///////////////////////////////// --> */}
    function highlightButton(btn) {
      // Remove the active class from all buttons
      var buttons = document.getElementsByClassName("btn-dark");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }

      // Add the active class to the clicked button
      btn.classList.add("active");
    }
 