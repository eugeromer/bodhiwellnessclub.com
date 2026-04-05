// Terapias Modal — Bodhi Wellness Club

function openTerapia(el) {
  var lang = document.documentElement.lang || 'es';
  var isEn = document.querySelector('[data-lang="en"]:not([style*="display:none"])') !== null;

  var numEl = el.querySelector('.ter-num');
  var nameEl = el.querySelector('.ter-name');
  var priceEl = el.querySelector('.ter-price');

  var num = numEl ? numEl.textContent : '';
  var name = nameEl ? (isEn ? (nameEl.querySelector('[data-lang="en"]') ? nameEl.querySelector('[data-lang="en"]').textContent : nameEl.textContent) : (nameEl.querySelector('[data-lang="es"]') ? nameEl.querySelector('[data-lang="es"]').textContent : nameEl.textContent)) : '';
  var price = priceEl ? priceEl.textContent : '';
  var duration = el.getAttribute('data-duration') || '';
  var desc = isEn ? (el.getAttribute('data-info-en') || '') : (el.getAttribute('data-info-es') || '');

  document.getElementById('terModalNum').textContent = num;
  document.getElementById('terModalName').textContent = name;
  document.getElementById('terModalDesc').textContent = desc;
  document.getElementById('terModalDuration').textContent = duration;
  document.getElementById('terModalPrice').textContent = price;

  var overlay = document.getElementById('terModal');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTerapia() {
  var overlay = document.getElementById('terModal');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Attach click handlers to all ter-item elements
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.ter-item').forEach(function (el) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function () {
      openTerapia(el);
    });
  });

  // Close modal clicking outside the card
  var overlay = document.getElementById('terModal');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeTerapia();
      }
    });
  }
});
