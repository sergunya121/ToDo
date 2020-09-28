var themes = document.querySelector('.themes-li');
var header = document.querySelector('.header');
var addBtn = document.querySelector('.button-add');
var nav = document.querySelector('.nav');
var colorHead = '#5B7EFA';
var colorAdd = '#7AE7FF';
if (localStorage.getItem("colorH") != undefined && localStorage.getItem("colorA") != undefined) {
  header.style.backgroundColor = JSON.parse(localStorage.getItem('colorH'));
  addBtn.style.backgroundColor = JSON.parse(localStorage.getItem('colorA'));
  nav.style.backgroundColor = JSON.parse(localStorage.getItem('colorH'));
}   else {
        header.style.backgroundColor = colorHead;
        addBtn.style.backgroundColor = colorAdd;
        nav.style.backgroundColor = colorHead;
}
var blueTheme = document.querySelector('.blue');
var greenTheme = document.querySelector('.green');
var yellowTheme = document.querySelector('.yellow');
var orangeTheme = document.querySelector('.orange');
var redTheme = document.querySelector('.red');
function changeTheme(){
    greenTheme.onclick = function(){
    colorHead = '#4ce92c';
    colorAdd = 'rgb(94, 241, 94)';
    header.style.backgroundColor = colorHead;
    addBtn.style.backgroundColor = colorAdd;
    nav.style.backgroundColor = colorHead;
    localStorage.setItem('colorH', JSON.stringify(colorHead));
    localStorage.setItem('colorA', JSON.stringify(colorAdd));
};
blueTheme.onclick = function(){
    colorHead = '#5B7EFA';
    header.style.backgroundColor = colorHead;
    localStorage.setItem("colorH", JSON.stringify(colorHead));
    colorAdd = '#7AE7FF';
    addBtn.style.backgroundColor = colorAdd;
    localStorage.setItem('colorA', JSON.stringify(colorAdd));
    nav.style.backgroundColor = colorHead;
}
yellowTheme.onclick = function(){
    colorHead = '#faea5b';
    header.style.backgroundColor = colorHead;
    localStorage.setItem("colorH", JSON.stringify(colorHead));
    colorAdd = '#fff67a';
    addBtn.style.backgroundColor = colorAdd;
    localStorage.setItem('colorA', JSON.stringify(colorAdd));
    nav.style.backgroundColor = colorHead;
};
orangeTheme.onclick = function(){
    colorHead = '#fa955b';
    header.style.backgroundColor = colorHead;
    localStorage.setItem("colorH", JSON.stringify(colorHead));
    colorAdd = '#ffb67a';
    addBtn.style.backgroundColor = colorAdd;
    localStorage.setItem('colorA', JSON.stringify(colorAdd));
    nav.style.backgroundColor = colorHead;
};
redTheme.onclick = function(){
    colorHead = '#fa5b5b';
    header.style.backgroundColor = colorHead;
    localStorage.setItem("colorH", JSON.stringify(colorHead));
    colorAdd = '#ff7a7a';
    addBtn.style.backgroundColor = colorAdd;
    localStorage.setItem('colorA', JSON.stringify(colorAdd));
    nav.style.backgroundColor = colorHead;
};};
changeTheme();


    