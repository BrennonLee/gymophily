$(document).ready(function() {
    // When a button is clicked with a id below, execute the corresponding function
    $('#loginSubmit').on('click', userLogin);
});

//get hashing file
$.getScript("/javascripts/md5.js", function(){
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
};


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
          var num = 0;
          $("#results tr").each(function(){
            var count = $(this);
            if (num == 0){
              //count.find('td').last().html("Weight/Time");
            }else if(num == 2){
              count.append("<td> 15 Min </td>");
            }else if(num == 3){
              count.append("<td>" + response.docdata[i].dumbbell_bench_press + "</td>");
            }else if(num == 4){
              count.append("<td>" + response.docdata[i].dumbbell_lunges + "</td>");
            }else if(num == 5){
              count.append("<td>" + response.docdata[i].wide_grip_lateral_pulldowns + "</td>" )
            }else if(num == 6){
              count.append("<td>" + response.docdata[i].bicep_curls_with_dumbbells + "</td>" )
            }else if(num == 7){
              count.append("<td>" + response.docdata[i].crunches + "</td>" )
            }else if(num == 8){
              count.append("<td>" + response.docdata[i].plank + "</td>" )
            }
          num ++;
          })
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
			'password': calcMD5($('#login form input#password').val())
      //hash password
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
