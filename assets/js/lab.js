document.addEventListener("DOMContentLoaded", () => {
  const typedTarget = document.querySelector("#typed-question");
  const strings = document.querySelector("#strings");

  if (!typedTarget || !strings || typeof Typed === "undefined") {
    return;
  }

  new Typed("#typed-question", {
    stringsElement: "#strings",
    backSpeed: 10,
    typeSpeed: 30,
    backDelay: 1000,
    loop: true,
    smartBackspace: true,
  });
});
