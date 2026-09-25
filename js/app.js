document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("customerForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("customerName").value.trim();
      const email = document.getElementById("customerEmail").value.trim();
      const message = document.getElementById("message");

      if (!name || !email) {
        message.textContent = "Name and email are required.";
        return;
      }

      const tbody = document.querySelector("#customerTable tbody");
      const row = tbody.insertRow();
      row.insertCell().textContent = name;
      row.insertCell().textContent = email;
      message.textContent = "Customer added successfully.";
      form.reset();
    });
  }

  function enableSearch(inputId, tableId) {
    const input = document.getElementById(inputId);
    const table = document.getElementById(tableId);
    if (!input || !table) return;

    input.addEventListener("input", () => {
      const query = input.value.toLowerCase();
      [...table.tBodies[0].rows].forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(query) ? "" : "none";
      });
    });
  }

  enableSearch("customerSearch", "customerTable");
  enableSearch("productSearch", "productTable");
});
