function validateForm() {
    let firstName = document.forms["myForm"]["fname"].value;
    if (firstName == "") {
        alert("First Name must be filled out");
        return false;
    }

    let lastName = document.forms["myForm"]["lname"].value;
    if (lastName == "") {
        alert("Last Name must be filled out");
        return false;
    }

    let email = document.forms["myForm"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else {
        validateEmail();
    }

    let number = document.forms["myForm"]["number"].value;
    if (number == "") {
        alert("Number must be filled out");
        return false;
    } else {
        var p = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
        let val = document.forms["myForm"]["number"].value;
        let result = p.test(val);
        if (result !== true) {
            alert("Fill valid phone number");
            return false;
        }
    }

    let age = document.forms["myForm"]["age"].value;
    if (age == "") {
        alert("Age must be filled out");
        return false;
    }


    let gender = document.forms["myForm"]["gender"].value;
    if (gender == "") {
        alert("Gender must be chosen");
        return false;
    }
}

function validateEmail() {
    let userEmail = document.forms["myForm"]["email"].value;
    let regex = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(userEmail);
    if (result !== true) {
        alert("Invalid email");
        return false;
    }
}

// function valid() {
//     var p = /^\d{10}$/;
//     let val = document.forms["myForm"]["number"].value;
//     let result = p.test(val);
//     if (result !== true) {
//         alert("Fill valid phone number");
//         return false;
//     }
    // if (val.value.length != 10) {
    //     alert("Plz Enter 10 Digits in phone-number!!");
    //     return false;
    // }
// }