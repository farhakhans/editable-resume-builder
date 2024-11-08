var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    // Get values from form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create the output resume
    var resumeHtml = "\n      <h2>Editable Resume</h2>\n      <p><strong>Name:</strong><span contenteditable=\"true\">".concat(name, "</span></p>\n      <p><strong>Email:</strong><span contenteditable=\"true\"> ").concat(email, "</span></p>\n      <p><strong>Phone:</strong><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n      <h3>Education</h3>\n      <p>contenteditable=\"true\"").concat(education, "</p>\n      <h3>Experience</h3>\n      <p>contenteditable=\"true\"").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p>contenteditable=\"true\"").concat(skills, "</p>\n  ");
    // Display the resume in the resume-display div
    document.getElementById('resume-display').innerHTML = resumeHtml;
});
