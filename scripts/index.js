function loadHTML(selectorId, filePath) {
  const container = document.getElementById(selectorId);
  if (!container) {
    console.warn(`Element with ID '${selectorId}' not found.`);
    return;
  }

  fetch(filePath)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to fetch ${filePath}`);
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
    })
    .catch(err => {
      console.error(`Error loading ${filePath}:`, err);
      container.innerHTML = `<p style="color:red;">Failed to load content.</p>`;
    });
}
