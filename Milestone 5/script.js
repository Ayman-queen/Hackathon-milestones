document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form");
    form?.addEventListener("submit", (event) => {
        event.preventDefault();

        // Collect form values
        const firstName = document.getElementById("first-name").value;
        const middleName = document.getElementById("middle-name").value;
        const lastName = document.getElementById("last-name").value;
        const designation = document.getElementById("designation").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const summary = document.getElementById("summary").value;
        const achievementTitle = document.getElementById("achievement-title").value;
        const achievementDescription = document.getElementById("achievement-description").value;
        const jobTitle = document.getElementById("job-title").value;
        const company = document.getElementById("company").value;
        const location = document.getElementById("location").value;
        const startDate = document.getElementById("start-date").value;
        const endDate = document.getElementById("end-date").value;
        const jobDescription = document.getElementById("job-description").value;
        const school = document.getElementById("school").value;
        const degree = document.getElementById("degree").value;
        const eduLocation = document.getElementById("edu-location").value;
        const eduStartDate = document.getElementById("edu-start-date").value;
        const eduEndDate = document.getElementById("edu-end-date").value;
        const eduDescription = document.getElementById("edu-description").value;
        const skills = document.getElementById("skills").value.split(',');

        // Get the profile picture
        const profilePic = document.getElementById("profile-pic").files[0];

        // Display Resume Preview
        const resumeDisplay = document.getElementById("resume-display");

        let profilePicHtml = '';
        if (profilePic) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePicHtml = `
                    <div style="text-align: center;">
                        <img src="${e.target.result}" alt="Profile Picture" style="max-width: 150px; border-radius: 50%; margin-bottom: 20px;">
                    </div>
                `;
                resumeDisplay.innerHTML = `
                    ${profilePicHtml}
                    <h2 style="text-align: center;">${firstName} ${middleName} ${lastName}</h2>
                    <h3 style="text-align: center;">${designation}</h3>
                    <p><strong>Contact:</strong> ${phone}, ${email}</p>
                    <p><strong>Address:</strong> ${address}</p>
                    <h3>Summary</h3>
                    <p>${summary}</p>
                    <h3>Achievements</h3>
                    <ul><li>${achievementTitle}: ${achievementDescription}</li></ul>
                    <h3>Experience</h3>
                    <p>${jobTitle} at ${company} (${startDate} to ${endDate}) - ${jobDescription}</p>
                    <h3>Education</h3>
                    <p>${school} - ${degree} (${eduStartDate} to ${eduEndDate})</p>
                    <h3>Skills</h3>
                    <ul>
                        ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
                    </ul>
                `;
            };
            reader.readAsDataURL(profilePic);
        } else {
            resumeDisplay.innerHTML = `
                <h2 style="text-align: center;">${firstName} ${middleName} ${lastName}</h2>
                <h3 style="text-align: center;">${designation}</h3>
                <p><strong>Contact:</strong> ${phone}, ${email}</p>
                <p><strong>Address:</strong> ${address}</p>
                <h3>Summary</h3>
                <p>${summary}</p>
                <h3>Achievements</h3>
                <ul><li>${achievementTitle}: ${achievementDescription}</li></ul>
                <h3>Experience</h3>
                <p>${jobTitle} at ${company} (${startDate} to ${endDate}) - ${jobDescription}</p>
                <h3>Education</h3>
                <p>${school} - ${degree} (${eduStartDate} to ${eduEndDate})</p>
                <h3>Skills</h3>
                <ul>
                    ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            `;
        }

        // Show the download button
        const downloadContainer = document.getElementById("download-pdf-container");
        downloadContainer.style.display = "block";

        // PDF Download functionality
        document.getElementById("download-pdf")?.addEventListener("click", () => {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // If profile picture is available, add it to the PDF
            if (profilePic) {
                const img = new Image();
                img.src = URL.createObjectURL(profilePic);
                img.onload = function () {
                    doc.addImage(img, "JPEG", 10, 10, 30, 30); // Adjust coordinates and size as needed
                    generateResumePDF();
                };
            } else {
                generateResumePDF();
            }

            function generateResumePDF() {
                doc.setFont("helvetica", "normal");
                doc.text(`${firstName} ${middleName} ${lastName}`, 20, 30);
                doc.setFontSize(12);
                doc.text(`Job Title: ${designation}`, 20, 40);
                doc.text(`Contact: ${phone}, ${email}`, 20, 50);
                doc.text(`Address: ${address}`, 20, 60);
                doc.text("Summary", 20, 70);
                doc.text(summary, 20, 80);
                doc.text("Achievements", 20, 110);
                doc.text(`${achievementTitle}: ${achievementDescription}`, 20, 120);
                doc.text("Experience", 20, 140);
                doc.text(`${jobTitle} at ${company} (${startDate} to ${endDate}) - ${jobDescription}`, 20, 150);
                doc.text("Education", 20, 180);
                doc.text(`${school} - ${degree} (${eduStartDate} to ${eduEndDate})`, 20, 190);
                doc.text("Skills", 20, 220);
                skills.forEach((skill, index) => {
                    doc.text(`${index + 1}. ${skill.trim()}`, 20, 230 + (index * 10));
                });

                // Download the PDF
                doc.save(`${firstName}_${lastName}_Resume.pdf`);
            }
        });
    });
});
