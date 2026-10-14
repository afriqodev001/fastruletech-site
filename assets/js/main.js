// FastRuleTech — small site behaviors (menu, footer year, contact form)
(function () {
  var btn = document.querySelector('.menu-btn');
  var links = document.getElementById('nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact forms post to Formspree (set the form's action to your Formspree endpoint).
  document.querySelectorAll('form[data-ajax]').forEach(function (form) {
    var status = form.querySelector('.form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.action.indexOf('{{') !== -1) {
        status.textContent = 'The form is not connected yet. Please call or email us instead.';
        return;
      }
      var submit = form.querySelector('button[type=submit]');
      submit.disabled = true;
      status.className = 'form-status';
      status.textContent = 'Sending…';
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (r) {
        if (!r.ok) throw new Error('send failed');
        form.reset();
        status.className = 'form-status ok';
        status.textContent = 'Thanks — we got your message and will reply within one business day.';
      }).catch(function () {
        status.textContent = 'Your message did not send. Please call or email us directly.';
      }).finally(function () {
        submit.disabled = false;
      });
    });
  });
})();
