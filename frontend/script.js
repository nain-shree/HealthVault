// Navigation
function goToDashboard() {
    window.location.href = "dashboard.html";
}

function goToUpload() {
    window.location.href = "upload.html";
}

function goToHistory() {
    window.location.href = "history.html";
}

function goToShare() {
    window.location.href = "share.html";
}


// ✅ Animation (Landing Page)
window.addEventListener("load", function () {
    const hero = document.querySelector(".hero");
    const features = document.querySelector(".features");

    if (hero) {
        setTimeout(() => {
            hero.classList.add("show");
        }, 100);
    }

    if (features) {
        setTimeout(() => {
            features.classList.add("show");
        }, 500);
    }
});


// ✅ Upload Form Handling
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".upload-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Record Uploaded Successfully!");
        });
    }
});


// ✅ Share Records
  async function shareRecords() {
    const email = "patient@gmail.com";

    console.log("Sending request...");

    try {
        const response = await fetch("http://127.0.0.1:5000/generate-otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        console.log("Response received:", response);

        const data = await response.json();
        console.log("Data:", data);

        if (response.ok) {
            document.getElementById("otpDisplay").innerText =
                "OTP for doctor: " + data.otp;
        } else {
            alert("Error generating OTP");
        }

    } catch (error) {
        console.error("ERROR:", error);
        alert("Server error. Check console.");
    }
}

// ✅ LOGIN POPUP CONTROL
function openLogin() {
    const popup = document.getElementById("loginPopup");
    if (popup) popup.style.display = "flex";
}

function closeLogin() {
    const popup = document.getElementById("loginPopup");
    if (popup) popup.style.display = "none";
}


// ✅ LOGIN FUNCTION (CONNECTS TO BACKEND)
async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login successful!");

            // Close popup
            closeLogin();

            // Redirect based on role
            if (data.role === "patient") {
                window.location.href = "dashboard.html";
            } else if (data.role === "doctor") {
                window.location.href = "dashboard.html";
            }

        } else {
            alert(data.message);
        }

    } catch (error) {
        alert("Server error. Make sure backend is running.");
        console.log(error);
    }
}
async function verifyOtp() {
    console.log("Verify button clicked");

    const otp = document.getElementById("doctorOtp").value;
    const email = "patient@gmail.com";

    if (!otp) {
        alert("Please enter OTP");
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:5000/verify-otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, otp })
        });

        const data = await response.json();

        console.log("Verify response:", data);

        if (response.ok) {
            document.getElementById("accessResult").innerText =
                "✅ Access Granted";
        } else {
            document.getElementById("accessResult").innerText =
                "❌ Invalid OTP";
        }

    } catch (error) {
        console.error(error);
        alert("Server error");
    }
}