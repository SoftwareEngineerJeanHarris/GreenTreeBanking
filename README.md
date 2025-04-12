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

-- 1. Users
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    date_of_birth DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- 2. Roles
CREATE TABLE roles (
    role_id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);

-- 3. User Roles
CREATE TABLE user_roles (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

-- 4. Bank Accounts
CREATE TABLE bank_accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    account_type ENUM('CHECKING', 'SAVINGS', 'INVESTMENT') NOT NULL,
    account_name VARCHAR(100),
    balance DECIMAL(15, 2) DEFAULT 0.00,
    interest_rate DECIMAL(5, 2),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 5. Transactions
CREATE TABLE transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    from_account_id INT,
    to_account_id INT,
    amount DECIMAL(15, 2) NOT NULL,
    transaction_type ENUM('TRANSFER', 'DEPOSIT', 'WITHDRAWAL') NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    description TEXT,
    FOREIGN KEY (from_account_id) REFERENCES bank_accounts(account_id),
    FOREIGN KEY (to_account_id) REFERENCES bank_accounts(account_id)
);

-- 6. Activity Logs
CREATE TABLE activity_logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    event_type VARCHAR(100) NOT NULL,
    ip_address VARCHAR(45),
    details TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
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