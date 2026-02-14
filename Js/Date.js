// ===== CHANGE YOUR SPECIAL DATE HERE =====
const highlightDate = new Date(2026, 2, 20);
// (Year, Month-1, Day)
// Example: March 20, 2026 → month = 2

const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");

const year = highlightDate.getFullYear();
const month = highlightDate.getMonth();

const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month + 1, 0).getDate();

const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

monthYear.innerText = `${monthNames[month]} ${year}`;

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

dayNames.forEach(name => {
    const div = document.createElement("div");
    div.classList.add("day-name");
    div.innerText = name;
    calendar.appendChild(div);
});

for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calendar.appendChild(empty);
}

for (let day = 1; day <= daysInMonth; day++) {
    const div = document.createElement("div");
    div.classList.add("day");
    div.innerText = day;

    if (day === highlightDate.getDate()) {
        div.classList.add("highlight");
    }

    calendar.appendChild(div);
}