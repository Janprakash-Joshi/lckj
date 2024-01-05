var showMenu = document.getElementById('showMenu');
var menu = document.getElementById('menu');
var myCarousel=document.getElementById('myCarousel');
var searchDiv=document.getElementById('searchDiv');
var scrollableDiv=document.getElementById('scrollableDiv');

var counter=0;
showMenu.onclick = () => {
  
  if(counter==0){
    menu.classList.add('flexIMP');
    if(myCarousel){
      myCarousel.style.display='none';
    }
    if(scrollableDiv){
      scrollableDiv.style.display='none';
    }
    if(searchDiv){
      searchDiv.style.display='none';
    }
    
    counter++;
  }
  else{
    menu.classList.remove('flexIMP');
    if(myCarousel){
      myCarousel.style.display='block';
    }
    if(scrollableDiv){
      scrollableDiv.style.display='flex';
    }
    if(searchDiv){
      searchDiv.style.display='block';
    }
    counter--;
  }
  

};
