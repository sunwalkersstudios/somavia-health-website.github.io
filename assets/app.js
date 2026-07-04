document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  function set(open) {
    menu.classList.toggle('hidden', !open);
    menu.classList.toggle('flex', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  }
  btn.addEventListener('click', function () { set(menu.classList.contains('hidden')); });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { set(false); });
  });
});
