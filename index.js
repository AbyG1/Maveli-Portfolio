window.onscroll = function() {
    myFunction();
  };
  
  // Get the navbar
  const navbar = document.querySelector(".navbar");
  
  // Get the offset position of the navbar
  const sticky = navbar.offsetTop;
  
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (document.documentElement.scrollTop >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }