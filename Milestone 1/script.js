// Select the toggle button and the skills sections
var toggleButton = document.getElementById('toggle-skills');
var hardSkills = document.querySelector('.hard-skills');
var softSkills = document.querySelector('.soft-skills');
// Function to toggle visibility of the skills section
toggleButton.addEventListener('click', function () {
    if (softSkills.style.display === 'none') {
        softSkills.style.display = 'block';
        hardSkills.style.display = 'none';
        toggleButton.textContent = 'Show Hard Skills';
    }
    else {
        softSkills.style.display = 'none';
        hardSkills.style.display = 'block';
        toggleButton.textContent = 'Show Soft Skills';
    }
});
