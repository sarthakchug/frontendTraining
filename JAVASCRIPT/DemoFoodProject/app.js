document.getElementById("btn").addEventListener("click", getFood);

// 🌙 Dark mode
function toggleDark() {
  document.body.classList.toggle("dark");
}

// 🎤 Voice input
function startVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Voice not supported ❌");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  recognition.start();

  recognition.onresult = function(event) {
    const text = event.results[0][0].transcript.toLowerCase();

    if (text.includes("veg")) document.getElementById("type").value = "Veg";
    if (text.includes("non")) document.getElementById("type").value = "Non-Veg";
    if (text.includes("spicy")) document.getElementById("mood").value = "Spicy";
    if (text.includes("healthy")) document.getElementById("mood").value = "Healthy";
    if (text.includes("junk")) document.getElementById("mood").value = "Junk";

    getFood();
  };

  recognition.onerror = function(e) {
    alert("Voice error: " + e.error);
  };
}

// 🍔 Food logic
function getFood() {
  const type = document.getElementById("type").value;
  const mood = document.getElementById("mood").value;

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = "⏳ Loading...";

  setTimeout(() => {
    let suggestions = [];

    if (type === "Veg" && mood === "Healthy") {
      suggestions = ["Poha", "Dal Chawal", "Upma"];
    } else if (type === "Non-Veg" && mood === "Spicy") {
      suggestions = ["Chicken Curry", "Biryani", "Egg Curry"];
    } else {
      suggestions = ["Burger 🍔", "Pizza 🍕", "Fries 🍟"];
    }

    resultBox.innerHTML = suggestions.map(item =>
      `<div class="food-card">${item}</div>`
    ).join("");

  }, 800);
}