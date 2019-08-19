
var pgcount=0;
 $('#for').hide();
    
    $(document).on( 'click', '.add-row' , function(){
        
          $('#for').hide();
            var name = $("#name").val();
            var lname = $("#lname").val();
            var email = $("#email").val();
            var markup = "<tr><td>" + name +" "+ lname+ "</td><td>" + email + "</td><td>Picture</td><td> <a class='edit' id='ed' </button> <i class='fa fa-edit' style='font-size:22px;color:blue'></i></span>  <a class='delete' id='de' </button> <span> <i class='fa fa-trash-o' style='font-size:22px;color:red'></i></span></td></tr>";
            $("table tbody").append(markup);
       
     });
        
     $(document).ready(function(){
      $(".cancel").click(function(){
        $('#for').hide();
         
   }) });
      
    
  $(document).ready(function(){
    $('#btnn').click(function(){
      var name = $("#name").val('');
            var lname = $("#lname").val('');
            var email = $("#email").val(''); 
    $('#for').show();
    });
  });

  $(document).on("click", ".edit", function(){		
    $(this).parents("tr").find("td:nth-child(1)").each(function(){
  $(this).html('<input type="text" class="input-small name"  placeholder="Full Name" value='+ $(this).text() +'>');
});	
$(this).parents("tr").find("td:nth-child(2)").each(function(){
  $(this).html('<input type="text" class="input-medium email" placeholder="email" value=' + $(this).text() + '>');
});	
$(this).parents("tr").find("td:nth-child(3)").each(function(){
  $(this).html('<input type="text" class="input-small picture" value= " picture">');
});	
// $(".btn-lg").attr("disabled", "disabled");

$(this).html(' <button type="button" class="btn btn-warning btn-small " id="update">SUB</button>');

});

$(document).on('click', '.delete', function () {
  alert("Do you really want to delete a Row!!");
$(this).closest('tr').remove();

});

$(document).on('click', '#update', function () {

  var name = $(".name").val();

  var email = $(".email").val();
  var picture= $(".picture").val();
  var markup = "<tr><td>" + name + "</td><td>" + email + "</td><td>"+picture+"</td><td> <a class='edit' id='ed' </button> <i class='fa fa-edit' style='font-size:22px;color:blue'></i></span>  <a class='delete' id='de' </button> <span> <i class='fa fa-trash-o' style='font-size:22px;color:red'></i></span></td></tr>";
  $("table tbody").append(markup); 
 // $(".btn-lg").attr("enabled", "enabled");
$(this).closest('tr').remove();
//return false;
});