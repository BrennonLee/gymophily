$(document).ready(function() {
  // Authenticate that a user has login and dynamically change the HTML to show a logout button
  if ($('#Username').text() != '') {
    $('#CreateAccount').hide();
    $('#Login').html('Logout');
    $('#Login').on('click', function() {window.location.href = "/login"});
  }
});
