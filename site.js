/* Enhancement only: all product content and navigation work without JavaScript. */
(() => {
  document.documentElement.classList.replace("no-js", "js");
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu-principal");
  const closeMenu = () => {
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Abrir menu");
    menu?.classList.remove("is-open");
  };
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menu?.classList.toggle("is-open", open);
  });
  menu
    ?.querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle?.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav")) closeMenu();
  });
  window.matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const contact = document.getElementById("contato");
  const mobileQuote = document.querySelector(".mobile-quote");
  if (contact && mobileQuote && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      mobileQuote.classList.toggle("is-hidden", entry.isIntersecting);
    });
    observer.observe(contact);
  }

  const form = document.querySelector("[data-quote-form]");
  if (!form) return;
  const name = document.getElementById("nome");
  const business = document.getElementById("negocio");
  const city = document.getElementById("cidade");
  const product = document.getElementById("produto");
  const volume = document.getElementById("volume");
  const message = form.querySelector("[data-quote-message]");
  const compose = () => {
    const lines = ["Olá! Quero um orçamento dos tomates Viander."];
    if (name.value.trim()) lines.push(`Nome: ${name.value.trim()}`);
    if (business.value) lines.push(`Negócio: ${business.value}`);
    if (city.value.trim()) lines.push(`Cidade/UF: ${city.value.trim()}`);
    if (product.value) lines.push(`Produto: ${product.value}`);
    if (volume.value.trim())
      lines.push(`Volume estimado: ${volume.value.trim()}`);
    message.value = lines.join("\n");
  };
  const params = new URLSearchParams(window.location.search);
  const selected = {
    polpa: "Polpa Fina Sgrondata — 4,050 kg",
    pelati: "Tomate Pelati Salsati — 2,550 kg",
  }[params.get("produto")];
  if (selected) product.value = selected;
  document
    .querySelectorAll("[data-product], [data-segment]")
    .forEach((link) => {
      link.addEventListener("click", () => {
        if (link.dataset.product) product.value = link.dataset.product;
        if (link.dataset.segment) business.value = link.dataset.segment;
        compose();
      });
    });
  form.addEventListener("input", compose);
  form.addEventListener("change", compose);
  form.addEventListener("submit", (event) => {
    if (![name, city].every((input) => input.value.trim())) {
      event.preventDefault();
      const empty = [name, city].find((input) => !input.value.trim());
      empty.setCustomValidity("Preencha este campo para continuar.");
      empty.reportValidity();
      empty.addEventListener("input", () => empty.setCustomValidity(""), {
        once: true,
      });
      return;
    }
    compose();
    // No network request, storage, or analytics: the browser opens the prepared WhatsApp message.
  });
  compose();
})();
