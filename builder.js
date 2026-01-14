let photoBase64 = "";

document.getElementById("photo").addEventListener("change", function (e) {
  const reader = new FileReader();
  reader.onload = () => {
    photoBase64 = reader.result;
    document.getElementById("previewPhoto").src = photoBase64;
  };
  reader.readAsDataURL(e.target.files[0]);
});

function updatePreview() {
  document.getElementById("previewName").innerText = name.value;
  document.getElementById("previewEmail").innerText = email.value;
  document.getElementById("previewPhone").innerText = phone.value;
  document.getElementById("previewEducation").innerText = education.value;
  document.getElementById("previewExperience").innerText = experience.value;
  document.getElementById("previewHobbies").innerText = hobbies.value;

  previewLinks.innerHTML = `
    <a href="${linkedin.value}" target="_blank">LinkedIn</a> |
    <a href="${github.value}" target="_blank">GitHub</a> |
    <a href="${social.value}" target="_blank">Other</a>
  `;
}

function downloadResume() {
  const resumeContent = document.querySelector(".resume").outerHTML;

  const fullHTML = `
  <html>
  <head>
    <style>
      body { font-family: Arial; padding: 40px; }
      .profile-pic { width:120px; border-radius:50%; }
      h1 { color:#3f51b5; }
      h3 { border-bottom:1px solid #ccc; }
      a { color:#3f51b5; text-decoration:none; }
    </style>
  </head>
  <body>${resumeContent}</body>
  </html>`;

  const blob = new Blob([fullHTML], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "resume.html";
  link.click();
}
