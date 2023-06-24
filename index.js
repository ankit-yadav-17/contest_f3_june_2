function generateAccessToken() {
    const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const tokenLength = 16;
    let accessToken = "";
    for (let i = 0; i < tokenLength; i++) {
        accessToken += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return accessToken;
}

document.getElementById("signup-button").addEventListener("click", function () {
    const fullname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorElement = document.getElementById("error-message");
    const successElement = document.getElementById("success-message");

    // Check if all fields are filled
    if (fullname && email && password) {
        // Check if the password and confirm password match
        if (password === confirmPassword) {
            const user = {
                fullname,
                email,
                password,
            };
            saveUserState(user);
            successElement.textContent = "Successfully Signed Up!";
            errorElement.textContent = "";

            setTimeout(function () {
                location.href = "profile.html";
            }, 2000);
        }
        else {
            errorElement.textContent = "Password and confirm password do not match.";
            successElement.textContent = "";
        }
    } 
    else {
        errorElement.textContent = "ERROR: All the fields are mandatory";
        successElement.textContent = "";
    }
});

function saveUserState(user) {
    const accessToken = generateAccessToken();
    user.accessToken = accessToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", JSON.stringify(user));
}
