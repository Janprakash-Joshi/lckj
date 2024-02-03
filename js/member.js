document.addEventListener('DOMContentLoaded', function () {
  var animatedElements = document.querySelectorAll('.typing-text');
  var scrollableDiv = document.getElementById('scrollableDiv');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('typing-text1');
      } else {
        entry.target.classList.remove('typing-text1');
      }
    });
  }, { threshold: 0.5 }); // Adjust the threshold as needed

  animatedElements.forEach(function (element) {
    observer.observe(element);
  });
});



  // searching
const cardItemsElement = document.getElementById("scrollableDiv");
const searchInput = document.getElementById("search-input");
brd=document.getElementById('board');


function filterItems() {
    const searchTerm = searchInput.value.trim().toLowerCase().replace(/\s/g, '');
    const cardItemElements = cardItemsElement.getElementsByClassName("profile-container");

    for (let cardItem of cardItemElements) {
        const itemNameElement = cardItem.querySelector(".profile-name");
        const text = itemNameElement.textContent.trim().toLowerCase().replace(/\s/g, '');
      
        if (text.includes(searchTerm)) {
            
            cardItem.style.display = "block";
        } else {
         
            cardItem.style.display = "none";
           
        }
    }
}


searchInput.addEventListener("input", filterItems);


//members
var board=document.getElementById('board');
var Chairperson=document.getElementById('Chairperson');
var Director=document.getElementById('Director');
var Coordinator=document.getElementById('Coordinator');
var exe=document.getElementById('exe');
var member=document.getElementById('member');

var search_input=document.getElementById('searchDiv');
var btns=document.getElementById('btns');
var layer=document.getElementById('layer');
var scrollableDiv=document.getElementById('scrollableDiv');

var btn_board=document.getElementById('btn-board');
var btn_chai=document.getElementById('btn-chai');
var btn_dir=document.getElementById('btn-dir');
var btn_coor=document.getElementById('btn-coor');
var btn_exe=document.getElementById('btn-exe');
var btn_gen=document.getElementById('btn-gen');

btn_board.onclick=()=>{
  btns.style.top='9%';
  search_input.style.display='block';
  layer.style.display='none';
  scrollableDiv.style.overflowY='scroll';

  board.style.display='flex';
  Chairperson.style.display='none';
  Director.style.display='none';
  Coordinator.style.display='none';
  exe.style.display='none';
  member.style.display='none';

  btn_board.classList.add('activeBtn');
  btn_chai.classList.remove('activeBtn');
  btn_dir.classList.remove('activeBtn');
  btn_coor.classList.remove('activeBtn');
  btn_exe.classList.remove('activeBtn');
  btn_gen.classList.remove('activeBtn');

}

btn_chai.onclick=()=>{
  btns.style.top='9%';
  search_input.style.display='block';
  layer.style.display='none';
  scrollableDiv.style.overflowY='scroll';

  board.style.display='none';
  Chairperson.style.display='flex';
  Director.style.display='none';
  Coordinator.style.display='none';
  exe.style.display='none';
  member.style.display='none';


  btn_board.classList.remove('activeBtn');
  btn_chai.classList.add('activeBtn');
  btn_dir.classList.remove('activeBtn');
  btn_coor.classList.remove('activeBtn');
  btn_exe.classList.remove('activeBtn');
  btn_gen.classList.remove('activeBtn');

}



btn_dir.onclick=()=>{
  btns.style.top='9%';
  search_input.style.display='block';
  layer.style.display='none';
  scrollableDiv.style.overflowY='scroll';

  board.style.display='none';
  Chairperson.style.display='none';
  Director.style.display='flex';
  Coordinator.style.display='none';
  exe.style.display='none';
  member.style.display='none';


  btn_board.classList.remove('activeBtn');
  btn_chai.classList.remove('activeBtn');
  btn_dir.classList.add('activeBtn');
  btn_coor.classList.remove('activeBtn');
  btn_exe.classList.remove('activeBtn');
  btn_gen.classList.remove('activeBtn');

}

btn_coor.onclick=()=>{
  btns.style.top='9%';
  search_input.style.display='block';
  layer.style.display='none';
  scrollableDiv.style.overflowY='scroll';

  board.style.display='none';
  Chairperson.style.display='none';
  Director.style.display='none';
  Coordinator.style.display='flex';
  exe.style.display='none';
  member.style.display='none';


  btn_board.classList.remove('activeBtn');
  btn_chai.classList.remove('activeBtn');
  btn_dir.classList.remove('activeBtn');
  btn_coor.classList.add('activeBtn');
  btn_exe.classList.remove('activeBtn');
  btn_gen.classList.remove('activeBtn');

}

btn_exe.onclick=()=>{
  btns.style.top='9%';
  search_input.style.display='block';
  layer.style.display='none';
  scrollableDiv.style.overflowY='scroll';

  board.style.display='none';
  Chairperson.style.display='none';
  Director.style.display='none';
  Coordinator.style.display='none';
  exe.style.display='flex';
  member.style.display='none';

  btn_board.classList.remove('activeBtn');
  btn_chai.classList.remove('activeBtn');
  btn_dir.classList.remove('activeBtn');
  btn_coor.classList.remove('activeBtn');
  btn_exe.classList.add('activeBtn');
  btn_gen.classList.remove('activeBtn');

}

btn_gen.onclick=()=>{
  btns.style.top='9%';
  search_input.style.display='block';
  layer.style.display='none';
  scrollableDiv.style.overflowY='scroll';

  board.style.display='none';
  Chairperson.style.display='none';
  Director.style.display='none';
  Coordinator.style.display='none';
  exe.style.display='none';
  member.style.display='flex';


  btn_board.classList.remove('activeBtn');
  btn_chai.classList.remove('activeBtn');
  btn_dir.classList.remove('activeBtn');
  btn_coor.classList.remove('activeBtn');
  btn_exe.classList.remove('activeBtn');
  btn_gen.classList.add('activeBtn');

}