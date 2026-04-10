function connect(event) {
  if (event) event.preventDefault();

  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const agree = document.getElementById('agree');
  const errorMessage = document.getElementById('errorMessage');

  const fields = [firstName, lastName, email, phone];

  errorMessage.textContent = '';
  fields.forEach(field => field.classList.remove('input-error'));

  for (const field of fields) {
    if (!field.value.trim()) {
      field.classList.add('input-error');
      errorMessage.textContent = 'Please complete all required fields.';
      field.focus();
      return false;
    }
  }

  const emailValue = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    email.classList.add('input-error');
    errorMessage.textContent = 'Please enter a valid email address.';
    email.focus();
    return false;
  }

  const phoneValue = phone.value.trim();
  const phonePattern = /^[0-9+()\\-\\s]{7,20}$/;
  if (!phonePattern.test(phoneValue)) {
    phone.classList.add('input-error');
    errorMessage.textContent = 'Please enter a valid phone number.';
    phone.focus();
    return false;
  }

  if (!agree.checked) {
    errorMessage.textContent = 'Please agree to the Terms and Conditions.';
    return false;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const baseGrantUrl =
    urlParams.get('base_grant_url') ||
    urlParams.get('grant_url');

  const userContinueUrl =
    urlParams.get('user_continue_url') ||
    'http://neverssl.com';

  if (!baseGrantUrl) {
    errorMessage.textContent = 'Meraki grant URL was not found. Please reopen the splash page from the Wi-Fi network.';
    return false;
  }

  const finalUrl =
    baseGrantUrl +
    (baseGrantUrl.includes('?') ? '&' : '?') +
    'continue_url=' + encodeURIComponent(userContinueUrl);

  window.location.href = finalUrl;
  return false;
}
