let button = document.querySelector('button');
let ul = document.querySelector('ul');
console.log(ul);
button.addEventListener('click', function(){
  let li = document.createElement('li');
  li.className = 'brb';
  ul.appendChild(li);
});

ul.addEventListener('click', function(ev){
  if(ev.target.tagName === 'LI'){
    if(ev.target.className === 'brb'){
      ev.target.className = 'bgb';
    }
    else {
      ev.target.className = 'brb';
    }
  }
});