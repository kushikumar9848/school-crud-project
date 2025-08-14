const API_URL = 'http://localhost:5000/students';

function fetchStudents() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            let table = '';
            data.forEach(student => {
                table += `<tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.course}</td>
                    <td>${student.grade}</td>
                    <td>
                        <button onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                </tr>`;
            });
            document.getElementById('studentsTable').innerHTML = table;
        });
}

function addStudent() {
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const grade = document.getElementById('grade').value;

    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, course, grade })
    }).then(() => fetchStudents());
}

function deleteStudent(id) {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
        .then(() => fetchStudents());
}

fetchStudents();
