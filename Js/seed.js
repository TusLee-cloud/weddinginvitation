const API = "https://lingering-unit-5aeb.tulevan600.workers.dev/";

const form = document.getElementById("wishForm");
const list = document.getElementById("wishList");
const statusText = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message })
  });

  statusText.innerText = "Cảm ơn lời chúc của bạn rất nhiều 💌";
  form.reset();
  loadWishes();
});

async function loadWishes() {
  const res = await fetch(API);
  const data = await res.json();

  list.innerHTML = "";

  data.reverse().forEach(w => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h4>${w.name}</h4>
      <p>${w.message}</p>
      <small>${new Date(w.time).toLocaleString()}</small>
    `;
    list.appendChild(div);
  });
}

loadWishes();
