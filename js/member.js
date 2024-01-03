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