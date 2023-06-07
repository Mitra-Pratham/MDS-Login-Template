$('input:checkbox').on('click', function(e){
    toggleItems(`.${e.target.id}`);
})

$('.password-icon').on('click', function(){
   if($('.password-icon img').attr('src') === 'img/password-show.svg')
   {
    $('#psw').attr('type','text');
    $('.password-icon img').attr('src','img/password-hide.svg')
   }
   else{
    $('#psw').attr('type','password');
    $('.password-icon img').attr('src','img/password-show.svg')
   }
})

function toggleItems(val){
    $(val).toggle();
}

function openErrorMessage(){
    toggleItems('.error-message');

    $('input').css('border-color','red');

    setTimeout(() => {
        toggleItems('.error-message');
    }, 8000);
}

