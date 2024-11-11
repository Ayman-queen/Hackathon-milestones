"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// require("print-this");
let sharebtn = document.getElementById("share-btn");
let cvform = document.querySelector("#cv-form");
let editbtn = document.getElementById("edit");
let cvTemplate = document.getElementById("cv-template");
cvform?.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("nameField").value;
    let currently_live = document.getElementById("currently_live").value;
    let DOB = document.getElementById("dateField").value;
    let phone = document.getElementById("contactField").value;
    let email = document.getElementById("emailField").value;
    let address = document.getElementById("addressField").value;
    // School
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const graduationDateStart = document.getElementById("graduation-date-start").value;
    const graduationDateEnd = document.getElementById("graduation-date-end").value;
    const jobTitle = document.getElementById("job-title").value;
    const company = document.getElementById("company").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const jobDescription = document.getElementById("job-description").value;
    const profession = document.getElementById("professionField").value;
    const about = document.getElementById("aboutField").value;
    // links
    let Github = document.getElementById("GithubField").value;
    let linkedin = document.getElementById("linkedinField").value;
    document.getElementById("currentlyT").textContent = currently_live;
    document.getElementById("DOBT").textContent = DOB;
    document.getElementById("nameT").textContent = name;
    document.getElementById("contactT").textContent = phone;
    document.getElementById("emailT").textContent = email;
    document.getElementById("addressT").textContent = address;
    document.getElementById("aboutT").textContent = about;
    // School
    document.getElementById("display-degree").textContent = degree;
    document.getElementById("display-institution").textContent = institution;
    document.getElementById("display-graduation-start").textContent = graduationDateStart;
    document.getElementById("display-graduation-end").textContent = graduationDateEnd;
    document.getElementById("LinkedInT").textContent = linkedin;
    document.getElementById("githubT").textContent = Github;
    document.getElementById("display-job-title").textContent = jobTitle;
    document.getElementById("display-company").textContent = company;
    document.getElementById("display-start-date").textContent = startDate;
    document.getElementById("display-end-date").textContent = endDate;
    document.getElementById("display-discription").textContent = jobDescription;
    document.getElementById("professionT").textContent = profession;
    // ******* Skills *********
    let skills = document.getElementsByClassName("sfield");
    let skillsStr = "";
    for (let e of skills) {
        let entries = e.value.split(",");
        for (let entry of entries) {
            skillsStr += `<li>${entry.trim()}</li>`;
        }
    }
    document.getElementById("skillT").innerHTML = skillsStr;
    // **** Setting Image ****
    let fileInput = document.getElementById("imageField").files?.[0];
    if (fileInput) {
        let reader = new FileReader();
        reader.onloadend = () => document.getElementById("imgTemplate").src = reader.result;
        reader.readAsDataURL(fileInput);
    }
    // **** Setting Image ****
    let fileInput2 = document.getElementById("imageField").files?.[0];
    if (fileInput2) {
        let reader = new FileReader();
        reader.onloadend = () => document.getElementById("imgTemplate-hide").src = reader.result;
        reader.readAsDataURL(fileInput2);
    }
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
    let names = document.getElementById("nameField");
    // shareable link
    sharebtn.addEventListener("click", async () => {
        try {
            const shareableLink = `https://milestone5-unique-path-and-shareable-link.vercel.app/?username.value/${names.value.replace(/\s+/g, '_')}`;
            await navigator.clipboard.writeText(shareableLink);
            alert("Shareable linkcopied to Clipboard!");
            //   https://milestone5-unique-path-and-shareable-link.vercel.app/
        }
        catch (err) {
            alert("Failed to copy link clipboard . please try again!");
        }
    });
});
editbtn?.addEventListener("click", () => {
    cvform.style.display = "block";
    cvTemplate.style.display = "none";
});
$(document).ready(function () {
    $("#print").on("click", function () {
        $(".container").printThis();
    });
});
