$(document).on('click', '.mf_field_closer', function(e){
    e.preventDefault();

    $(this).parent().remove();
});