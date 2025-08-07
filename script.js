document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  // Dummy login check
  if (username === 'admin' && password === 'password123') {
    alert('Login successful!');
    errorMsg.textContent = '';
    // Redirect or other logic here
  } else {
    errorMsg.textContent = 'Invalid username or password.';
  }
});
