let acc = document.getElementsByClassName("accordion");
let i;
let
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
// miacnel anjatel
    this.classList.toggle("active");

// miacnel anjatel arden claseri mijocov
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}