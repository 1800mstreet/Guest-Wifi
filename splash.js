function connect(event) {
  if (event) event.preventDefault();

  const agree = document.getElementById('agree');
  if (!agree || !agree.checked) {
    alert('Please agree to the Terms and Conditions.');
    return false;
  }

  window.location.href = 'http://neverssl.com';
  return false;
}
