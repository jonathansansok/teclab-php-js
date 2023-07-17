$("form#form-catgs").on("submit",function(){
  const nombre = $.trim($("#nombre-de-categoria").val());
  const error = []
  if(nombre === ""){
      error.push("por favor, complete el nombre")
  }
  if(error.length > 0){
      alert(error.join("\n"));
      return false;
  }
  return true;
})

$("form#form-prods").on("submit",function(){
  const nombre = $.trim($("#nombre-producto").val())
  const stock = $("#stock-producto").val()
  const categoria =  $("#categoria-producto").val()
  const imagen = $("#imagen-producto").val()
  const precio = $("#precio-producto").val()
  const error = []
  if(nombre == ""){
      error.push("por favor, complete el nombre")
  }
  if(stock < 1 ){
      error.push("por favor, ingrese un stock que corresponda")
  }
  if(categoria == null || categoria == ""){
      error.push("por favor, seleccione una categoria")
  }
  if(imagen == ""){
      error.push("por favor, ingrese una imagen")
  }
  if(precio < 1 ){
      error.push("por favor, ingrese precio")
  }
  if(error.length > 0){
      alert(error.join("\n"));
      return false;
  }
  return true;
})


