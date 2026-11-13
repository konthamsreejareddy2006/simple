
let f = document.getElementById("f");

f.onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let college = document.getElementById("college").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;
    let event = document.getElementById("event").value;

    let msg = document.getElementById("msg");

    if (name == "" || email == "" || phone == "" ||
        gender == "" || college == "" || dept == "" ||
        year == "" || event == "") {
        msg.innerText = "Please fill all fields!";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        msg.innerText = "Invalid Email!";
    }
    else if (phone.length != 10 || isNaN(phone)) {
        msg.innerText = "Enter valid 10-digit phone!";
    }
    else {
        msg.innerText =
            "Registration Successful!\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Gender: " + gender + "\n" +
            "College: " + college + "\n" +
            "Department: " + dept + "\n" +
            "Year: " + year + "\n" +
            "Event: " + event;
    }
};

f.onreset = function() {
    document.getElementById("msg").innerText = "";
};
