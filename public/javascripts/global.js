$(document).ready(function() {
    // When a button is clicked with a id below, execute the corresponding function
    $('#loginSubmit').on('click', userLogin);
});


function getUserData(event){
  var name = $('#Username').text();
  var user = {
    'username' : name
  }
  //send a post request to /getdata route using ajax
  $.ajax({
    type: 'POST',
    data: user,
    url: '/getData',
    datatype: 'json',
    success: function(response){
      if (response.success == true){
        //get data and display in tables
        for (var i in response.docdata){
          console.log(response.docdata[i].dumbbell_bench_press);
          console.log(response.docdata[i].dumbbell_lunges);
          var col = $("<td />");
          $("#result").append(col);
          col.append($("<tr>" + response.docdata[i].dumbbell_bench_press + "</tr>"));
        }
      }
      else{
        alert('Cannot pull user data. ')
      }
    },
    error: function(response){
      alert('Error: ' + response.msg);
    }
  });

};

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
};
