$(document).ready(function(){
      $('button').on('click', function(){
          var firstname = $('#firstname').val();
          var lastname = $('#lastname').val();
          var email = $('#email').val();
          var contact = $('#contact').val();
          var new_something = "<tr><td>" + firstname + "</td><td>" + lastname + "</td><td>" + email + "</td><td>" + contact;
          $('table thead').append(new_something);
          //return false;
      });
});
