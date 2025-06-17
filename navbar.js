// Inject navbar.html content into any <div id="navbar"></div> container
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
    setActiveLink();
  });

function setActiveLink() {
  const currentPath = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.nav-links a');

  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}
