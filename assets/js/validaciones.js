var expr = /^ [a-zA-Zo-9_\.\-]+@[a-zA-zo-9\-]+\. [a-zA-Zo-9\-\.]+$/;

$(document).ready(function () {
  $(document).ready(function () {
    $("#bEnviar").click(function () {
      var nombre = $("#nombre").val();
      var correo = $("#id").val();
      var asunto = $("#descripcion-de-cat").val();
      if (nombre == "") {
        $("#mensaje1").fadeIn();
        alert('Debe completar la seccion ' +  $(this).attr('name') + ' - Developed by John Sansó');
        $(this).focus();
        return false;
      } else {
        $("#mensaje2").fadeOut();
      }
      if (correo == "" || expr.test(correo)) {
        $("#mensaje2").fadeIn();
        alert('Debe completar la seccion ' +  $(this).attr('name') + ' - Developed by John Sansó');
        $(this).focus();
        return false;
      } else {
        $("#mensaje2").fadeOut();
      }
      if (asunto == "") {
        $("#mensaje3").fadeIn();
        alert('Debe completar la seccion ' +  $(this).attr('name') + ' - Developed by John Sansó');
        $(this).focus();
        return false;
      }
    });
  });
});
