document.addEventListener('DOMContentLoaded', function(){
    var modals = document.querySelectorAll('.modal');
    Map.Modal.init(modals);

    var items =document.querySelectorAll('.collapsible');
    Map.Collapsible.init(items);


});