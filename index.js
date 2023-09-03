window.onscroll = function() {
    myFunction();
  };
  
  
  const navbar = document.querySelector(".navbar");
  
  const sticky = navbar.offsetTop;
  

  function myFunction() {
    if (document.documentElement.scrollTop >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }