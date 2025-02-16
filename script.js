document.getElementById("bioDataForm").addEventListener("submit", function 
    (event) { 
        event.preventDefault(); 
     
        // Get values from form 
        let fullName = document.getElementById("fullName").value.trim(); 
        let dob = document.getElementById("dob").value; 
        let gender = document.getElementById("gender").value; 
        let email = document.getElementById("email").value.trim(); 
        let phone = document.getElementById("phone").value.trim(); 
        let nationality = document.getElementById("nationality").value.trim(); 
        let maritalStatus = document.getElementById("maritalStatus").value; 
        let profession = document.getElementById("profession").value.trim(); 
        let address = document.getElementById("address").value.trim(); 
     
        // Validate inputs 
        if (!fullName || !dob || !gender || !email || !phone || !nationality 
    || !maritalStatus || !profession || !address) { 
            alert("All fields are required!"); 
            return; 
        } 
     
        if (!/^\d{11,15}$/.test(phone)) { 
            alert("Phone number must be between 11-15 digits."); 
            return; 
        } 
     
        // Display submitted data in modal 
        document.getElementById("displayData").innerText = 
            `Name: ${fullName}\nDOB: ${dob}\nGender: ${gender}\nEmail: 
    ${email}\nPhone: ${phone}\nNationality: ${nationality}\nMarital Status: 
    ${maritalStatus}\nProfession: ${profession}\nAddress: ${address}`; 
     
        document.getElementById("bioDataModal").style.display = "flex"; 
    }); 
     
    // Close modal 
    document.getElementById("closeModal").addEventListener("click", function 
    () { 
        document.getElementById("bioDataModal").style.display = "none"; 
    });