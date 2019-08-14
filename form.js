

 $('#for').hide();
    
    $(document).ready(function(){
        $(".add-row").click(function(){
          $('#for').hide();
            var name = $("#name").val();
            var lname = $("#lname").val();
            var email = $("#email").val();
            var markup = "<tr><td>" + name + "</td><td>" + email + "</td><td>Picture</td><td>empty</td></tr>";
        $("table tbody").append(markup);
     }) });
        
    
  $(document).ready(function(){
    $('#btnn').click(function(){
      var name = $("#name").val('');
            var lname = $("#lname").val('');
            var email = $("#email").val(''); 
    $('#for').show();
    });
  });