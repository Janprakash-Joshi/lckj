var showMenu = document.getElementById('showMenu');
var menu = document.getElementById('menu');
var myCarousel=document.getElementById('myCarousel');
var memberMenu=document.getElementById('memberMenu'); 
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
    if(memberMenu){
      memberMenu.style.display='none';
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
    if(memberMenu){
      memberMenu.style.display='block';
    }
    counter--;
  }
  

};

var ReportBtn=document.getElementById('ReportBtn');
ReportBtn.onclick=()=>{
  window.open("https://drive.google.com/file/d/1QipuF_F31lWvIoq8j2-RrhO2tU21WgHn/preview","popup","width=auto, height=auto");
}
