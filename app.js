const submitBtn = document.getElementById("submitBtn");
const overlay = document.getElementById("successOverlay");
const closeBtn = document.getElementById("closeBtn");

function openPopup() {
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
  closeBtn.focus();
}

function closePopup() {
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
  submitBtn.focus();
}

submitBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);

// Close when clicking outside the popup.
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) closePopup();
});

// Support Escape key.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && overlay.classList.contains("show")) {
    closePopup();
  }
});
