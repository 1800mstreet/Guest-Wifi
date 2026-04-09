function connect(event) {
  if (event) event.preventDefault();

  const agree = document.getElementById('agree');

  if (!agree.checked) {
    alert('Please agree to the Terms and Conditions.');
    return false;
  }

  const urlParams = new URLSearchParams(window.location.search);

  const baseGrantUrl = urlParams.get("base_grant_url");
  const userContinueUrl = urlParams.get("user_continue_url") || "http://neverssl.com";

  if (!baseGrantUrl) {
    alert("Error: Missing Meraki grant URL");
    return false;
  }

  const finalUrl = baseGrantUrl + "?continue_url=" + encodeURIComponent(userContinueUrl);

  window.location.href = finalUrl;

  return false;
}
