

var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
var expr1 = /^[a-zA-Z]*$/;
$(document).ready(function () {
    $("#boton").click(function (){ 
        var correo = $("#inputEmail").val();
        var passw = $("#inputPassword").val();
 
        $(".alert-danger").fadeOut();
        $(".alert-success").fadeOut();

 
                if(correo == "" || !expr.test(correo)){
                    $(".alert-danger").fadeIn("slow");
                    return false;
                }
                else{
                    $(".alert-danger").fadeOut();
                    $(".alert-success").fadeIn();
 
                    if(passw == "" || !expr1.test(passw)){
                        $(".alert-danger").fadeIn("slow");
                        return false;
                    }
                    else{
                      $(".alert-danger").fadeOut();
                      $(".alert-success").fadeIn();
                    }
                }

 
    });//fin click
 
    $("#inputPassword").keyup(function(){
        if( $(this).val() != "" && expr1.test($(this).val())){
            $(".alert-danger").fadeOut();
            $(".alert-success").fadeIn();
            return false;
        }
    });
  
});//fin ready


















