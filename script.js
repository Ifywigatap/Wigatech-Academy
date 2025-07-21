// Show alert when user clicks the Join buttons
document.addEventListener("DOMContentLoaded", () => {
  const joinButtons = document.querySelectorAll(".cta-btn");

  joinButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      alert("Thanks for choosing Wigatech! You’re being redirected to our WhatsApp class now.");
    });
  });
});
