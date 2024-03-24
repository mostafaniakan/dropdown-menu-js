const component = document.querySelectorAll(".dropdown");

component.forEach((component, index) => {
  component.addEventListener("click", () => {
    close();
    open(component);
    moveSlider(index);
  });
});

function close() {
  const all_drop = document.querySelectorAll(".br-body");

  all_drop.forEach((drs) => {
    if (drs.classList.contains("active")) {
      drs.classList.remove("active");
      drs.style.height = "0px";
      drs.style.padding = "0px";
    }
  });
  const active_color = document.querySelectorAll(".active_color");

  active_color.forEach((ac) => {
    ac.classList.remove("active_color");
  });
}

function open(component) {
    document.querySelector(".sliders").classList.add("active");
  component.classList.add("active_color");
  component.parentNode.querySelector(".br-body").classList.add("active");
  const bodyElement = component.parentNode.querySelector(".br-body");
  let heightDiv = bodyElement.scrollHeight;

  bodyElement.style.height = `${heightDiv}px`;
}

function moveSlider(index) {

  const slider = document.querySelectorAll(".slider");

  slider.forEach((section, key) => {
    section.style.transform = `translateX(-${100 * index}%)`;
  });
}
