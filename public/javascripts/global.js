$(document).ready(function() {
    // When a button is clicked with a id below, execute the corresponding function
    $('#loginSubmit').on('click', userLogin);
});


function userLogin(event){
  event.preventDefault();
  var errorCount = 0;
  $('#login form').each(function(index,val){

    if ($("#login form input#username").val() === '' || $("#login form input#password").val() === ''){
      errorCount++;
    }
  });
  if (errorCount === 0){
    // Create a user json object with username and password given by user
    var user = {
			'username': $('#login form input#username').val(),
			'password': $('#login form input#password').val()
    }
    //Send a post request to the /login route using ajax
    $.ajax({
			type: 'POST',
			data: user,
			url: '/login',
			datatype: 'json',
			success: function(response){
				if (response.success == true) {
          console.log(response);
					alert('Sucessfully Logged in');
					window.location.href = "/"
				}
				else {
					console.log(response);
					alert('Cannot Login, Username or Password is incorrect');
					window.location.href = "/login"
				}
			},
			error: function(response){
				alert('Error: ' + response.msg);
				window.location.href = "/login"
			}
		});
	}
	else{
		alert('Please fill in all required fields.');
		return false;
	}
}
