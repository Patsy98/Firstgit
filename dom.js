//EXAMINE THE DOCUMENT OBJECT//
//console.dir(document);

//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent ="List of Item";
//var header=document.getElementById('main-header');


//header.style.borderBottom = ' solid 3px #000'

var element=document.getElementsByClassName('title');
console.log(element);
console.log(element[0]);
element[0].style.fontWeight ='bold';
element[0].style.color='green';

var element1=document.getElementsByClassName('list-group-item');
console.log(element1);
element1[2].style.backgroundColor='green';

for(var i=0;i<element1.length;i++){
    element1[i].style.fontWeight = 'bold';

}