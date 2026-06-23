function generatePassword(){

    let length = document.getElementById("length").value;

    let upper = document.getElementById("uppercase").checked;
    let lower = document.getElementById("lowercase").checked;
    let number = document.getElementById("numbers").checked;
    let symbol = document.getElementById("symbols").checked;

    let chars = "";

    if(upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if(number) chars += "0123456789";
    if(symbol) chars += "!@#$%^&*()";

    let password = "";

    for(let i=0;i<length;i++){
        let randomIndex = Math.floor(Math.random()*chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;

    checkStrength(password);
}

function checkStrength(password){

    let strength = "Weak";

    if(password.length >= 8)
        strength = "Medium";

    if(password.length >= 12)
        strength = "Strong";

    document.getElementById("strength").innerText =
        "Strength: " + strength;
}

function copyPassword(){

    let password = document.getElementById("password");

    password.select();

    navigator.clipboard.writeText(password.value);

    alert("Password Copied!");
}