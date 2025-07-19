// \fronend1\FRONTEND-\login.js
document.querySelector('.login-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    email: form.email.value,
    password: form.password.value
  };
  const res = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await res.json();
  if (res.ok) {
    alert('Login successful!');
    // Save token for authenticated requests
    localStorage.setItem('token', result.token);
    // Redirect or update UI as needed
  } else {
    alert(result.message || 'Login failed');
  }
});