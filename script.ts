document.getElementById('resume-form')?.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get values from form fields
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Create the output resume
  const resumeHtml = `
      <h2>Editable Resume</h2>
      <p><strong>Name:</strong><span contenteditable="true">${name}</span></p>
      <p><strong>Email:</strong><span contenteditable="true"> ${email}</span></p>
      <p><strong>Phone:</strong><span contenteditable="true"> ${phone}</span></p>
      <h3>Education</h3>
      <p>contenteditable="true"${education}</p>
      <h3>Experience</h3>
      <p>contenteditable="true"${experience}</p>
      <h3>Skills</h3>
      <p>contenteditable="true"${skills}</p>
  `;

  // Display the resume in the resume-display div
  document.getElementById('resume-display')!.innerHTML = resumeHtml;
});
