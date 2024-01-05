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