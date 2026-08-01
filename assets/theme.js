// Light / dark toggle.
//
// How it works:
//   1. If you've picked a theme before, we saved it in the browser's
//      localStorage and we use that.
//   2. If you haven't, we follow whatever your computer is set to.
//   3. Pressing the button flips it and remembers your choice.
//
// The part that reads localStorage runs in a small <script> in the <head> of
// each page, not here. That's deliberate: it has to run before anything is
// drawn, otherwise you'd see a flash of the wrong colours on every page load.

(function () {
  var btn = document.querySelector('.theme');
  if (!btn) return;

  function currentlyDark() {
    var forced = document.documentElement.dataset.theme;
    if (forced) return forced === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  btn.addEventListener('click', function () {
    var next = currentlyDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // Private browsing can block storage. The toggle still works for this
      // page view; it just won't be remembered next time.
    }
    btn.setAttribute('aria-pressed', String(next === 'dark'));
  });

  btn.setAttribute('aria-pressed', String(currentlyDark()));
})();
