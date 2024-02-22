$(document).ready(function(){
  $('.collapse-text').on('click', function () {
    var text = $(this).text();
    if (text === "de détails") {
      $(this).text('fermer');
    } else {
      $(this).text('de détails');
    }
  });
});


document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = (e) => {
  if (
    e.key == 123 ||
    (e.ctrlKey && e.shiftKey && e.key == "I") ||
    (e.ctrlKey && e.shiftKey && e.key == "C") ||
    (e.ctrlKey && e.shiftKey && e.key == "J") ||
    (e.ctrlKey && e.key == "U") ||
    e.key == "F12"
  ) {
    e.preventDefault();
  }
};



document.addEventListener('DOMContentLoaded', (event) => {
  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let projectSection = document.querySelector('.project_section');
    // Calculer le point où la barre de navigation doit apparaître
    let triggerPoint = projectSection.offsetTop - window.innerHeight + 450;

    let header = document.querySelector('header');

    // Ajustez cette partie pour retarder l'apparition de la barre de navigation
    if (scrollPosition > triggerPoint) {
      header.style.display = 'block';
    } else {
      header.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  // Sélectionner l'élément par son ID
  const downArrow = document.getElementById('down-arrow');

  // Ajouter un écouteur d'événements pour le clic
  downArrow.addEventListener('click', (e) => {
    // Empêcher le comportement par défaut du navigateur
    e.preventDefault();

    // Sélectionner la section vers laquelle vous souhaitez défiler
    const projectSection = document.querySelector('.project_section');

    // Défiler vers la section project_section
    projectSection.scrollIntoView({ behavior: 'smooth' });
  });
});