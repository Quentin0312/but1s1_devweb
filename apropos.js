window.addEventListener("load", function () {
    document.body.style.visibility = "visible";
  
    const title = document.getElementById("title");
    function addClass() {
      title.classList.add("title-neon");
    }
    function rmClass() {
      title.classList.remove("title-neon");
    }
    setTimeout(addClass, 300);
    setTimeout(rmClass, 375);
    setTimeout(addClass, 525);
    setTimeout(rmClass, 600);
    setTimeout(addClass, 800);
    setTimeout(rmClass, 925);
    setTimeout(addClass, 1325);
});