const links = document.querySelectorAll("ul li a");
const nav = document.querySelector("navLink");

const menuIcon = document.querySelector("navLink svg");

function clear() {
  links.forEach((l) => l.classList.remove("active"));
}

links.forEach((l) => {
  l.onclick = (e) => {
    clear();
    e.target.classList.add("active");
  };
});

menuIcon.onclick = () => {
  nav.classList.toggle("expanded");
};
