document.getElementById("registerForm").addEventListener("submit", function (e){
    e.preventDefault()

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const tanggal = document.getElementById("tanggal").value;

    const password = document.getElementById("password").value;

    const gender = document.querySelector('input[name="gender"]:checked').value;

    const user ={
        nama: nama,
        email: email,
        password: password,
        tanggal: tanggal,
        gender: gender,
    };
    localStorage.setItem(email, JSON,stringfy(user));

    alert("Sukses Daftar!!")

    const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = nama;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = tanggal;
    newRow.insertCell(3).textContent = gender;

    document.getElementById("registerForm").reset();
});