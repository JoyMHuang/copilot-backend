# Project Overview

This repository contains a full-stack application with a NestJS backend and a React frontend. The backend manages customer, fund, and transaction data, while the frontend provides a user-friendly interface for interacting with these modules.

---

## 🚀 服务状态

✅ **服务器启动成功** - 运行在 http://localhost:8001
✅ **Swagger 文档** - 可在 http://localhost:8001/api/docs 查看
✅ **三个业务模块已创建**：Customer、Fund、Transaction

---

## 🏗️ File Structure

### Backend (copilot-backend)
```
src/
├── app.controller.ts         # Main application controller
├── app.module.ts             # Root module, imports all feature modules
├── app.service.ts            # Main application service
├── main.ts                   # Entry point
├── customer/                 # Customer feature module
│   ├── customer.controller.ts
│   ├── customer.service.ts
│   ├── customer.module.ts
│   └── dto/portfolio.dto.ts
├── fund/                     # Fund feature module
│   ├── fund.controller.ts
│   ├── fund.service.ts
│   ├── fund.module.ts
│   └── fund.dto.ts
├── transaction/              # Transaction feature module
│   ├── transaction.controller.ts
│   ├── transaction.service.ts
│   ├── transaction.module.ts
├── mock-data/                # Mock data and interfaces
│   ├── customer.mock.ts
│   ├── fund.mock.ts
│   ├── transaction.mock.ts
│   └── interfaces/
│       ├── customer.interface.ts
│       ├── transaction.interface.ts
```

---

## 🔗 可用 API 端点

### 基础端点
- `GET /api` - 获取欢迎消息

### Customer 模块 (客户管理)
- `GET /api/customer` - 获取所有客户

### Fund 模块 (基金管理)
- `GET /api/fund` - 获取所有基金

### Transaction 模块 (交易管理)
- `GET /api/transaction` - 获取所有交易

---

## 🛠️ 技术栈

- **框架**: NestJS 10.x
- **语言**: TypeScript
- **文档**: Swagger/OpenAPI
- **验证**: class-validator
- **转换**: class-transformer

---

## 🚀 Getting Started

### 1. Clone the repository
```
git clone <repo-url>
cd copilot-backend
```

### 2. Install backend dependencies
```
npm install
```

### 3. Start the backend server
```
npm run start:dev
# API available at http://localhost:8001
# Swagger docs at http://localhost:8001/api/docs
```

---

## 📝 Main Features

### Backend (NestJS)
- Customer Management: CRUD operations for customers.
- Fund Management: CRUD operations for funds.
- Transaction Management: CRUD operations for transactions.
- Swagger API Docs: Interactive API documentation.
- Modular Structure: Each feature is isolated in its own module for maintainability.

---

## 🛠️ Router Configuration and Component Structure

### Backend Routing
- All API routes are prefixed with `/api`.
- Feature modules:
  - `/api/customer` for customer operations
  - `/api/fund` for fund operations
  - `/api/transaction` for transaction operations
- Each module has its own controller and service for separation of concerns.

### React Frontend (if present)
- Typical structure includes:
  - `App.js`: Root component, sets up router and layout
  - `components/`: Reusable UI elements (tables, forms, etc.)
  - `pages/`: High-level views for each entity
  - Routing via `react-router-dom` (e.g., `/customers`, `/funds`, `/transactions`)

---

## 💡 Tips for New Developers

- Use Swagger docs for quick API testing.
- Each backend module is self-contained—add new features by creating new modules.
- Keep frontend components small and focused. Use hooks for state management and API calls.
- Run `npm run test` for backend unit tests.
- Follow single responsibility principle for both services and components. Update interfaces and DTOs as needed when backend models change.

---

## 🔧 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run start:dev

# 访问 API 文档
# http://localhost:8001/api/docs
```

## 🔧 可用脚本

```bash
# 开发
npm run start:dev        # 启动开发服务器
npm run start:debug      # 调试模式启动

# 构建和生产
npm run build           # 构建项目
npm run start:prod      # 生产模式启动

# 测试
npm run test            # 运行测试
npm run test:watch      # 监听模式测试
npm run test:cov        # 覆盖率测试
```

## 📖 API 文档

启动服务后，访问以下地址查看 API 文档：
- **Swagger UI**: http://localhost:8001/api/docs

---

**🎉 NestJS 训练项目已准备就绪！**
