var validate = () => {
    var surname = document.moh_form.surname;
    var make = document.moh_form.make;
    var gname = document.moh_form.gname;
    var dob = document.moh_form.dob;
    var por = document.moh_form.por;
	var occ = document.moh_form.occ;
    var nationality = document.moh_form.nationality;
	var female = document.moh_form.female;
    var male= document.moh_form.male;
    var category = document.moh_form.category;
    
	document.getElementById("surname").required = true;
    document.getElementById("make").required = true;
    document.getElementById("gname").required = true;
    document.getElementById("dob").required = true;
    document.getElementById("por").required = true;
    document.getElementById("occ").required = true;
    document.getElementById("nationality").required = true;
    document.getElementById("female").required = true;
    document.getElementById("color").required = true;
    document.getElementById("category").required = true;

	// Matching letters
	var letters = /^[A-Za-z]+$/;
	// Matching uppercase
	var uppercase = /^[A-Z]+$/;
	// Matching numbers
	var numbers = /^[0-9]+$/;

	// Validating Entries --All fields mandatory
    if (surname.value=="" || gname.value=="" || dob.value==""
		|| por.value=="" || occ.value=="" || female.value=="" 
		|| category.value=="") {	
        
        alert("This field is required")
    }

    // Validating surname, make,   
    if (!surname.value.match(letters)) {
        alert("Only characters are allowed in the field Item Selected.");
		document.getElementById("surname").value='';
    }

    // Validating date of birth    
    if (!surname.value.match(letters)) {
        alert("Select Date of Birth.");
		document.getElementById("surname").value='';
    }
    
    // Validating category  
    if (!surname.value.match(letters)) {
        alert("Select Patient Category.");
		document.getElementById("surname").value='';
    }
}