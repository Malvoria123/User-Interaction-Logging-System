document.getElementById("nav_home").addEventListener("click", function() {
    window.location.href = "../sites/index.html";
});
document.getElementById("nav_products").addEventListener("click", function() {
    window.location.href = "../sites/products.html";
});
document.getElementById("nav_recipes").addEventListener("click", function() {
    window.location.href = "../sites/recipes.html";
});
document.getElementById("nav_aboutus").addEventListener("click", function() {
    window.location.href = "../sites/aboutus.html";
});
document.getElementById("nav_contactus").addEventListener("click", function() {
    window.location.href = "../sites/contactus.html";
});

function validateNumbersOnly(input) {
    for (var i = 0; i < input.length; i++) {
        
        if (isNaN(parseInt(input[i]))) {
            return false;
        }
    }
    return true;
}

function containsSpecialCharacters(input) {
    var allowedCharacters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (allowedCharacters.indexOf(char) === -1) {
            return true;
        }
    }
    return false;
}

function collect_data() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
  
    const genderInputs = document.getElementsByName('gender');
    let selectedGender = '';
    for (const input of genderInputs) {
      if (input.checked) {
        selectedGender = input.id;
        break;
      }
    }
  
    const prob = document.getElementById('prob').value;
    
    // Create an object to store the data
    const logData = {
        timestamp: new Date().toLocaleString(),
        userAgent: navigator.userAgent,
        screenWidth: screen.width,
        screenHeight: screen.height,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        gender: selectedGender,
        problemDescription: prob
    };

    logInteraction("contact_form_data", logData);
    console.log(logData);
}

// Function to send interaction data to the server
async function logInteraction(type, data) {
    try {
        await fetch("https://interaction-logger-backend.vercel.app/api/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "a8UvF23Mv1PA900Hf"
            },
            body: JSON.stringify({ type, data }),
        });
        console.log("Interaction logged successfully!");
    } catch (error) {
        console.error("Error logging interaction:", error);
    }
}

function validateData(event) {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var cpassword = document.getElementById("cpassword");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var prob = document.getElementById("prob");
    var agreement = document.getElementById("agreement");
    
    var valfirstname1 = document.getElementById("valfirstname1");
    var valphone1 = document.getElementById("valphone1");
    var valphone2 = document.getElementById("valphone2");
    var valemail1 = document.getElementById("valemail1");
    var valemail2 = document.getElementById("valemail2");
    var valpassword1 = document.getElementById("valpassword1");
    var valpassword2 = document.getElementById("valpassword2");
    var valcpassword1 = document.getElementById("valcpassword1");
    var valgender1 = document.getElementById("valgender1");
    var valprob1 = document.getElementById("valprob1");
    var valagreement1 = document.getElementById("valagreement1");
    var temp = 0;

    valfirstname1.style.display = 'none';
    valphone1.style.display = 'none';
    valphone2.style.display = 'none';
    valemail1.style.display = 'none';
    valemail2.style.display = 'none';
    valpassword1.style.display = 'none';
    valpassword2.style.display = 'none';
    valcpassword1.style.display = 'none';
    valgender1.style.display = 'none';
    valprob1.style.display = 'none';
    valagreement1.style.display = 'none';
    
    if (firstname.value === "") {
        valfirstname1.style.display = 'block';
        temp++;
    }
    if (phone.value === "") {
        valphone1.style.display = 'block';
        temp++;
    }

    if (!validateNumbersOnly(phone.value)) {
        valphone2.style.display = 'block';
        temp++;
    }

    if (email.value === "") {
        valemail1.style.display = 'block';
        temp++;
    } else if (!email.value.endsWith("@email.com")) {
        valemail2.style.display = 'block';
        temp++;
    }

    if (password.value === "") {
        valpassword1.style.display = 'block';
        temp++;
    } else if (!containsSpecialCharacters(password.value)) {
        valpassword2.style.display = 'block';
        temp++;
    } else if (cpassword.value !== password.value) {
        valcpassword1.style.display = 'block';
        temp++
    }

    if (!male.checked && !female.checked) {
        valgender1.style.display = 'block';
        temp++;
    }

    if (prob.value === "") {
        valprob1.style.display = 'block';
        temp++;
    }

    if (!agreement.checked) {
        valagreement1.style.display = 'block';
        temp++;
    }

    event.preventDefault();
    if (!temp) {
        collect_data()
        return true
    } else {
        return false
    }
}

// document.getElementById('theform').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent actual form submission
  
//     const firstname = document.getElementById('firstname').value;
//     const lastname = document.getElementById('lastname').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
  
//     const genderInputs = document.getElementsByName('gender');
//     let selectedGender = '';
//     for (const input of genderInputs) {
//       if (input.checked) {
//         selectedGender = input.value;
//         break;
//       }
//     }
  
//     const prob = document.getElementById('prob').value;
  
//     console.log('First Name:', firstname);
//     console.log('Last Name:', lastname);
//     console.log('Phone:', phone);
//     console.log('Email:', email);
//     console.log('Gender:', selectedGender);
//     console.log('Problem Description:', prob);
//   });
  
  