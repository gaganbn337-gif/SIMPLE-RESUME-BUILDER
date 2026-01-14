fetch("http://localhost:5002/stats")
  .then(res => res.json())
  .then(d => stats.innerText = `Users: ${d.users} | Resumes: ${d.resumes}`);

function logout() {
  localStorage.clear();
  location.href = "login.html";
}
