document.addEventListener("DOMContentLoaded", function() {
  const collapseBtn = document.getElementById('sobreMi');
  const sidebar    = document.getElementById('barraLateral');

    collapseBtn.addEventListener('click', function() {
        console.log("todo bien kbro");
        console.log("antes:", sidebar.className);
        sidebar.classList.toggle('collapsed');
        console.log("después:", sidebar.className);
  })
});