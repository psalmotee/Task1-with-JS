const dsgBtn = document.getElementById("design");
const mktBtn = document.getElementById("marketing");
const finBtn = document.getElementById("finance");
const muzBtn = document.getElementById("music");
const eduBtn = document.getElementById("education");

const dsgContent = document.getElementById("design_content");
const mktContent = document.getElementById("marketing_content");
const finContent = document.getElementById("finance_content");
const muzContent = document.getElementById("music_content");
const eduContent = document.getElementById("education_content");

dsgBtn.addEventListener("click", function () {
  dsgContent.classList.remove("hidden");
  mktContent.classList.add("hidden");
  finContent.classList.add("hidden");
  muzContent.classList.add("hidden");
  eduContent.classList.add("hidden");

  // Active Tab
  dsgBtn.classList.add("active");
  mktBtn.classList.remove("active");
  finBtn.classList.remove("active");
  muzBtn.classList.remove("active");
  eduBtn.classList.remove("active");
});

mktBtn.addEventListener("click", function () {
  dsgContent.classList.add("hidden");
  mktContent.classList.remove("hidden");
  finContent.classList.add("hidden");
  muzContent.classList.add("hidden");
  eduContent.classList.add("hidden");

  // Active Tab
  dsgBtn.classList.remove("active");
  mktBtn.classList.add("active");
  finBtn.classList.remove("active");
  muzBtn.classList.remove("active");
  eduBtn.classList.remove("active");
});

finBtn.addEventListener("click", function () {
  dsgContent.classList.add("hidden");
  mktContent.classList.add("hidden");
  finContent.classList.remove("hidden");
  muzContent.classList.add("hidden");
  eduContent.classList.add("hidden");

  // Active Tab
  dsgBtn.classList.remove("active");
  mktBtn.classList.remove("active");
  finBtn.classList.add("active");
  muzBtn.classList.remove("active");
  eduBtn.classList.remove("active");
});

muzBtn.addEventListener("click", function () {
  dsgContent.classList.add("hidden");
  mktContent.classList.add("hidden");
  finContent.classList.add("hidden");
  muzContent.classList.remove("hidden");
  eduContent.classList.add("hidden");

  // Active Tab
  dsgBtn.classList.remove("active");
  mktBtn.classList.remove("active");
  finBtn.classList.remove("active");
  muzBtn.classList.add("active");
  eduBtn.classList.remove("active");
});

eduBtn.addEventListener("click", function () {
  dsgContent.classList.add("hidden");
  mktContent.classList.add("hidden");
  finContent.classList.add("hidden");
  muzContent.classList.add("hidden");
  eduContent.classList.remove("hidden");

  // Active Tab
  dsgBtn.classList.remove("active");
  mktBtn.classList.remove("active");
  finBtn.classList.remove("active");
  muzBtn.classList.remove("active");
  eduBtn.classList.add("active");
});

const menu = document.getElementById("menu-icon");
const navList = document.getElementsByClassName("nav-list");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("open");
};
