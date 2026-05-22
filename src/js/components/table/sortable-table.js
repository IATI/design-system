function getRowsContainer(root) {
  if (root.tagName === "TABLE") {
    return root.querySelector("tbody") || root;
  }
  const selector = root.getAttribute("data-sort-rows");
  if (selector) return root.querySelector(selector);
  return (
    root.querySelector(".iati-file-card-table__cards") ||
    root.querySelector(".iati-file-card-table__rows") ||
    root
  );
}

function getHeaders(root) {
  return Array.from(root.querySelectorAll("[aria-sort]"));
}

function getRows(rowsContainer) {
  return Array.from(rowsContainer.children).filter(
    (el) =>
      el.tagName !== "THEAD" &&
      !el.classList.contains("iati-file-card-table__header"),
  );
}

function getCellText(row, columnIndex) {
  const cells = row.querySelectorAll(
    "td, .iati-file-card__cell, .iati-table__cell",
  );
  const cell = cells[columnIndex];
  return cell ? cell.textContent.trim() : "";
}

function compareValues(a, b, type) {
  if (type === "number") {
    const numA = parseFloat(a.replace(/[^0-9.\-]/g, "")) || 0;
    const numB = parseFloat(b.replace(/[^0-9.\-]/g, "")) || 0;
    return numA - numB;
  }
  return a.localeCompare(b, undefined, { numeric: true });
}

function sortRows(root, header) {
  const headers = getHeaders(root);
  const explicit = header.getAttribute("data-column-index");
  const columnIndex =
    explicit !== null ? parseInt(explicit, 10) : headers.indexOf(header);
  if (columnIndex < 0 || Number.isNaN(columnIndex)) return;

  const current = header.getAttribute("aria-sort");
  const next = current === "ascending" ? "descending" : "ascending";

  headers.forEach((h) => h.setAttribute("aria-sort", "none"));
  header.setAttribute("aria-sort", next);

  const type = header.getAttribute("data-sort-type") || "string";
  const rowsContainer = getRowsContainer(root);
  const rows = getRows(rowsContainer);

  rows.sort((rowA, rowB) => {
    const cmp = compareValues(
      getCellText(rowA, columnIndex),
      getCellText(rowB, columnIndex),
      type,
    );
    return next === "ascending" ? cmp : -cmp;
  });

  rows.forEach((row) => rowsContainer.appendChild(row));
}

function attachSortHandlers(root) {
  if (root.dataset.sortableInitialised) return;
  root.dataset.sortableInitialised = "true";

  getHeaders(root).forEach((header) => {
    if (!header.querySelector("button")) {
      const original = header.innerHTML;
      header.innerHTML = `<button type="button">${original}</button>`;
    }
    const button = header.querySelector("button");
    button.addEventListener("click", () => sortRows(root, header));
  });
}

function initialiseSortableTables() {
  document.querySelectorAll("[data-sortable]").forEach(attachSortHandlers);
}

function setupMutationObserver() {
  let debounceTimer;
  const observer = new MutationObserver(() => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(initialiseSortableTables, 50);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initialiseSortableTables();
    setupMutationObserver();
  });
} else {
  initialiseSortableTables();
  setupMutationObserver();
}
