// Typing animation
const roles = ["BCA Student", "Developer", "Tool Builder"];
let i = 0, j = 0, del = false;
const el = document.getElementById("typing");

function type() {
  el.textContent = roles[i].slice(0, j);
  if (!del) j++; else j--;

  if (j === roles[i].length + 1) del = true;
  if (j === 0) { del = false; i = (i + 1) % roles.length; }

  setTimeout(type, del ? 60 : 120);
}
type();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
function reveal() {
  reveals.forEach(r => {
    if (r.getBoundingClientRect().top < window.innerHeight - 100)
      r.classList.add("active");
  });
}
window.addEventListener("scroll", reveal);
reveal();
