// Get reference to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form Submission
form.addEventListener('submit', function (event) {
    // Prevent page reload
    event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n    \n    <h3><b>Education</b></h3>\n    <p>").concat(education, "</p>\n    \n    <h3><b>Experience</b></h3>\n    <p>").concat(experience, "</p>\n    \n    <h3><b>Skills</b></h3>\n    <p>").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
// //Get reference to the form and display area
// const form = document.getElementById('resume-form') as HTMLFormElement;
// const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
// // Handle form Submission
// form.addEventListener('submit', (event: Event) => {
//  //prevent page reload
//  event.preventDefault();
// // Collect input values
//     const name= (document.getElementById('name') as HTMLInputElement).value;
//     const email =  (document.getElementById('email') as HTMLInputElement).value;
//     const phone = (document.getElementById('phone') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLInputElement).value;
//     const experience =  (document.getElementById('experience') as HTMLInputElement).value;
//     const skills =  (document.getElementById('skills') as HTMLInputElement).value;
//     //Generate the resume content Dynamically
//     const resumeHTML = `
//     <h2><b>Resume</b><h2>
//     <h3>Personal Information<h3>
//     <p><strong>Name:</strong>${name}</p>
//     <p><strong>Email:</strong>${email}</p>
//     <p><strong>phone:</strong>${phone}</p>
//     <h3>Education</h3>
//     <p>${education}</p>
//     <h3>Experience</h3>
//     <p>${experience}</p>
//     <h3>Skills</h3>
//     <p>${skills}</p>
//     `;
//     // Display the generated resume
//     if(resumeDisplayElement){
//         resumeDisplayElement.innerHTML = resumeHTML;
//     } else {
//         console.error('The resume display element is missing.')
//     }
// });
