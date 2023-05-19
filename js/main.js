$('input:checkbox').on('click', function(e){
    toggleItems(`.${e.target.id}`);
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

