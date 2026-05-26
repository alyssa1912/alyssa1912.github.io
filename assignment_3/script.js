document.addEventListener("mousemove", (e) => {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  flower.style.left = e.clientX + "px";
  flower.style.top = e.clientY + "px";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 2500);
});