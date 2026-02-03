// Static event data (no backend)
const events = [
  {
    title: "JavaScript Basics",
    speaker: "Arun",
    time: "09:00",
    category: "Workshop",
    image: "https://via.placeholder.com/200"
  },
  {
    title: "Future of AI",
    speaker: "Divya",
    time: "11:30",
    category: "Keynote",
    image: "https://via.placeholder.com/200"
  },
  {
    title: "Startup Discussion",
    speaker: "Panel Team",
    time: "15:00",
    category: "Panel",
    image: "https://via.placeholder.com/200"
  }
];

// Render events to UI
function renderEvents(eventList) {
  const container = document.getElementById("eventContainer");
  container.innerHTML = "";

  eventList.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card " + event.category;

    card.innerHTML = `
      <img src="${event.image}">
      <h3>${event.title}</h3>
      <p>${event.speaker}</p>
      <span>${event.time} | ${event.category}</span>
    `;

    container.appendChild(card);
  });
}

// Show all events
function showAll() {
  renderEvents(events);
}

// Filter by category
function filterCategory(type) {
  const cards = document.querySelectorAll(".event-card");

  cards.forEach(card => {
    card.classList.toggle("hide", !card.classList.contains(type));
  });
}

// Filter by time
function filterTime(session) {
  const filtered = events.filter(event => {
    const hour = parseInt(event.time.split(":")[0]);

    if (session === "morning") {
      return hour < 12;
    } else {
      return hour >= 12;
    }
  });

  renderEvents(filtered);
}

// Initial load
renderEvents(events);