var username = document.getElementById('username');
var bitsID = document.getElementById('bits-id');
var phoneNumber = document.getElementById('phone-number');
var spanBitsID = document.getElementById('span-bits-id');
var spanNumber = document.getElementById('span-number');

var usernameNotEmpty = false;
var validBitsID = false;
var validPhoneNumber = false;

username.addEventListener("change", usernameValidator)
bitsID.addEventListener("change", bitsIdValidator);
phoneNumber.addEventListener("change", phoneNumberValidator);

function usernameValidator(){
    if(username.value != ''){
        usernameNotEmpty = true;
    }else{
        usernameNotEmpty = 'false';
    }

    setInterval(1);
}

function bitsIdValidator(){
    const regexID = /^202[0-9]((A|B)[1-5|7-8]|AA)(PS|A[1-5|7-8]|AA)[0-9][0-9][0-9][0-9](P)$/;


    if(regexID.test(bitsID.value)){
        spanBitsID.innerHTML = 'BITS ID is valid'
        spanBitsID.style.color = 'green';
        validBitsID = true;
    }else{
        spanBitsID.innerHTML = 'BITS ID does not match our records'
        spanBitsID.style.color = 'red';
        validBitsID = false;
    }
    setInterval(1);
    
}


function phoneNumberValidator(){
    const regexNumber = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    if(regexNumber.test(phoneNumber.value)){
        spanNumber.innerHTML = 'Your Number is Valid';
        spanNumber.style.color = 'green';
        validPhoneNumber = true;
    }else{
        spanNumber.innerHTML = 'Your Number is invalid';
        spanNumber.style.color = 'red';
        validPhoneNumber = false;
    }
    setInterval(1);
}



loginToVendorManagement = function (){
    if(usernameNotEmpty == true && validBitsID == true && validPhoneNumber == true){
        window.open("http://127.0.0.1:5500/vendorManagement.html");
    }else{
        
    }
}