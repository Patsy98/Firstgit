//EXAMINE THE DOCUMENT OBJECT//
//console.dir(document);

//getelementbyid

//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent ="List of Item";
//var header=document.getElementById('main-header');


//header.style.borderBottom = ' solid 3px #000'

//getelement by classname

/*var element=document.getElementsByClassName('title');
console.log(element);
console.log(element[0]);
element[0].style.fontWeight ='bold';
element[0].style.color='green';

var element1=document.getElementsByClassName('list-group-item');
console.log(element1);
element1[2].style.backgroundColor='green';

for(var i=0;i<element1.length;i++){
    element1[i].style.fontWeight = 'bold';

}*/

//getelementbytagname

/*var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[0]);
li[0].style.fontWeight ='bold';
li[0].style.color='green';


for(var i=0;i<li.length;i++){
    li[i].style.fontWeight = 'bold';

}*/

//var lists=document.querySelector('.list-group-item:nth-child(2)');
//lists.style.backgroundColor='green';

//var newlists=document.querySelector('.list-group-item:nth-child(3)');
//newlists.style.visibility='hidden';

//trversing the dom

var itemList=document.querySelector('#items');
//parent node
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4'
//console.log(itemList.parentNode.parentNode.parentNode)

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4'
//console.log(itemList.parentElement.parentElement.parentElement)

//Child nodes
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);
//itemList.children[1].style.backgroundColor='yellow';

//FirstElementchild

 //console.log(itemList.firstElementChild);

//privous sibling
//console.log(itemList.previousSibling);
//priviousElementSibling
//console.log(itemList.previousElementSibling); 

//create element
var newDiv=document.createElement('div');
//console.log(newDiv);
newDiv.className="hello";
newDiv.id="hello1";
newDiv.setAttribute("title","itemlist");
var newDivText=document.createTextNode("hello world");
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv,h1);







