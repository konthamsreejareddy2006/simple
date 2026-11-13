function login() {
    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Enter name");
        return;
    }

    document.getElementById("student").textContent = name;
    document.getElementById("login").style.display = "none";
    document.getElementById("exam").style.display = "block";
}

function result() {
    let score = 0;

    if (document.querySelector('[name="q1"]:checked')?.value == "HTML")
        score++;

    if (document.querySelector('[name="q2"]:checked')?.value == "CSS")
        score++;

    document.getElementById("exam").style.display = "none";
    document.getElementById("output").textContent =
        "Your Score: " + score + " / 2";
}