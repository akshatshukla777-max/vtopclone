// Toggle accordion sections open/closed
function toggleAccordion(sectionId) {
    const content = document.getElementById(sectionId + '-content');
    const arrow = document.getElementById(sectionId + '-arrow');

    if (content.classList.contains('open')) {
        // Close
        content.classList.remove('open');
        arrow.innerHTML = '&#9660;'; // Down arrow
        arrow.classList.remove('up');
    } else {
        // Open
        content.classList.add('open');
        arrow.innerHTML = '&#9650;'; // Up arrow
        arrow.classList.add('up');
    }
}
