// Example skills data
var skills = [
    { name: "HTML", level: 90, icon: "fab fa-html5", type: 'hard' },
    { name: "CSS", level: 85, icon: "fab fa-css3-alt", type: 'hard' },
    { name: "JavaScript", level: 80, icon: "fab fa-js-square", type: 'hard' },
    { name: "TypeScript", level: 75, icon: "fab fa-typescript", type: 'hard' },
    { name: "Communication", level: 90, icon: "fas fa-comments", type: 'soft' },
    { name: "Problem Solving", level: 85, icon: "fas fa-lightbulb", type: 'soft' },
    { name: "Teamwork", level: 95, icon: "fas fa-users", type: 'soft' }
];
// Function to dynamically render skills
var renderSkills = function () {
    var skillsList = document.getElementById("skills-list");
    if (skillsList) {
        // Clear existing skills before rendering
        skillsList.innerHTML = '';
        skills.forEach(function (skill) {
            // Create skill container
            var skillContainer = document.createElement("div");
            skillContainer.classList.add("skill");
            // Create skill name and icon
            var skillName = document.createElement("div");
            skillName.classList.add("skill-name");
            var icon = document.createElement("i");
            icon.classList.add(skill.icon);
            skillName.appendChild(icon);
            skillName.appendChild(document.createTextNode(skill.name));
            // Create progress bar container
            var progressBar = document.createElement("div");
            progressBar.classList.add("progress-bar");
            // Create progress bar div
            var progress = document.createElement("div");
            progress.classList.add("progress");
            progress.style.width = "".concat(skill.level, "%"); // Set the width based on skill level
            // Append progress bar to the skill container
            progressBar.appendChild(progress);
            // Append skill name, icon, and progress bar to the skill container
            skillContainer.appendChild(skillName);
            skillContainer.appendChild(progressBar);
            // Append the skill container to the skills list in the HTML
            skillsList.appendChild(skillContainer);
        });
    }
};
// Call the function to render skills on page load
window.addEventListener('load', renderSkills);
