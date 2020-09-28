var btn = document.querySelector('.button');
btn.onclick = function(){
    ['name'].forEach(function(item){localStorage.removeItem(item);})};