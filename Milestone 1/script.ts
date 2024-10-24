// Select the toggle button and the skills sections
const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const hardSkills = document.querySelector('.hard-skills') as HTMLDivElement;
const softSkills = document.querySelector('.soft-skills') as HTMLDivElement;

// Function to toggle visibility of the skills section
const toggleSkillsVisibility = () => {
    if (softSkills.style.display === 'none' || softSkills.style.display === '') {
        softSkills.style.display = 'block';
        hardSkills.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Hard Skills';
    } else {
        softSkills.style.display = 'none';
        hardSkills.style.display = 'block';
        toggleSkillsButton.textContent = 'Show Soft Skills';
    }
};

// Attach click event listener to the toggle button
toggleSkillsButton.addEventListener('click', toggleSkillsVisibility);

// Initialize skills section to show hard skills by default
softSkills.style.display = 'none';

