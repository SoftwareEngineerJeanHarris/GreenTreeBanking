# 🌿 Green Tree Banking – Backend API

A RESTful API for the **Green Tree Banking** platform. This backend handles user authentication, account management, and secure transaction processing for a fictional banking application.

Built with:
- Node.js + Express
- MySQL (`mysql2`)
- JWT Authentication
- `dotenv` for environment management
- `bcryptjs` for secure password hashing

---

## 🚀 Getting Started

### 📦 Requirements

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- Git
- [Postman](https://www.postman.com/) or [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) for testing

---

### 📁 Project Structure

```
backend/
├── src/
│   ├── routes/            # API route definitions
│   ├── controllers/       # Business logic handlers
│   ├── models/            # Database connection helpers
│   ├── middlewares/       # Auth, error handling (coming soon)
│   ├── utils/             # Helper utilities (if needed)
│   └── app.js             # Express app config
├── .env                   # Environment variables
├── index.js               # API entry point
├── package.json
└── README.md
```

---

### ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/green-tree-banking.git
cd green-tree-banking/backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

Inside `backend/`, add the following:

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=green_tree_banking
JWT_SECRET=your_super_secret_key
```

4. **Start MySQL and create the database**

```sql
CREATE DATABASE green_tree_banking;
```

5. **Run the server**

```bash
npm run dev
```

Server should now be running at:  
`http://localhost:3000`

---

## 🧪 API Endpoints

| Method | Endpoint                     | Description             |
|--------|------------------------------|-------------------------|
| `POST` | `/api/v1/auth/register`      | Register a new user     |
| `POST` | `/api/v1/auth/login`         | Log in with credentials |
| `GET`  | `/`                          | API health check        |

---

## 🔐 Authentication

This API uses **JWT tokens** for secure authentication.  
Include the token in the `Authorization` header like this:

```
Authorization: Bearer <your_token_here>
```

---

## 🛠️ Roadmap

- [x] MySQL database schema
- [x] API base with Express
- [x] Register & Login endpoints
- [ ] JWT middleware for route protection
- [ ] Role-based access control
- [ ] Bank accounts & transactions
- [ ] Logging user activity
- [ ] Swagger/OpenAPI docs
- [ ] Production deployment (Linux/Docker)

---

## 📚 License

MIT © 2025 Green Tree Banking

---

## 🤝 Contributions

Pull requests are welcome!  
Please fork this repo, commit changes to a branch, and open a PR with a clear description.
```

---