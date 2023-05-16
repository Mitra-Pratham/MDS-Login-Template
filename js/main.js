$('input:checkbox').on('click', function(e){
    toggleItems(`.${e.target.id}`);
})

function toggleItems(val){
    $(val).toggle();
}