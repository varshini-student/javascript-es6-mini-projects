let students = [];

document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let m1 = Number(document.getElementById("mark1").value);
    let m2 = Number(document.getElementById("mark2").value);
    let m3 = Number(document.getElementById("mark3").value);
    let m4 = Number(document.getElementById("mark4").value);
    let m5 = Number(document.getElementById("mark5").value);

    let total = m1 + m2 + m3 + m4 + m5;
    let average = total / 5;
    let status = average >= 40 ? "Pass" : "Fail";

    students.push({
        name,
        total,
        average: average.toFixed(2),
        status
    });

    displayStudents();
    this.reset();
});

function displayStudents() {
    let tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    students.forEach(s => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${s.name}</td>
            <td>${s.total}</td>
            <td>${s.average}</td>
            <td class="${s.status === 'Pass' ? 'pass' : 'fail'}">
                ${s.status}
            </td>
        `;
        tbody.appendChild(row);
    });
}

function resetAll() {
    students = [];
    document.querySelector("#studentTable tbody").innerHTML = "";
    document.getElementById("studentForm").reset();
}

