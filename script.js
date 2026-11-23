(function () {
  "use strict";

  const toast = document.getElementById("toast");
  let toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2500);
  }

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  function setMenu(open) {
    mainNav.classList.toggle("is-open", open);
    menuToggle.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }

  menuToggle.addEventListener("click", () => {
    setMenu(!mainNav.classList.contains("is-open"));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
  });

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      filterButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      projects.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });

  const copyBtn = document.getElementById("copyEmail");
  const emailText = document.getElementById("emailText");
  const copyFeedback = document.getElementById("copyFeedback");

  copyBtn.addEventListener("click", async () => {
    const email = emailText.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
      copyFeedback.textContent = "E-mail copiado!";
    } catch (err) {
      const range = document.createRange();
      range.selectNodeContents(emailText);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      copyFeedback.textContent = "Selecionei o e-mail, é só copiar (Ctrl+C).";
    }
    setTimeout(() => (copyFeedback.textContent = ""), 3000);
  });

  const form = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !mensagem) {
      formFeedback.textContent = "Preencha o nome e a mensagem, por favor.";
      return;
    }

    const email = emailText.textContent.trim();
    const assunto = encodeURIComponent("Contato pelo portfólio - " + nome);
    const corpo = encodeURIComponent(mensagem + "\n\n— " + nome);

    window.location.href = "mailto:" + email + "?subject=" + assunto + "&body=" + corpo;
    formFeedback.textContent = "Abrindo seu app de e-mail…";
    form.reset();
  });

  document.querySelectorAll("a[data-placeholder]").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href") === "#") {
        e.preventDefault();
        showToast(link.dataset.placeholder + ": link em breve");
      }
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
