// fade-in on load
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    el.classList.add("show");
  });
});

// simple process animation
function startAnimation() {
  const status = document.getElementById("status");

  status.innerText = "Loading waste...";
  
  setTimeout(() => {
    status.innerText = "Burning at high temperature...";
  }, 2000);

  setTimeout(() => {
    status.innerText = "Generating energy...";
  }, 4000);

  setTimeout(() => {
    status.innerText = "Filtering emissions... Complete.";
  }, 6000);
}