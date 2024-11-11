"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// import jQuery from "jquery";
// require("print-this");
let resumeForm = document.querySelector("#cv-form");
let resumeOutput = document.querySelector("#resume-output");
let editBtn = document.querySelector("#edit-btn");
let printBtn = document.querySelector("#print-btn");
resumeForm?.addEventListener("submit", (evt) => {
    evt.preventDefault();
    resumeOutput.style.display = "block"; // show the form
    shareBtn.style.display = "block"; // show the share button
    editBtn.style.display = "block"; // show the edit button
    printBtn.style.display = "block"; // show the print button
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const education = document.getElementById("education");
    const experience = document.getElementById("experience");
    const skills = document.getElementById("skills");
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("please fill all field");
        return;
    }
    document.getElementById("resumeName").innerText = `Name: ${name.value}`;
    document.getElementById("resumeEmail").innerText = `Email: ${email.value}`;
    document.getElementById("resumePhone").innerText = `Phone: ${phone.value}`;
    document.getElementById("resumeEducation").innerText = `Education: ${education.value}`;
    document.getElementById("resumeExperience").innerText = `Experience: ${experience.value}`;
    document.getElementById("resumeSkils").innerText = `Skills: ${skills.value}`;
});
// Edit Resume button functionality
editBtn?.addEventListener("click", () => {
    resumeForm.style.display = "block"; // Show the form again
    resumeOutput.style.display = "none"; // Hide the resume output
    editBtn.style.display = "none"; // Hide the edit button
    shareBtn.style.display = "none"; // Hide the share button
    printBtn.style.display = "none"; // Hide the print button
    // Repopulate the form with current resume data
    const name = document.getElementById("resumeName")?.innerText.split(': ')[1];
    const email = document.getElementById("resumeEmail")?.innerText.split(': ')[1];
    const phone = document.getElementById("resumePhone")?.innerText.split(': ')[1];
    const education = document.getElementById("resumeEducation")?.innerText;
    const experience = document.getElementById("resumeExperience")?.innerText;
    const skills = document.getElementById("resumeSkils")?.innerText;
    // Set the form inputs to these values
    document.getElementById("name").value = name ?? '';
    document.getElementById("email").value = email ?? '';
    document.getElementById("phone").value = phone ?? '';
    document.getElementById("education").value = education ?? '';
    document.getElementById("experience").value = experience ?? '';
    document.getElementById("skills").value = skills ?? '';
});
// shareable link
let username = document.getElementById("username");
const shareBtn = document.querySelector("#share-btn");
shareBtn.addEventListener("click", async () => {
    try {
        const shareableLink = `https://milestone5-unique-path-and-shareable-link.vercel.app//?username.value/${username.value.replace(/\s+/g, '_')}`;
        await navigator.clipboard.writeText(shareableLink);
        alert("Shareable linkcopied to Clipboard!");
    }
    catch (err) {
        alert("Failed to copy link clipboard . please try again!");
    }
});
$(document).ready(function () {
    $("#print-btn").on("click", function () {
        $("#resume-output").printThis();
    });
});
