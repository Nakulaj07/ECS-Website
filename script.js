
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('nav ul');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});


function submitContactForm(e) {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  e.target.reset();
}