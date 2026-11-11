/* ==========================================================================
   MXVI Design System — mxvi.js
   Optional, dependency-free behaviors. Works with any framework: it only
   reads data-* attributes. Frameworks may reimplement the same contract.

   Contract:
   - [data-mx-menu-toggle] inside .mx-navbar: toggles data-menu="open" on the
     navbar and aria-expanded on the button. Escape closes and returns focus.
   - .mx-search: adds .is-filled when the input has text; [data-mx-clear]
     empties the input and focuses it.
   - [data-mx-copy] inside .mx-code: copies the text of the <pre> and shows
     "Copiado" for 2 s.

   Usage: <script src="/mxvi/mxvi.js" defer></script>, or call
   window.MXVI.init(root) after rendering new markup.
   ========================================================================== */

(function () {
  function initMenu(root) {
    root.querySelectorAll('.mx-navbar').forEach(function (navbar) {
      var toggle = navbar.querySelector('[data-mx-menu-toggle]');
      if (!toggle || toggle.dataset.mxReady) return;
      toggle.dataset.mxReady = 'true';

      function setOpen(open) {
        navbar.dataset.menu = open ? 'open' : 'closed';
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        if (open) {
          var first = navbar.querySelector('.mx-navbar__menu a, .mx-navbar__menu input');
          if (first) first.focus();
        }
      }

      toggle.addEventListener('click', function () {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
      });

      navbar.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          setOpen(false);
          toggle.focus();
        }
      });
    });
  }

  function initSearch(root) {
    root.querySelectorAll('.mx-search').forEach(function (search) {
      var input = search.querySelector('.mx-search__input');
      var clear = search.querySelector('[data-mx-clear]');
      if (!input || search.dataset.mxReady) return;
      search.dataset.mxReady = 'true';

      function sync() {
        search.classList.toggle('is-filled', input.value.length > 0);
      }

      input.addEventListener('input', sync);
      if (clear) {
        clear.addEventListener('click', function () {
          input.value = '';
          sync();
          input.focus();
        });
      }
      sync();
    });
  }

  function initCopy(root) {
    root.querySelectorAll('.mx-code [data-mx-copy]').forEach(function (button) {
      if (button.dataset.mxReady) return;
      button.dataset.mxReady = 'true';
      var label = button.getAttribute('aria-label') || 'Copiar código';

      button.addEventListener('click', function () {
        var pre = button.closest('.mx-code').querySelector('pre');
        if (!pre || !navigator.clipboard) return;
        navigator.clipboard.writeText(pre.innerText).then(function () {
          var original = button.innerHTML;
          button.classList.add('is-copied');
          button.textContent = 'Copiado';
          button.setAttribute('aria-label', 'Código copiado');
          setTimeout(function () {
            button.classList.remove('is-copied');
            button.innerHTML = original;
            button.setAttribute('aria-label', label);
          }, 2000);
        });
      });
    });
  }

  function init(root) {
    root = root || document;
    initMenu(root);
    initSearch(root);
    initCopy(root);
  }

  window.MXVI = { init: init };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(document); });
  } else {
    init(document);
  }
})();
