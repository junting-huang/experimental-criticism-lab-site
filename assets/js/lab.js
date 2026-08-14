document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".top-nav").forEach((nav) => {
    const links = Array.from(nav.querySelectorAll("a"));
    const cursor = document.createElement("span");
    const current = links.find((link) => link.getAttribute("aria-current") === "page");

    cursor.className = "nav-cursor";
    cursor.setAttribute("aria-hidden", "true");
    nav.appendChild(cursor);

    const moveCursor = (link) => {
      cursor.style.setProperty("--nav-cursor-left", `${link.offsetLeft}px`);
      cursor.style.width = `${link.offsetWidth}px`;
      cursor.classList.add("is-visible");
    };

    const restoreCursor = () => {
      if (current) {
        moveCursor(current);
      } else {
        cursor.classList.remove("is-visible");
      }
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => moveCursor(link));
      link.addEventListener("focus", () => moveCursor(link));
    });

    nav.addEventListener("mouseleave", restoreCursor);
    nav.addEventListener("focusout", () => {
      window.setTimeout(() => {
        if (!nav.contains(document.activeElement)) {
          restoreCursor();
        }
      }, 0);
    });

    window.addEventListener("resize", restoreCursor);
    restoreCursor();
  });

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
