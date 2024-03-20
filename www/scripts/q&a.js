// script for a closing arrow 
function toggleAccordion(button) {
    button.classList.toggle("rotate");
    var panel = button.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }