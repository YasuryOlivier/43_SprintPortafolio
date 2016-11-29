$(document).ready(function(){
	//alert("hola");
	//agrega y quita color
	$("li").mouseenter(function(){
        $("li").fadeTo("fast", .5);
        });
    $("li").mouseleave(function(){
        $("li").fadeTo("fast", .5);
        });

    //menú
    $('.tit').hover(
    function(){
    $(this).addClass('blanco');
    },
    function(){
    $(this).removeClass('blanco');    
    });

	//coloca y quita sombra a img
	//$("img").mouseenter(function(){
    //    $("img").fadeTo("fast", 1);
    //    });
    //$("img").mouseleave(function(){
    //   $("img").fadeTo("fast", .5);
    //    }); 
    //agrega tarea
     $("button").click(function(){
        var agregar=$('input[name=checkListItem]').val();
        $(".list").append("<div class=item>" + agregar + "</div>");
        });
        $(document).on("click",".item", function(){
            $(this).remove();
          });
    //muestra y oculta objetos 
     $('.pull').click(function(){
       $('.panel').slideToggle('slow');
       });
});