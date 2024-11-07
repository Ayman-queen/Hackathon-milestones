// Import jsPDF
declare const jsPDF: any;

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement | null;
    const downloadContainer = document.getElementById("download-pdf-container") as HTMLElement | null;
    const resumeDisplay = document.getElementById("resume-display") as HTMLElement | null;
    const downloadPDFButton = document.getElementById("download-pdf") as HTMLButtonElement | null;

    form?.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        // Collect form values
        const firstName = (document.getElementById("first-name") as HTMLInputElement).value;
        const middleName = (document.getElementById("middle-name") as HTMLInputElement).value;
        const lastName = (document.getElementById("last-name") as HTMLInputElement).value;
        const designation = (document.getElementById("designation") as HTMLInputElement).value;
        const address = (document.getElementById("address") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
        const achievementTitle = (document.getElementById("achievement-title") as HTMLInputElement).value;
        const achievementDescription = (document.getElementById("achievement-description") as HTMLTextAreaElement).value;
        const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
        const company = (document.getElementById("company") as HTMLInputElement).value;
        const startDate = (document.getElementById("start-date") as HTMLInputElement).value;
        const endDate = (document.getElementById("end-date") as HTMLInputElement).value;
        const jobDescription = (document.getElementById("job-description") as HTMLTextAreaElement).value;
        const school = (document.getElementById("school") as HTMLInputElement).value;
        const degree = (document.getElementById("degree") as HTMLInputElement).value;
        const eduStartDate = (document.getElementById("edu-start-date") as HTMLInputElement).value;
        const eduEndDate = (document.getElementById("edu-end-date") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value.split(',');

        // Display Resume Preview
        if (resumeDisplay) {
            resumeDisplay.innerHTML = `
                <h2>${firstName} ${middleName} ${lastName}</h2>
                <h3>${designation}</h3>
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
        if (downloadContainer) {
            downloadContainer.style.display = "block";
        }

        // PDF Download functionality
        downloadPDFButton?.addEventListener("click", () => {
            const doc = new jsPDF();

            doc.setFont("helvetica", "normal");
            doc.setFontSize(12);
            doc.text(`${firstName} ${middleName} ${lastName}`, 20, 30);
            doc.text(`Job Title: ${designation}`, 20, 40);
            doc.text(`Contact: ${phone}, ${email}`, 20, 50);
            doc.text(`Address: ${address}`, 20, 60);
            doc.text("Summary", 20, 70);
            doc.text(summary, 20, 80);
            doc.text("Achievements", 20, 90);
            doc.text(`${achievementTitle}: ${achievementDescription}`, 20, 100);
            doc.text("Experience", 20, 110);
            doc.text(`${jobTitle} at ${company} (${startDate} to ${endDate})`, 20, 120);
            doc.text("Education", 20, 130);
            doc.text(`${school} - ${degree} (${eduStartDate} to ${eduEndDate})`, 20, 140);
            doc.text("Skills", 20, 150);
            skills.forEach((skill, index) => {
                doc.text(`${index + 1}. ${skill.trim()}`, 20, 160 + (index * 10));
            });

            // Download the PDF
            doc.save(`${firstName}_${lastName}_Resume.pdf`);
        });
    });
});
