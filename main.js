$(document).ready(function(){
    $('form').submit(function(){
        $('table tbody').append("<tr> <td>" +  
                                 $('#first_name').val() + "</td> <td>" + 
                                 $('#last_name').val() + "</td> <td>" +
                                 $('#email_address').val() + "</td> <td>" +
                                 $('#contact_num').val() + "</td></tr>");
        return false;
    });
});