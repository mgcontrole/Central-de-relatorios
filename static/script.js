document.querySelectorAll('.card.disabled').forEach(function (card) {
  card.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

function toggleTema() {
  const isLight = document.body.classList.toggle('light');
  localStorage.setItem('tema-central-claro', isLight ? '1' : '0');
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = isLight ? '☀️ Alterar Tema: Claro' : '🌙 Alterar Tema: Escuro';
}

(function () {
  const isLight = localStorage.getItem('tema-central-claro') !== '0';
  if (isLight) document.body.classList.add('light');
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = isLight ? '☀️ Alterar Tema: Claro' : '🌙 Alterar Tema: Escuro';
})();
