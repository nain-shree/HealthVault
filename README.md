# 🩺 HealthVault

> A prototype Personal Health Record (PHR) Management System built during **Hack Horizon 2026**.

HealthVault is a web-based healthcare application that enables patients to securely manage, organize, and share their medical records. The project was developed as a hackathon prototype demonstrating a simplified digital health record system with user authentication, medical history tracking, record uploading, and OTP-based record sharing.

---

## 📖 Overview

Managing medical records across hospitals and clinics can be inconvenient and time-consuming. HealthVault aims to simplify this process by providing a centralized platform where users can:

- Store medical records
- View their medical history
- Upload new reports and prescriptions
- Share records securely using OTP verification

This project was developed as a proof-of-concept during a 24-hour hackathon.

---

# ✨ Features

### 🏠 Landing Page
- Modern healthcare-themed interface
- Responsive hero section
- Smooth page animations
- Login popup

---

### 🔐 User Login

Prototype authentication using a Node.js backend.

Demo Accounts

| Role | Email | Password |
|-------|--------|----------|
| Patient | patient@gmail.com | 1234 |
| Doctor | doctor@gmail.com | 1234 |

---

### 📊 Dashboard

After login, users are redirected to a dashboard displaying:

- Total Reports
- Prescriptions
- Shared Records

Quick navigation to:

- Upload Records
- Medical History
- Share Records

---

### 📤 Upload Medical Records

Users can upload:

- Reports
- Prescriptions

Includes:

- Record title
- Record type
- Date
- File upload field

(Currently implemented as a frontend prototype.)

---

### 📜 Medical History Timeline

Displays medical records in chronological order.

Example records include:

- Blood Test Report
- Doctor Prescription
- X-Ray Scan

---

### 🔑 Secure Record Sharing

HealthVault demonstrates OTP-based record sharing.

Workflow:

1. Generate OTP
2. Share OTP with doctor
3. Doctor enters OTP
4. OTP is verified by backend
5. Access is granted

---

## 🛠 Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend

- Node.js
- Express.js
- CORS

---

## 📂 Project Structure

```
HealthVault
│
├── backend
│   └── server.js
│
├── frontend
│   ├── index.html
│   ├── dashboard.html
│   ├── upload.html
│   ├── history.html
│   ├── share.html
│   ├── script.js
│   └── style.css
│
└── README.md
```

---

# ⚙ Backend APIs

### Login

```
POST /login
```

Authenticates users using demo credentials.

---

### Generate OTP

```
POST /generate-otp
```

Generates a random 4-digit OTP and stores it temporarily.

---

### Verify OTP

```
POST /verify-otp
```

Verifies the generated OTP before granting access.

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/nain-shree/HealthVault.git
```

---

### Backend

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Run server

```bash
node server.js
```

Server runs at

```
http://localhost:5000
```

---

### Frontend

Open

```
frontend/index.html
```

using Live Server in VS Code or any local web server.

---

## 📸 Screenshots

Add screenshots here after uploading them.

Suggested screenshots:

- Landing Page
- Login Popup
- Dashboard
- Upload Page
- Medical History
- Share Records
- OTP Verification

---

## ⚠ Current Limitations

This project was created as a hackathon prototype and currently includes several simplifications.

- Demo authentication (no database)
- No real user registration
- Medical records are not permanently stored
- OTP is stored only in server memory
- File upload is frontend only
- No cloud storage integration
- No encryption or production-level security
- Backend uses dummy data for demonstration

---

## 🔮 Future Improvements

- MongoDB integration
- JWT Authentication
- Password hashing using bcrypt
- Cloud storage for medical reports
- Patient profile management
- Doctor dashboard
- Appointment scheduling
- Medical report search
- Download and print reports
- Responsive mobile optimization
- Role-based authorization
- Email-based OTP delivery

---

## 👩‍💻 My Contribution

As Team Leader and Frontend Developer, I contributed to:

- Project planning
- UI/UX design
- Landing page development
- Dashboard development
- Medical History page
- Upload page
- Share Records page
- Frontend-backend integration
- Authentication workflow
- OTP verification workflow

---

## 🏆 Hackathon

Developed during

**Hack Horizon 2026**

Theme:
**Health & Wellness**

This project represents a functional proof-of-concept built within the constraints of a hackathon, demonstrating healthcare record management and secure data-sharing concepts.

---

## 📄 License

This project is intended for educational and portfolio purposes.
