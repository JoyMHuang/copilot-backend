# AI Learning Platform - Copilot Backend

A comprehensive AI learning platform consisting of a React frontend and NestJS backend, designed to provide an interactive educational experience with AI-powered features.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Starting the Project

#### 1. Backend (NestJS)
```bash
# Navigate to the backend directory
cd copilot-backend

# Install dependencies
npm install

# Start the development server
npm run start:dev
```
The backend will run on `http://localhost:8001`

#### 2. Frontend (React)
```bash
# Navigate to the frontend directory (assuming it's in a separate folder)
cd ../copilot-frontend

# Install dependencies
npm install

# Start the development server
npm start
```
The frontend will run on `http://localhost:3000`

## 📋 Main Functionality & Features

### Backend Features (NestJS)
- **RESTful API**: Comprehensive REST endpoints for Customer, Fund, and Transaction management
- **Swagger Documentation**: Interactive API documentation available at `/api/docs`
- **Modular Architecture**: Clean separation of concerns with dedicated modules
- **TypeScript**: Full TypeScript support for type safety
- **Validation**: Input validation using class-validator
- **Error Handling**: Robust error handling and response formatting

### Frontend Features (React)
- **Interactive UI**: Modern, responsive user interface
- **Component-based Architecture**: Modular and reusable React components
- **State Management**: Efficient state handling for application data
- **Routing**: Client-side navigation and route management
- **API Integration**: Seamless communication with the NestJS backend
- **Real-time Updates**: Dynamic content updates and user interactions

## 📁 Project Structure

```
copilot-backend/
├── src/
│   ├── app.controller.ts        # Main application controller
│   ├── app.module.ts           # Root application module (includes all sub-modules)
│   ├── app.service.ts          # Main application service
│   ├── main.ts                 # Application entry point
│   ├── customer/               # Customer management module
│   │   ├── customer.controller.ts
│   │   ├── customer.service.ts
│   │   ├── customer.module.ts
│   │   └── *.spec.ts          # Test files
│   ├── fund/                   # Fund management module
│   │   ├── fund.controller.ts
│   │   ├── fund.service.ts
│   │   ├── fund.module.ts
│   │   └── *.spec.ts          # Test files
│   └── transaction/            # Transaction management module
│       ├── transaction.controller.ts
│       ├── transaction.service.ts
│       ├── transaction.module.ts
│       └── *.spec.ts          # Test files
├── test/                       # Integration tests
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── nest-cli.json              # NestJS CLI configuration
└── README.md                  # Project documentation
```

### Key Files Description

#### Backend (NestJS)
- **`src/main.ts`**: Application bootstrap file that starts the NestJS server on port 8001
- **`src/app.module.ts`**: Root module that imports Customer, Fund, and Transaction modules
- **`src/app.controller.ts`**: Main controller with welcome endpoint (`GET /api`)
- **`src/app.service.ts`**: Main application service with business logic
- **Customer Module**: Handles customer-related operations and data management
- **Fund Module**: Manages fund information and operations
- **Transaction Module**: Processes transaction data and business logic

#### Frontend (React) - Expected Structure
- **`src/App.js`**: Main application component with routing configuration
- **`src/index.js`**: React application entry point
- **`src/components/`**: Reusable UI components for customers, funds, and transactions
- **`src/pages/`**: Page-level components (Dashboard, Customer List, Fund Portfolio, etc.)
- **`src/services/`**: API service functions for backend communication
- **`src/hooks/`**: Custom React hooks for data fetching and state management
- **`src/utils/`**: Utility functions and helpers

## 🛣️ Router Configuration & API Endpoints

### Backend Routes (NestJS)

The NestJS backend uses decorators and modular architecture to define routes:

#### Base API Endpoints
- **`GET /api`** - Welcome message and health check

#### Customer Module (`/api/customer`)
```typescript
@Controller('api/customer')
export class CustomerController {
  @Get()
  findAll(): string {
    return this.customerService.findAll();
  }
  
  // Additional endpoints can be added:
  // @Post() - Create new customer
  // @Get(':id') - Get customer by ID
  // @Put(':id') - Update customer
  // @Delete(':id') - Remove customer
}
```

#### Fund Module (`/api/fund`)
```typescript
@Controller('api/fund')
export class FundController {
  @Get()
  findAll(): string {
    return this.fundService.findAll();
  }
  
  // Additional endpoints can be added:
  // @Post() - Create new fund
  // @Get(':id') - Get fund details
  // @Put(':id') - Update fund information
  // @Delete(':id') - Remove fund
}
```

#### Transaction Module (`/api/transaction`)
```typescript
@Controller('api/transaction')
export class TransactionController {
  @Get()
  findAll(): string {
    return this.transactionService.findAll();
  }
  
  // Additional endpoints can be added:
  // @Post() - Create new transaction
  // @Get(':id') - Get transaction details
  // @Get('customer/:customerId') - Get transactions by customer
  // @Get('fund/:fundId') - Get transactions by fund
}
```

### Frontend Routes (React)

Expected React Router configuration for the frontend:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customers/:id" element={<CustomerDetail />} />
        <Route path="/funds" element={<FundList />} />
        <Route path="/funds/:id" element={<FundDetail />} />
        <Route path="/transactions" element={<TransactionList />} />
        <Route path="/transactions/:id" element={<TransactionDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 🧩 React Component Structure

### Component Hierarchy
```
App
├── Header
│   ├── Navigation
│   │   ├── NavLink (Customers)
│   │   ├── NavLink (Funds)
│   │   ├── NavLink (Transactions)
│   │   └── NavLink (Portfolio)
│   └── UserMenu
├── Main
│   ├── Sidebar
│   │   ├── QuickStats
│   │   └── RecentActivity
│   ├── Content
│   │   ├── Dashboard
│   │   │   ├── StatsOverview
│   │   │   ├── ChartsContainer
│   │   │   └── RecentTransactions
│   │   ├── CustomerManagement
│   │   │   ├── CustomerList
│   │   │   ├── CustomerForm
│   │   │   └── CustomerDetail
│   │   ├── FundManagement
│   │   │   ├── FundList
│   │   │   ├── FundForm
│   │   │   └── FundDetail
│   │   └── TransactionManagement
│   │       ├── TransactionList
│   │       ├── TransactionForm
│   │       └── TransactionDetail
│   └── Modal Components
│       ├── ConfirmDialog
│       ├── FormModal
│       └── AlertModal
└── Footer
```

### Component Types & Responsibilities

#### 1. **Container Components**
- **CustomerContainer**: Manages customer state and API calls
- **FundContainer**: Handles fund data and operations
- **TransactionContainer**: Processes transaction logic
- Pass data and actions to presentational components

#### 2. **Presentational Components**
- **CustomerCard**: Displays customer information
- **FundCard**: Shows fund details and performance
- **TransactionRow**: Renders transaction data
- **StatCard**: Displays statistics and metrics
- Focus purely on UI rendering

#### 3. **Form Components**
- **CustomerForm**: Customer creation/editing form
- **FundForm**: Fund management form
- **TransactionForm**: Transaction entry form
- Handle form validation and submission

#### 4. **Utility Components**
- **LoadingSpinner**: Loading state indicator
- **ErrorBoundary**: Error handling component
- **DataTable**: Reusable table component
- **SearchFilter**: Search and filtering functionality

## 🔧 Development Tips & Best Practices

### Backend Development (NestJS)

#### Module Organization
```typescript
// Each module should be self-contained
@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService], // Export if used by other modules
})
export class CustomerModule {}
```

#### Service Pattern
```typescript
@Injectable()
export class CustomerService {
  constructor(
    // Inject dependencies here
    private readonly configService: ConfigService,
  ) {}

  async findAll(): Promise<Customer[]> {
    // Business logic implementation
  }
}
```

#### Testing Strategy
- **Unit Tests**: Test individual services and controllers
- **Integration Tests**: Test module interactions
- **E2E Tests**: Test complete API workflows

### Frontend Development (React)

#### Custom Hooks for API Calls
```jsx
// useCustomers.js
export function useCustomers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCustomers()
      .then(setCustomers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { customers, loading, error };
}
```

#### State Management
- Use React Context for global state (user auth, theme)
- Local state for component-specific data
- Consider Redux Toolkit for complex state requirements

#### Performance Optimization
- Implement React.memo for expensive components
- Use useMemo for expensive calculations
- Implement virtual scrolling for large lists
- Lazy load components with React.lazy()

### API Communication Best Practices

#### Error Handling
```javascript
// API service example
class ApiService {
  async request(endpoint, options = {}) {
    try {
      const response = await fetch(`/api${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
}
```

## 🚀 Deployment & Production

### Environment Configuration
```bash
# .env.development
NODE_ENV=development
PORT=8001
DATABASE_URL=postgresql://localhost:5432/dev_db

# .env.production
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://prod-host:5432/prod_db
```

### Build Commands
```bash
# Backend build
npm run build
npm run start:prod

# Frontend build
npm run build
# Serve with static server (nginx, serve, etc.)
```

## 🔍 Available Scripts

```bash
# Development
npm run start:dev        # Start development server with hot reload
npm run start:debug      # Start in debug mode

# Building
npm run build           # Build the project
npm run start:prod      # Start production server

# Testing
npm run test            # Run unit tests
npm run test:watch      # Run tests in watch mode
npm run test:cov        # Run tests with coverage report
npm run test:e2e        # Run end-to-end tests

# Code Quality
npm run lint            # Run ESLint
npm run format          # Format code with Prettier
```

## 📖 API Documentation

After starting the server, access the interactive API documentation:
- **Swagger UI**: http://localhost:8001/api/docs
- **JSON Schema**: http://localhost:8001/api/docs-json

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Follow the coding standards and write tests
4. Commit your changes: `git commit -m 'feat: add your feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Submit a pull request

### Commit Convention
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions or modifications
- `chore:` Build process or auxiliary tool changes

## 🛠️ Troubleshooting

### Common Issues

#### Backend Issues
- **Port already in use**: Change port in `main.ts` or kill process on port 8001
- **Module not found**: Run `npm install` to ensure all dependencies are installed
- **TypeScript errors**: Check `tsconfig.json` configuration

#### Frontend Issues
- **API connection failed**: Verify backend is running on correct port
- **CORS errors**: Ensure CORS is properly configured in NestJS
- **Build failures**: Clear `node_modules` and reinstall dependencies

### Performance Monitoring
- Monitor API response times
- Track memory usage and potential leaks
- Use browser dev tools for frontend performance
- Implement logging for production debugging

---

**🎉 AI Learning Platform is ready for development!**

This comprehensive documentation should help developers understand the project structure, get started quickly, and maintain the codebase effectively.
