# NestJS + React Training Project

这是一个包含 NestJS 后端和 React 前端的全栈训练项目，旨在帮助开发者快速上手、理解和维护项目结构。

---

## 🏁 快速开始

### 1. 克隆仓库

```bash
git clone <仓库地址>
cd copilot-backend
```

### 2. 启动 NestJS 后端

```bash
# 安装依赖
npm install
# 启动开发服务器
npm run start:dev
# 访问 API 文档
# http://localhost:8001/api/docs
```

### 3. 启动 React 前端

```bash
cd ../copilot-frontend # 假设前端目录为 copilot-frontend
npm install
npm start
# 前端默认运行在 http://localhost:3000
```

---

## 📝 项目功能简介

### NestJS 后端
- 提供客户（Customer）、基金（Fund）、交易（Transaction）三大业务模块的 RESTful API。
- 集成 Swagger 文档，便于接口调试和开发。
- 使用 class-validator 进行数据校验，class-transformer 进行数据转换。

### React 前端
- 展示客户、基金、交易等核心数据。
- 通过表格、表单等组件实现数据的展示与交互。
- 与后端 API 对接，实现数据的增删查改。
- 采用响应式布局，适配多种设备。

---

## 📁 项目结构

### 后端（copilot-backend）
```
copilot-backend/
├── src/
│   ├── app.controller.ts    # 应用控制器
│   ├── app.module.ts        # 应用模块（包含所有子模块）
│   ├── app.service.ts       # 应用服务
│   ├── main.ts              # 应用入口
│   ├── customer/            # 客户模块
│   │   ├── customer.controller.ts
│   │   ├── customer.service.ts
│   │   ├── customer.module.ts
│   │   └── *.spec.ts        # 测试文件
│   ├── fund/                # 基金模块
│   │   ├── fund.controller.ts
│   │   ├── fund.service.ts
│   │   ├── fund.module.ts
│   │   └── *.spec.ts        # 测试文件
│   └── transaction/         # 交易模块
│       ├── transaction.controller.ts
│       ├── transaction.service.ts
│       ├── transaction.module.ts
│       └── *.spec.ts        # 测试文件
├── test/                    # 单元测试
├── package.json             # 项目依赖与脚本
└── README.md                # 项目说明
```

### 前端（copilot-frontend）
```
copilot-frontend/
├── src/
│   ├── App.tsx              # 应用主入口，路由配置
│   ├── index.tsx            # React 入口文件
│   ├── api/                 # API 请求封装
│   │   ├── customer.ts      # 客户相关 API
│   │   ├── fund.ts          # 基金相关 API
│   │   └── transaction.ts   # 交易相关 API
│   ├── components/          # 通用组件
│   │   ├── Navbar.tsx       # 导航栏
│   │   ├── Table.tsx        # 通用表格组件
│   │   └── ...
│   ├── pages/               # 页面组件
│   │   ├── CustomerPage.tsx # 客户页面
│   │   ├── FundPage.tsx     # 基金页面
│   │   ├── TransactionPage.tsx # 交易页面
│   │   └── HomePage.tsx     # 首页
│   ├── router/              # 路由配置
│   │   └── index.tsx        # 路由主文件
│   └── styles/              # 样式文件
├── public/                  # 静态资源
├── package.json             # 项目依赖与脚本
└── README.md                # 前端说明
```

---

## 🛣️ 路由与组件结构说明

### React 路由配置
- 使用 `react-router-dom` 实现前端路由。
- 主要路由结构如下：

```tsx
// src/router/index.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CustomerPage from '../.pages/CustomerPage';
import FundPage from '../.pages/FundPage';
import CustomerPage from '../pages/CustomerPage';
import FundPage from '../pages/FundPage';
import TransactionPage from '../pages/TransactionPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/fund" element={<FundPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 主要 React 组件结构
- `App.tsx`：应用主入口，集成路由和全局布局。
- `Navbar.tsx`：导航栏，切换各业务模块页面。
- `Table.tsx`：通用表格组件，展示各模块数据。
- `CustomerPage.tsx`、`FundPage.tsx`、`TransactionPage.tsx`：分别对应客户、基金、交易页面，负责数据获取和展示。
- `api/` 目录下各文件：封装与后端的 API 请求。

---

## 💡 开发与维护建议

- 保持前后端接口一致，建议使用 Swagger 文档进行接口联调。
- 组件拆分要合理，复用性强的组件放在 `components/` 目录。
- 路由变更建议统一在 `router/index.tsx` 管理。
- API 请求建议统一封装，便于维护和错误处理。
- 使用 TypeScript 类型定义接口数据结构，提升代码可维护性。
- 定期运行测试脚本，保证功能稳定。

---

**🎉 NestJS + React 训练项目已准备就绪！欢迎贡献和交流！**
