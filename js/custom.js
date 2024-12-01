const modal = document.getElementById("modal");
const aboutModal = document.getElementById("aboutModal")
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const closeAboutModal = document.getElementById("closeAboutModal");
const openAboutModal = document.getElementById("headshot")

openModal.addEventListener("click", (e) => {
    event.preventDefault()
    modal.style.display = "block";
});

openAboutModal.addEventListener('click', () => {
    aboutModal.style.display = "block";
})

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

closeAboutModal.addEventListener("click", () => {
    aboutModal.style.display = "none"
})

window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      aboutModal.style.display = "none";
    }
  });