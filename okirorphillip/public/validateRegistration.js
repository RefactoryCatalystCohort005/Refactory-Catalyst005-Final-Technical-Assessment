var validateRegistration = () => {
    var surname = document.mydata.surname;
    var givenname = document.mydata.givenname;
    var placeofresidence = document.mydata.placeofresidence;
    var occupation = document.mydata.occupation;
    
    if (surname.value.length==""){
        surname.style.border = '1px solid red'
        alert("required")
        // formError.textContent = "surname cannot be left empty";
        // document.getElementById(“nameError).innerHTML =“Enter Correct Name”;
        // getElementById('{surname}'). innerHTML = '{surname cannot be left empty}';
        return false
    }
    if (occupation.value.length==""){
        occupation.style.border = '1px solid red'
        alert("required")
        return false
    }
    if (givenname.value.length==""){
        givenname.style.border = '1px solid red'
        alert("required")
        return false
    }
    
    if (surname.value.length < 1 ||surname.value.length > 16){
        surname.style.border = '1px solid red'
        alert("surname should be between 1 and 16")
        return false
    }
    if (givenname.value.length < 1 ||givenname.value.length > 16){
        givenname.style.border = '1px solid red'
        alert("given name should be between 1 and 16")
        return false
    }

    if (placeofresidence.value.length < 1 ||placeofresidence.value.length > 16){
        placeofresidence.style.border = '1px solid red'
        alert("place of residence should be between 1 and 20")
        return false
    }
    // var caps = /[A-Z]/ ;
    // if (occupation.value.match(caps)) {
    //     occupation.style.border = '1px solid red'
    //     alert("Occupation should be in capital letters")
    // }
}