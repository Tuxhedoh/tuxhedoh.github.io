$(".fa-plus").click(function(){
     $('input[type="text"]').fadeToggle();
});

$('ul').on("click", "li", function(){
     $(this).toggleClass("completed")
});


$('ul').on("click", "span", function(event){
     $(this).parent().fadeOut(500,function(){
          $(this).remove();
     })
     event.stopPropagation();
});

$('input[type="text"]').keypress(function(event){
     if(event.which === 13){
          var toDoText =$(this).val()
          $(this).val("");
          //create new li and add to UL
          $('ul').append("<li><span><i class='fa fa-trash-alt'></i></span>"+toDoText+"</li>")
     }
});
