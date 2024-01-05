document.addEventListener('DOMContentLoaded', function () {
    var animatedElements = document.querySelectorAll('.typing-text');
    var scrollableDiv = document.getElementById('scrollableDiv');

    function fadeInOnScroll() {
      console.log('hi');

      animatedElements.forEach(function (element) {
        var scrollPosition = scrollableDiv.scrollTop;
        var elementPosition = element.offsetTop;
        element.classList.remove('typing-text1');
        if (scrollPosition > elementPosition - scrollableDiv.clientHeight + 100) {
          element.classList.add('typing-text1');
        }
      });
    }

    scrollableDiv.addEventListener('scroll', fadeInOnScroll);
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