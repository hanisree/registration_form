// script.js

document.addEventListener('DOMContentLoaded', function() {
  let currentPage = 1;
  const totalPages = 2;

  const formPages = document.querySelectorAll('.form-page');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  function showPage(page) {
      formPages.forEach((formPage, index) => {
          formPage.classList.toggle('active', index === page - 1);
      });

      nextBtn.style.display = (page === totalPages) ? 'none' : 'inline-block';
      prevBtn.style.display = (page === 1) ? 'none' : 'inline-block';
  }

  nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
          currentPage++;
          showPage(currentPage);
      }
  });

  prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
      }
  });

  showPage(currentPage);
});
