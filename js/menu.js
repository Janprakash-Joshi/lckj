var showMenu = document.getElementById('showMenu');
var menu = document.getElementById('menu');
var counter=0;
showMenu.onclick = () => {
  if(counter==0){
    menu.classList.add('flexIMP');
    counter++;
  }
  else{
    menu.classList.remove('flexIMP');
    counter--;
  }
  

};
