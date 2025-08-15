# NestJS Financial Services Backend

A comprehensive NestJS backend application providing APIs for financial services including customer management, fund information, and transaction processing. This project serves as a training platform for modern backend development with TypeScript and NestJS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd copilot-backend

# Install dependencies
npm install

# Start development server
npm run start:dev

# The server will be running at:
# 🚀 Backend API: http://localhost:8000
# 📖 Swagger Docs: http://localhost:8000/api/docs
```

### Running the Application

```bash
# Development mode (with hot reload)
npm run start:dev

# Production mode
npm run build
npm run start:prod

# Debug mode
npm run start:debug
```

## 🏗️ Project Architecture

### Core Business Modules

#### 1. Customer Module (`/src/customer/`)
Manages customer information and portfolio data
- **Endpoints:**
  - `GET /api/customer` - Get all customers
  - `GET /api/customer/:id/portfolio` - Get customer portfolio data
  - `GET /api/customer/:id/wealth-specialist` - Get wealth specialist info
  - `GET /api/customer/:id/transactions` - Get customer transactions

#### 2. Fund Module (`/src/fund/`)
Handles mutual fund information and pricing
- **Endpoints:**
  - `GET /api/fund` - Get all available funds

#### 3. Transaction Module (`/src/transaction/`)
Manages transaction history and processing
- **Endpoints:**
  - `GET /api/transaction` - Get all transactions

### Project Structure

```
copilot-backend/
├── .github/
│   └── prompts/                    # Development guidelines
│       ├── copilot-instruction.md.prompt.md
│       └── test-generation.prompt.md
├── src/
│   ├── main.ts                     # Application entry point
│   ├── app.module.ts               # Root application module
│   ├── app.controller.ts           # Root controller
│   ├── app.service.ts              # Root service
│   │
│   ├── customer/                   # Customer management module
│   │   ├── customer.controller.ts  # Customer endpoints
│   │   ├── customer.service.ts     # Customer business logic
│   │   ├── customer.module.ts      # Customer module definition
│   │   ├── customer.*.spec.ts      # Unit tests
│   │   └── dto/
│   │       └── portfolio.dto.ts    # Data transfer objects
│   │
│   ├── fund/                       # Fund management module
│   │   ├── fund.controller.ts      # Fund endpoints
│   │   ├── fund.service.ts         # Fund business logic
│   │   ├── fund.module.ts          # Fund module definition
│   │   ├── fund.*.spec.ts          # Unit tests
│   │   ├── dto/                    # Data transfer objects
│   │   │   ├── fund.dto.ts
│   │   │   ├── create-fund.dto.ts
│   │   │   └── update-fund.dto.ts
│   │   └── data/
│   │       └── fund-mock.data.ts   # Mock fund data
│   │
│   ├── transaction/                # Transaction module
│   │   ├── transaction.controller.ts
│   │   ├── transaction.service.ts
│   │   ├── transaction.module.ts
│   │   └── transaction.*.spec.ts
│   │
│   └── mock-data/                  # Centralized mock data
│       ├── interfaces/             # TypeScript interfaces
│       │   ├── customer.interface.ts
│       │   ├── transaction.interface.ts
│       │   └── index.ts
│       ├── customer.mock.ts        # Customer mock data
│       ├── transaction.mock.ts     # Transaction mock data
│       ├── fund.mock.ts           # Fund mock data
│       ├── index.ts               # Centralized exports
│       └── README.md              # Mock data documentation
│
├── test/                          # E2E tests
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── nest-cli.json                  # NestJS CLI configuration
└── README.md                      # This file
```

### Key Application Files

#### Entry Point (`src/main.ts`)
- Configures CORS for cross-origin requests
- Sets up global validation pipes
- Configures Swagger documentation
- Starts the server on port 8000

#### Root Module (`src/app.module.ts`)
- Imports all feature modules (Customer, Fund, Transaction)
- Defines the application structure

#### Mock Data System (`src/mock-data/`)
- Centralized mock data management
- Type-safe interfaces for all data structures
- Modular organization by business domain

## 🛠️ Technical Stack

- **Framework**: NestJS 10.x
- **Language**: TypeScript 5.x
- **Documentation**: Swagger/OpenAPI
- **Validation**: class-validator & class-transformer
- **Testing**: Jest
- **Code Quality**: ESLint, Prettier

## � Available Scripts

```bash
# Development
npm run start          # Start the application
npm run start:dev      # Start with hot reload
npm run start:debug    # Start in debug mode

# Building
npm run build          # Build for production
npm run start:prod     # Run production build

# Testing
npm run test           # Run unit tests
npm run test:watch     # Run tests in watch mode
npm run test:cov       # Run tests with coverage
npm run test:e2e       # Run end-to-end tests

# Code Quality
npm run lint           # Run ESLint
npm run format         # Format code with Prettier
```

## 🔗 API Documentation

### Swagger Documentation
Access comprehensive API documentation at: **http://localhost:8000/api/docs**

### Main API Endpoints

#### Health & Status
```
GET /api              # Welcome message
GET /api/health       # Health check endpoint
```

#### Customer Management
```
GET /api/customer                        # List all customers
GET /api/customer/:id/portfolio          # Customer portfolio data
GET /api/customer/:id/wealth-specialist  # Wealth specialist information
GET /api/customer/:id/transactions       # Customer transaction history
```

#### Fund Management
```
GET /api/fund                           # List all available funds
```

#### Transaction Management
```
GET /api/transaction                    # List all transactions
```

## 🧪 Testing Strategy

The project follows comprehensive testing guidelines:

### Test Naming Convention
- Pattern: `should[DoSomething]When[Condition]`
- Example: `shouldReturnArrayOfFundsWhenCalled`

### Test Coverage
- Unit tests for all services and controllers
- Comprehensive validation testing
- Edge case and error handling tests
- Parameterized tests for repetitive scenarios

### Running Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test fund.service.spec.ts

# Run tests with coverage
npm run test:cov

# Run tests in watch mode
npm run test:watch
```

## 🏛️ Data Models

### Customer Portfolio Structure
```typescript
interface PortfolioData {
  id: string;
  name: string;
  cifNumber: string;
  totalValue: number;
  unrealizedProfitLoss: number;
  riskProfile: 'Conservative' | 'Moderate' | 'Aggressive';
  lastUpdated: string;
  allocations: Allocation[];
}
```

### Fund Information Structure
```typescript
interface FundDto {
  id: string;
  fundName: string;
  code: string;
  unitPrice: number;
  currencyCode: string;
  priceDate: string;
  navChange: number;
  navChangePercent: number;
}
```

### Transaction Structure
```typescript
interface TransactionHistory {
  id: string;
  customerId: string;
  fundId: string;
  fundName: string;
  type: 'Subscribe' | 'Switch' | 'Redeem';
  amount: number;
  units: number;
  price: number;
  date: string;
  status: 'Completed' | 'Pending' | 'Failed';
  reference: string;
}
```

## 🔧 Development Guidelines

### Code Standards
- Use single quotes for strings
- Use camelCase for variable names
- Use 2 spaces for indentation
- Follow NestJS best practices
- Implement comprehensive error handling
- Write descriptive test cases

### Module Development Pattern
1. **Controller**: Handle HTTP requests and responses
2. **Service**: Implement business logic
3. **Module**: Wire up controllers and services
4. **DTO**: Define data transfer objects with validation
5. **Spec**: Write comprehensive unit tests

## 🚀 Frontend Integration

**Note**: This repository contains only the backend API. For a complete application, you would typically have a separate React frontend that consumes these APIs.

### Recommended Frontend Structure (Separate Repository)
```
frontend/
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/              # Page components
│   ├── services/           # API service functions
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── public/                 # Static assets
└── package.json
```

### Frontend Development Tips
1. **API Integration**: Use the Swagger docs to understand endpoint contracts
2. **Type Safety**: Generate TypeScript types from the backend DTOs
3. **State Management**: Consider Redux Toolkit or Zustand for complex state
4. **Routing**: Use React Router for navigation
5. **UI Framework**: Consider Material-UI, Ant Design, or Tailwind CSS

## 📊 Performance & Monitoring

### Current Implementation
- Mock data for rapid development
- CORS enabled for frontend integration
- Comprehensive error handling
- Input validation on all endpoints

### Production Considerations
- Replace mock data with database integration
- Implement authentication and authorization
- Add rate limiting and security middleware
- Set up logging and monitoring
- Configure environment-based settings

## 🤝 Contributing

### Getting Started
1. Fork the repository
2. Create a feature branch
3. Follow the coding standards
4. Write comprehensive tests
5. Submit a pull request

### Development Workflow
1. **Feature Development**: Create new modules following the established pattern
2. **Testing**: Ensure all tests pass and coverage remains high
3. **Documentation**: Update API documentation and README as needed
4. **Code Review**: Follow the project's code review guidelines

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)
- [Swagger/OpenAPI Specification](https://swagger.io/specification/)

---

**🎉 Happy Coding! This NestJS backend is ready for development and integration.**
