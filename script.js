
const CONFIG = {
  whatsappNumber: "2348033034396",
  communityLink: "https://linktr.ee/boostorabusinessspotlight"
};

// Build a WhatsApp message and open the chat.
function openWhatsApp(message) {
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// Package enquiry buttons.
document.querySelectorAll(".btn-package").forEach((button) => {
  button.addEventListener("click", () => {
    const duration = button.dataset.duration;
    const type = button.dataset.type;
    const price = Number(button.dataset.price).toLocaleString("en-NG");

    const message =
      `Hello BOOSTORA Business Spotlight!\n\n` +
      `I would like to make an enquiry about this advertising package:\n\n` +
      `Duration: ${duration}\n` +
      `Promotion Type: ${type}\n` +
      `Price: ₦${price}\n\n` +
      `Please send me the next steps.`;

    openWhatsApp(message);
  });
});

// General contact button.
document.getElementById("generalContact").addEventListener("click", (event) => {
  event.preventDefault();

  openWhatsApp(
    "Hello BOOSTORA Business Spotlight! I would like to make an enquiry about your advertising services."
  );
});

// Floating WhatsApp contact button.
document.getElementById("floatingWhatsApp").addEventListener("click", (event) => {
  event.preventDefault();

  openWhatsApp(
    "Hello BOOSTORA Business Spotlight! I would like to speak with your team."
  );
});

// Mobile navigation.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatically update the footer year.
document.getElementById("currentYear").textContent = new Date().getFullYear();
