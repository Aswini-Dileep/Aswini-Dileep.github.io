const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", function () {
    setTimeout(() => {
      form.reset();
    }, 500);
  });
}
