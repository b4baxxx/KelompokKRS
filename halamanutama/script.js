function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

document.getElementById('krsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const course = document.getElementById('course').value;
    const credits = document.getElementById('credits').value;
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Mata Kuliah: ${course} | SKS: ${credits}</p>`;
    
    // Reset form
    this.reset();
});