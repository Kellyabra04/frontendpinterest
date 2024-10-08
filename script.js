// 10 uitleg dat `aria-expanded` helpt om schermlezers te laten weten of een menu open of dicht is.(https://www.a11y-collective.com/blog/aria-expanded/)
// 15 ChatGPT help for JavaScript "Explain at a beginner level how to create a JavaScript for a burger menu"

// Select the elements using basic selectors
let menuButton = document.querySelector("header button[aria-label='Menu']");
let nav = document.querySelector("nav");
let closeButton = document.querySelector("nav button[aria-label='Close Menu']");

// Toggle the menu visibility by changing aria-expanded
menuButton.addEventListener("click", function () {
  nav.setAttribute("aria-expanded", "true");
});

// Add both click and keydown (for enter) events to close button
closeButton.addEventListener("click", function () {
  nav.setAttribute("aria-expanded", "false");
});

closeButton.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    nav.setAttribute("aria-expanded", "false");
  }
});
