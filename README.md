# API Documentation
### Building Web Service & RESTful API for WomenRise3T with Express
The goal of the WomenRise3T project is to design and develop a web service and RESTful API for managing scholarship mentorship resources specifically tailored to marginalized women in Indonesia's 3T (terdepan, terluar, tertinggal) regions. This service, built with Node.js and Express, forming a comprehensive backend for the WomenRise3T application. The application will leverage MongoDB as the primary database and Mongoose as the ODM to facilitate seamless data modeling and integration. Authentication handled by JWT (JSON Web Tokens).

## Installation & Setup
#### Prerequisites
Ensure you have the following installed on your system:

Node.js (v14 or above)
npm (comes with Node.js)

#### Step-by-Step Setup
1. Clone The repository
```
git clone https://github.com/Susi-Pudjiastuti/WomenRise3T-BE.git
```
2. Navigate to the Project Directory
```
cd WomenRise3T-BE
```
3. Install Dependencies
```
npm install
```
4. Set Up Environment Variables
```
nano .env
DB_URL= Your mongodb url
PRIVATE_KEY = Your private key
```
5. Start server
```
npm run dev
```
6. Check the API
```
http://localhost:3000/mentors
```
#### Models
```
Mentor

- namaLengkap : string (required),
- avatar : string (required),
- email : string (required),
- password : string,
- kartuIdentitas : string,
- asalDaerah: string (required),
- universitas : string (required),
- rating : string (required),
- totalSessions : Number (required),
- deskripsi : string (required),
- prestasi : [string] (required),
- studi : string | enum (required)

Mentorship

- tema : string | enum (required),
- tanggal : Date (required),
- jam : string (required),
- slot : Number (required),
- status : Boolean (required)
- mentor : ref ID Mentor

Scholarship

- namaUniversitas : string (required),
- gambar: string (required),
- linkBeasiswa : string (required)
- tanggal : Date (required),
- status : Boolean (required),
- approved: Boolean (required),
- daerahKhusus : string (required),
- nama : string (required),
- email : string (required)

User
- namaLengkap : string (required),
- avatar : string (required),
- email : string (required),
- password : string (required),
- asalDaerah : string (required),
- testimoni : string

Booking
- namaPendaftar: string (required),
- emailPendaftar: string (required),
- noHp: string (required),
- alasanMendaftar: string (required),
- mentorship: ref ID Mentorship,
- user: ref ID User
```

## - POST /mentors

- Request body:

```json
{
 "namaLengkap" : "string",
 "avatar" : "string",
 "email" : "string",
 "asalDaerah" : "string",
 "universitas" : "string",
 "rating" : "string",
 "totalSessions" : 20,
 "deskripsi" : "string",
 "prestasi" : "[string]",
 "studi" : "Studi Dalam Negeri/ Studi Luar Negeri"
}
```

- Response (201 - Created)

```json
{
  "message": "data Mentor berhasil dibuat",
  "data": "Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal membuat data mentor, pastikan data title telah diinput"
}
```

## - POST /mentors/seeder

- Request body:

```json
[
  {
 "namaLengkap" : "string",
 "avatar" : "string",
 "email" : "string",
 "asalDaerah" : "string",
 "universitas" : "string",
 "rating" : "string",
 "totalSessions" : 20,
 "deskripsi" : "string",
 "prestasi" : "[string]",
 "studi" : "Studi Dalam Negeri/ Studi Luar Negeri"
  },
  {
 "namaLengkap" : "string",
 "avatar" : "string",
 "email" : "string",
 "asalDaerah" : "string",
 "universitas" : "string",
 "rating" : "string",
 "totalSessions" : 20,
 "deskripsi" : "string",
 "prestasi" : "[string]",
 "studi" : "Studi Dalam Negeri/ Studi Luar Negeri"
  },
  {
 "namaLengkap" : "string",
 "avatar" : "string",
 "email" : "string",
 "asalDaerah" : "string",
 "universitas" : "string",
 "rating" : "string",
 "totalSessions" : 20,
 "deskripsi" : "string",
 "prestasi" : "[string]",
 "studi" : "Studi Dalam Negeri/ Studi Luar Negeri"
  }
]
```

- Response (201 - Created)

```json
{
  "message": "data Bulk Mentor berhasil dibuat",
  "data": "Array of Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal membuat data Bulk Mentor, pastikan data title sudah benar"
}
```

## - GET /mentors

- Response (200 - OK)

```json
{
  "message": "Berhasil mendapatkan semua data Mentor",
  "data": "Array of Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Terjadi Error, Gagal mendapatkan semua data mentor"
}
```

## - GET /mentors/:id

- Response (200 - OK)

```json
{
  "message": "Berhasil mendapatkan data Mentor <id>",
  "data": "Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal mendapatkan data mentor <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Mentor <id> tidak ditemukan"
}
```

## - PUT /mentors/:id

- Request body:

```json
{
  "title": "string",
  "done": "boolean"
}
```

- Response (200 - OK)

```json
{
  "message": "Berhasil mengedit data Mentor <id>"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal mengedit data mentor <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Mentor <id> tidak ditemukan"
}
```

## - DELETE /mentors/:id

- Response (200 - OK)

```json
{
  "message": "Berhasil menghapus data Mentor <id>"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Terjadi Error, gagal menghapus data mentor <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Mentor <id> tidak ditemukan"
}
```


## - POST /mentorships

- Request body:

```json
{
"tema" : "string",
"tanggal" : "2024-10-12",
"jam" : "string",
"slot" : 10,
"status" : false,
"mentor" : "ref ID Mentor"
}
```

- Response (201 - Created)

```json
{
  "message": "data Kelas mentorship berhasil dibuat",
  "data": "Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal membuat data kelas mentorship, pastikan data title telah diinput"
}
```

## - POST /mentorships/seeder

- Request body:

```json
[
  {
"tema" : "string",
"tanggal" : "2024-10-12",
"jam" : "string",
"slot" : 10,
"status" : false,
"mentor" : "ref ID Mentor"
  },
  {
"tema" : "string",
"tanggal" : "2024-10-12",
"jam" : "string",
"slot" : 10,
"status" : false,
"mentor" : "ref ID Mentor"
  },
  {
"tema" : "string",
"tanggal" : "2024-10-12",
"jam" : "string",
"slot" : 10,
"status" : false,
"mentor" : "ref ID Mentor"
  }
]
```

- Response (201 - Created)

```json
{
  "message": "data Bulk Kelas mentorship berhasil dibuat",
  "data": "Array of Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal membuat data Bulk Kelas mentorship, pastikan data title sudah benar"
}
```

## - GET /mentorships

- Response (200 - OK)

```json
{
  "message": "Berhasil mendapatkan semua data Kelas mentorship",
  "data": "Array of Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Terjadi Error, Gagal mendapatkan semua data kelas mentorship"
}
```

## - GET /mentorships/:id

- Response (200 - OK)

```json
{
  "message": "Berhasil mendapatkan data Kelas mentorship <id>",
  "data": "Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal mendapatkan data kelas mentorship <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Kelas mentorship <id> tidak ditemukan"
}
```

## - PUT /mentorships/:id

- Request body:

```json
{
  "title": "string",
  "done": "boolean"
}
```

- Response (200 - OK)

```json
{
  "message": "Berhasil mengedit data Kelas mentorship <id>"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal mengedit data kelas mentorship <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Kelas mentorship <id> tidak ditemukan"
}
```

## - DELETE /mentorships/:id

- Response (200 - OK)

```json
{
  "message": "Berhasil menghapus data Kelas mentorship <id>"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Terjadi Error, gagal menghapus data kelas mentorship <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Kelas mentorship <id> tidak ditemukan"
}
```


## - POST /scholarships

- Request body:

```json
{
"namaUniversitas" : "string",
"gambar" : "string",
"linkBeasiswa" : "string",
"tanggal" : "Date",
"status" : "Boolean",
"approved" : "Boolean",
"daerahKhusus" : "string",
"nama" : "string",
"email" : "string",
}
```

- Response (201 - Created)

```json
{
  "message": "data Scholarship berhasil dibuat",
  "data": "Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal membuat data scholarship, pastikan data title telah diinput"
}
```

## - POST /scholarships/seeder

- Request body:

```json
[
  {
"namaUniversitas" : "string",
"gambar" : "string",
"linkBeasiswa" : "string",
"tanggal" : "Date",
"status" : "Boolean",
"approved" : "Boolean",
"daerahKhusus" : "string",
"nama" : "string",
"email" : "string",
  },
  {
"namaUniversitas" : "string",
"gambar" : "string",
"linkBeasiswa" : "string",
"tanggal" : "Date",
"status" : "Boolean",
"approved" : "Boolean",
"daerahKhusus" : "string",
"nama" : "string",
"email" : "string",
  },
  {
"namaUniversitas" : "string",
"gambar" : "string",
"linkBeasiswa" : "string",
"tanggal" : "Date",
"status" : "Boolean",
"approved" : "Boolean",
"daerahKhusus" : "string",
"nama" : "string",
"email" : "string",
  }
]
```

- Response (201 - Created)

```json
{
  "message": "data Bulk Scholarship berhasil dibuat",
  "data": "Array of Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal membuat data Bulk Scholarship, pastikan data title sudah benar"
}
```

## - GET /scholarships

- Response (200 - OK)

```json
{
  "message": "Berhasil mendapatkan semua data Scholarship",
  "data": "Array of Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Terjadi Error, Gagal mendapatkan semua data scholarship"
}
```

## - GET /scholarships/:id

- Response (200 - OK)

```json
{
  "message": "Berhasil mendapatkan data Scholarship <id>",
  "data": "Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal mendapatkan data scholarship <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Scholarship <id> tidak ditemukan"
}
```

## - PUT /scholarships/:id

- Request body:

```json
{
  "title": "string",
  "done": "boolean"
}
```

- Response (200 - OK)

```json
{
  "message": "Berhasil mengedit data Scholarship <id>"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal mengedit data scholarship <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Scholarship <id> tidak ditemukan"
}
```

## - DELETE /scholarships/:id

- Response (200 - OK)

```json
{
  "message": "Berhasil menghapus data Scholarship <id>"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Terjadi Error, gagal menghapus data scholarship <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Scholarship <id> tidak ditemukan"
}
```

## Authentication Routes

### - POST /auth/regis  
Registers a new user.

- Request Body:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- Response (201 - Created):
  ```json
  {
    "message": "Registration successful"
  }
  ```

- Response (400 - Bad Request):
  ```json
  {
    "message": "E-mail sudah terdaftar sebelumnya"
  }
  ```

- Response (500 - Server Error):
  ```json
  {
    "message": "Server error ketika registrasi",
    "error": "<error details>"
  }
  ```

---

### - POST /auth/login  
Logs in an existing user.

- Request Body:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- Response (200 - OK):
  ```json
  {
    "message": "berhasil login",
    "token": "<JWT Token>",
    "user": {
      "_id": "<user_id>",
      "email": "user@example.com"
    }
  }
  ```

- Response (401 - Unauthorized):
  ```json
  {
    "message": "E-mail atau password anda salah"
  }
  ```

- Response (500 - Server Error):
  ```json
  {
    "message": "Server error ketika login",
    "error": "<error details>"
  }
  ```

---

## User Routes

### - GET /users  
Fetches all user testimonies.

- Response (200 - OK):
  ```json
  {
    "message": "Berhasil mengambil semua testimoni user",
    "dataTestimonies": [
      {
        "namaLengkap": "User A",
        "asalDaerah": "Region A",
        "avatar": "avatar_url",
        "testimoni": "Great experience!"
      }
    ]
  }
  ```

- Response (500 - Server Error):
  ```json
  {
    "message": "Server error ketika mengambil testimoni user",
    "error": "<error details>"
  }
  ```

---

### - GET /users/user  
Fetches the logged-in user's data.  
**Requires Token Validation**

- Response (200 - OK):
  ```json
  {
    "message": "User berhasil dicari",
    "user": {
      "_id": "<user_id>",
      "email": "user@example.com"
    }
  }
  ```

- Response (404 - Not Found):
  ```json
  {
    "message": "User not found"
  }
  ```

- Response (500 - Server Error):
  ```json
  {
    "message": "Server error ketika mengambil data user",
    "error": "<error details>"
  }
  ```

---

### - PUT /users/update/email  
Updates the user's email.  
**Requires Token Validation**

- Request Body:
  ```json
  {
    "email": "new_email@example.com"
  }
  ```

- Response (200 - OK):
  ```json
  {
    "message": "E-mail user berhasil diperbarui.",
    "newToken": "<New JWT Token>"
  }
  ```

- Response (400 - Bad Request):
  ```json
  {
    "message": "Email already in use"
  }
  ```

- Response (500 - Server Error):
  ```json
  {
    "message": "Server error ketika memperbarui e-mail",
    "error": "<error details>"
  }
  ```

---

### - PUT /users/update/password  
Resets the user's password.  
**Requires Token Validation**

- Request Body:
  ```json
  {
    "password": "newPassword123"
  }
  ```

- Response (200 - OK):
  ```json
  {
    "message": "Password berhasil diperbarui."
  }
  ```

- Response (500 - Server Error):
  ```json
  {
    "message": "Server error ketika reset password",
    "error": "<error details>"
  }
  ```

---

## Booking Routes

### - GET /bookings  
Fetches all bookings for the logged-in user.  
**Requires Token Validation**

- Response (200 - OK):
  ```json
  {
    "message": "berhasil mendapatkan semua data booking",
    "data": [
      {
        "mentorship": {
          "status": true,
          "mentor": {
            "name": "Mentor A"
          }
        }
      }
    ]
  }
  ```

- Response (500 - Server Error):
  ```json
  {
    "message": "Terjadi Error, Gagal mendapatkan semua data Booking"
  }
  ```

---

### - POST /bookings  
Creates a new booking.  
**Requires Token Validation**

- Request Body:
  ```json
  {
    "mentorship": "<mentorship_id>"
  }
  ```

- Response (201 - Created):
  ```json
  {
    "message": "Booking berhasil dibuat",
    "newBooking": {
      "user": "<user_id>",
      "mentorship": "<mentorship_id>"
    }
  }
  ```

- Response (400 - Bad Request):
  ```json
  {
    "message": "Slot sudah penuh"
  }
  ```

- Response (404 - Not Found):
  ```json
  {
    "message": "Mentorship tidak ditemukan"
  }
  ```

- Response (500 - Server Error):
  ```json
  {
    "message": "Terjadi Error, Gagal menambahkan booking"
  }
  ```

---

### - DELETE /bookings  
Deletes a booking.  
**Requires Token Validation**

- Request Query:
  ```json
  {
    "idBooking": "<booking_id>"
  }
  ```

- Response (200 - OK):
  ```json
  {
    "message": "Booking berhasil dihapus"
  }
  ```

- Response (404 - Not Found):
  ```json
  {
    "message": "Booking tidak ditemukan atau Anda tidak memiliki izin untuk menghapus"
  }
  ```

- Response (500 - Server Error):
  ```json
  {
    "message": "Terjadi Error, Gagal menghapus booking"
  }
  ```

--- 

