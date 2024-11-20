const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

openBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});


const textElement = document.getElementById("typedText");
const textToType = "Soham";
let index = 0;
const speed = 100; // Typing speed in milliseconds

function typeText() {
  if (index < textToType.length) {
    textElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

typeText();

typeText();

function typeTextLoop() {
  if (index < typeTextLoop.length) {
    textElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeTextLoop, speed);
  } else {
    setTimeout(() => {
      index = 0;
      textElement.textContent = "";
      typeTextLoop();
    }, 1500);
  }
}

ScrollReveal().reveal(".hero-content img", {
  origin: "left",
  distance: "400px",
  duration: 500,
});

ScrollReveal().reveal(".hero-content p", {
  origin: "center",
  distance: "50px",
  duration: 1000,
});

ScrollReveal().reveal(".about-header", {
  duration: 500,
});

ScrollReveal().reveal(".about-para", {
  origin: "center",
  duration: 900,
});

ScrollReveal().reveal(".social-media-links span", {
  origin: "left",
  distance: "400px",
  duration: 900,
  interval: 300,
});

ScrollReveal().reveal(".social-media-links span i", {
  origin: "center",
  duration: 2000,
  interval: 600,
});

ScrollReveal().reveal(".social-media-links span a", {
  origin: "left",
  duration: 2000,
  interval: 600,
});

ScrollReveal().reveal(".project-list div:nth-child(1)", {
  origin: "left",
  distance: "400px",
  duration: 900,
});

ScrollReveal().reveal("#portfolio span h2", {
  origin: "left",
  distance: "400px",
  duration: 1000,
});

ScrollReveal().reveal("#skills h2", {
  origin: "left",
  distance: "250px",
  duration: 1000,
});

ScrollReveal().reveal("#skills .skills-list li", {
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  interval: 300,
});

ScrollReveal().reveal("#contact", {
  origin: "center",
  distance: "100px",
  duration: 1000,
  interval: 300,
});

ScrollReveal().reveal("#contact-form span", {
  distance: "100px",
  duration: 1000,
  interval: 300,
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  saveContactFormData();
});

contactForm.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    saveContactFormData();
  }
});

function saveContactFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    const formData = {
      name: name,
      email: email,
      message: message,
      date: new Date().toLocaleString(),
    };

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(formData);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    alert("Your Message has been saved locally!");

    contactForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
}
