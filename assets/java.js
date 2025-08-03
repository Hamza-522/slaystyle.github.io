// For header 

function updateLinks() {
    const currentPage = window.location.pathname; 
    const contactLink = document.getElementById('contact-link');
  
    if (currentPage.includes('/assets/contact.html')) {
        contactLink.setAttribute('href', 'contact.html'); 
        contactLink.setAttribute('href', 'assets/contact.html');
    }
}

window.onload = function () {
    updateLinks();
};

// For footer 
    function updateLinks() {
        const urlParams = new URLSearchParams(window.location.search);
        const currentPage = urlParams.get('page'); 
        const contactLink = document.getElementById('contact-link'); 

        if (currentPage === 'contact') {
            contactLink.setAttribute('href', 'contact.html'); 
        } else {
            contactLink.setAttribute('href', 'assets/contact.html'); 
        }
    }
    window.onload = function () {
        updateLinks();
    };


    document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("customModal");
        const openModalBtn = document.getElementById("openModalBtn");
        const closeModalBtn = document.getElementById("closeModalBtn");
      
        openModalBtn.addEventListener("click", function () {
          modal.style.display = "block";
        });
      
        closeModalBtn.addEventListener("click", function () {
          modal.style.display = "none";
        });
      
        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });
      });
      

     