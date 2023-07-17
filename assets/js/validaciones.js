
 $(document).ready(function() {
    $('#form-catgs').submit(function(event){
        event.preventDefault();
        $('#form-catgs input[type="text"], #form-catgs textarea').each(function(){
          if($(this).val() === ''){
            alert('Please enter a value, cannot be empty - Developed by John Sansó');
            $(this).focus();
            return false;
          }   
        })
    })
    //////////////////////
    $('#form-prods').submit(function(event){
        event.preventDefault();
        $('#form-prods input[type="text"], #form-prods textarea').each(function(){
          if($(this).val() === ''){
            alert('Debe completar la seccion ' +  $(this).attr('name') + ' - Developed by John Sansó');
            $(this).focus();
            return false;
          }   
        })
    })
}) 
