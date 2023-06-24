function isAuthenticated() {
    const user = localStorage.getItem("user");
    return user && JSON.parse(user).accessToken;
}

function displayUserDetails() {
    const user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("fullname").textContent = `Name: ${user.fullname}`;
    document.getElementById("email").textContent = `Email: ${user.email}`;
}

function logout() {
    localStorage.removeItem("user");
    location.href = "index.html";
}

window.addEventListener("load", function () {
    if (!isAuthenticated()) {
        location.href = "index.html";
    } 
    else {
        displayUserDetails();
    }
});

document.getElementById("logout-button").addEventListener("click", logout);
