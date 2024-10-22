window.addEventListener("load", function () {
    document.body.style.visibility = "visible";
  
    const title = document.getElementById("title");
    function addClass() {
      title.classList.add("title-neon");
    }
    function rmClass() {
      title.classList.remove("title-neon");
    }
});