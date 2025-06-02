function loadHTML(selectorId, filePath) {
  const container = document.getElementById(selectorId);
  if (!container) {
    console.warn(`Element with ID '${selectorId}' not found.`);
    return;
  }

  fetch(filePath)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to fetch ${filePath}`);
      return res.text();
    })
    .then((html) => {
      container.innerHTML = html;
      loadHeaderEvts();
    })
    .catch((err) => {
      console.error(`Error loading ${filePath}:`, err);
      container.innerHTML = `<p style="color:red;">Failed to load content.</p>`;
    });
}

function loadHeaderEvts() {
  const btn = document.querySelector("#mobile-menu-button");
  const menu = document.querySelector("#mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}
