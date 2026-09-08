'use client'

import { useDeferredValue, useMemo, useState, type FormEvent } from 'react'
import { calculateDiscount } from '../../../lib/module2/calculateDiscount'

/**
 * MODULE 2: Copilot Chat - Core Agent Features
 *
 * This file contains exercises for:
 * - Fixing broken code (Edit Mode)
 * - Adding new features (Agent Mode)
 * - Writing tests (Agent + Edit Mode)
 * - Freeform conversations (Ask Mode)
 */

export default function Module2Practice() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Module 2: Core Agent Features</h1>
          <p className="text-gray-600">Fix code, add features, and write tests with Copilot</p>
        </header>

        <div className="space-y-8">
          {/* ==========================================
           * 🔧 LESSON 2.1 - EXERCISE: FIX BROKEN CODE
           * ==========================================
           *
           * ✅ TODO: FIX THE BROKEN CODE BELOW USING /fix
           *
           * Instructions:
           * 1. Highlight the BrokenCalculator component below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: /fix
           * 4. Review the patch and accept it
           * 5. Follow up with: "Explain what was wrong originally"
           *
           * The code has several intentional bugs - let Copilot find and fix them!
           *
           * ========================================== */}
          <section className="bg-white p-4 sm:p-6 rounded-lg shadow border-2 border-red-500">
            <h2 className="text-2xl font-semibold mb-4">🔧 Lesson 2.1: Fix Broken Code</h2>
            <BrokenCalculator />
          </section>

          {/* ==========================================
           * ➕ LESSON 2.2 - EXERCISE: ADD A FEEDBACK FORM
           * ==========================================
           *
           * ✅ TODO: ADD A FEEDBACK FORM HERE
           *
           * Instructions:
           * 1. Place your cursor after this comment block
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Create a form with name, email, and message fields"
           * 4. Review the generated code
           * 5. Refine with follow-ups:
           *    - "Style it with Tailwind"
           *    - "Disable submit until all fields are filled"
           *    - "Add validation for email format"
           *
           * ========================================== */}

          <section className="bg-white p-4 sm:p-6 rounded-lg shadow border-2 border-green-500">
            <h2 className="text-2xl font-semibold mb-4">➕ Lesson 2.2: Add a Feedback Form</h2>
            <p className="text-gray-600 mb-4">Use Agent Mode to create a form component below:</p>

            <FeedbackForm />
          </section>

          {/* ==========================================
           * 🧪 LESSON 2.3 - EXERCISE: WRITE TESTS
           * ==========================================
           *
           * ✅ TODO: GENERATE TESTS FOR THE FUNCTION BELOW
           *
           * Instructions:
           * 1. Highlight the calculateDiscount function
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: /tests
           * 4. Review the generated test suite
           * 5. Add a new parameter to the function
           * 6. Ask: "Update the tests to cover the new parameter"
           *
           * ========================================== */}
          <section className="bg-white p-4 sm:p-6 rounded-lg shadow border-2 border-purple-500">
            <h2 className="text-2xl font-semibold mb-4">🧪 Lesson 2.3: Write Tests</h2>
            <TestableComponent />
          </section>

          {/* ==========================================
           * 💬 LESSON 2.4 - EXERCISE: FREEFORM CONVERSATIONS
           * ==========================================
           *
           * ✅ TODO: ASK COPILOT QUESTIONS ABOUT THE CODE BELOW
           *
           * Instructions:
           * 1. Highlight the UserDashboard component
           * 2. Open Copilot Chat (Ctrl/Cmd + Shift + I)
           * 3. Try these Ask Mode questions:
           *    - "What are potential performance issues here?"
           *    - "How would you refactor this into smaller functions?"
           *    - "What security risks might exist in this component?"
           *    - "How can I make this more accessible?"
           *
           * ========================================== */}
          <section className="bg-white p-4 sm:p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">💬 Lesson 2.4: Freeform Conversations</h2>
            <UserDashboard />
          </section>

          {/* ==========================================
           * 🎨 CHALLENGE: CREATE A PRICING CARD
           * ==========================================
           *
           * ✅ TODO: BUILD A PRICING CARD COMPONENT
           *
           * Instructions:
           * 1. Start simple: "Create a PricingCard with title, price, and description"
           * 2. Iterate and refine:
           *    - "Add a Pro plan that's highlighted"
           *    - "Make the layout responsive on mobile"
           *    - "Add a list of features for each plan"
           *    - "Add hover effects"
           *
           * ========================================== */}
          <section className="bg-white p-4 sm:p-6 rounded-lg shadow border-2 border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4">🎨 Challenge: Pricing Card</h2>
            <p className="text-gray-600 mb-4">Use Agent Mode to build a pricing card component:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PricingCard
                title="Starter Plan"
                price={19}
                description="Great for getting started with core features and simple projects."
                features={['Up to 3 projects', 'Basic analytics dashboard', 'Community support']}
              />
              <PricingCard
                title="Pro Plan"
                price={49}
                description="Best for growing teams that need advanced tools and priority support."
                features={[
                  'Unlimited projects',
                  'Advanced analytics and reports',
                  'Priority email support',
                ]}
                highlighted
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  highlighted = false,
}: {
  title: string
  price: number
  description: string
  features: string[]
  highlighted?: boolean
}) => {
  return (
    <article
      className={`w-full max-w-none sm:max-w-sm rounded-xl p-5 shadow-sm ${
        highlighted
          ? 'border-2 border-blue-600 bg-blue-50 shadow-md ring-2 ring-blue-100'
          : 'border border-yellow-300 bg-yellow-50'
      }`}
      aria-label={`${title} pricing card`}
    >
      {highlighted && (
        <p className="inline-flex rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
          Most Popular
        </p>
      )}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-gray-900">
        ${price}
        <span className="ml-1 text-base font-medium text-gray-600">/month</span>
      </p>
      <p className="mt-3 text-sm text-gray-700">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700" aria-label={`${title} plan features`}>
        {features.map(feature => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-0.5 text-green-600" aria-hidden="true">
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

const FeedbackForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('Thanks for your feedback!')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="feedback-name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="feedback-name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="feedback-email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="feedback-email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
          placeholder="you@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="feedback-message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="feedback-message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full px-4 py-2 border rounded min-h-28"
          placeholder="Share your feedback"
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Submit
      </button>

      {status && (
        <p className="text-sm text-green-700" aria-live="polite">
          {status}
        </p>
      )}
    </form>
  )
}

/* ==========================================
 * 🔧 BROKEN CALCULATOR COMPONENT
 * This component has intentional bugs for you to fix!
 * ========================================== */
function BrokenCalculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(0)
  const [error, setError] = useState('')

  // Bug: This function has issues with type conversion and error handling
  const calculate = () => {
    // OLD CODE (buggy):
    // const sum = num1 + num2
    // setResult(sum)
    // WHY CHANGED: num1 and num2 are strings from inputs. Using + directly concatenates
    // strings (e.g., "2" + "3" -> "23") instead of adding numbers.
    const firstNumber = Number(num1)
    const secondNumber = Number(num2)

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
      setError('Please enter valid numbers.')
      return
    }

    setError('')
    setResult(firstNumber + secondNumber)
  }

  // Bug: Missing divide by zero check
  const divide = () => {
    // OLD CODE (buggy):
    // setResult(num1 / num2)
    // WHY CHANGED: division now validates numeric input and blocks divide-by-zero
    // so users do not get Infinity/NaN without feedback.
    const firstNumber = Number(num1)
    const secondNumber = Number(num2)

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
      setError('Please enter valid numbers.')
      return
    }

    if (secondNumber === 0) {
      setError('Cannot divide by zero.')
      return
    }

    setError('')
    setResult(firstNumber / secondNumber)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Number 1"
          value={num1}
          onChange={e => setNum1(e.target.value)}
          aria-label="First number"
          className="px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Number 2"
          value={num2}
          onChange={e => setNum2(e.target.value)}
          aria-label="Second number"
          className="px-4 py-2 border rounded"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={calculate}
          aria-label="Add numbers"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
        <button
          onClick={divide}
          aria-label="Divide numbers"
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Divide
        </button>
      </div>

      {error ? (
        <p className="text-red-600" role="alert">
          {error}
        </p>
      ) : (
        <p className="text-lg">Result: {result}</p>
      )}
    </div>
  )
}

/* ==========================================
 * 🧪 TESTABLE COMPONENT
 * Use /tests to generate tests for these functions
 * ========================================== */
function TestableComponent() {
  const [price, setPrice] = useState(100)
  const [discount, setDiscount] = useState(10)
  const [isMember, setIsMember] = useState(false)

  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">
        Highlight the calculateDiscount function and use /tests to generate test cases
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="discount-price" className="block text-sm font-medium text-gray-700 mb-1">
            Original price ($)
          </label>
          <input
            id="discount-price"
            type="number"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded"
            min={0}
          />
        </div>
        <div>
          <label
            htmlFor="discount-percent"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Base discount (%)
          </label>
          <input
            id="discount-percent"
            type="number"
            value={discount}
            onChange={e => setDiscount(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded"
            min={0}
            max={100}
          />
        </div>
      </div>

      <label htmlFor="discount-member" className="flex items-center gap-2 text-sm text-gray-700">
        <input
          id="discount-member"
          type="checkbox"
          checked={isMember}
          onChange={e => setIsMember(e.target.checked)}
          className="h-4 w-4"
        />
        Apply member bonus discount (extra 5%)
      </label>

      <p className="text-sm text-gray-600">
        This example applies the base discount, plus an optional 5% member bonus.
      </p>

      <div className="p-4 bg-gray-100 rounded">
        <p className="text-lg">Final Price: ${calculateDiscount(price, discount, isMember)}</p>
      </div>
    </div>
  )
}

// calculateDiscount is implemented in lib/module2/calculateDiscount.ts

// Keep static demo data outside component state to avoid unnecessary state overhead.
const DASHBOARD_USERS = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    lastLogin: '2024-01-15',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'inactive',
    lastLogin: '2024-01-10',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'active',
    lastLogin: '2024-01-16',
  },
] as const

type DashboardUser = (typeof DASHBOARD_USERS)[number]
// Narrow filter values to the select options and known user statuses.
type UserFilter = 'all' | DashboardUser['status']

// Extract filtering logic so UserDashboard stays focused on state + rendering.
const filterDashboardUsers = (
  users: readonly DashboardUser[],
  filter: UserFilter,
  normalizedQuery: string
) => {
  return users.filter(user => {
    const matchesFilter = filter === 'all' || user.status === filter
    // Skip string matching work when no query is entered.
    if (!normalizedQuery) {
      return matchesFilter
    }

    const name = user.name.toLowerCase()
    const email = user.email.toLowerCase()
    const matchesSearch = name.includes(normalizedQuery) || email.includes(normalizedQuery)
    return matchesFilter && matchesSearch
  })
}

/* ==========================================
 * 💬 USER DASHBOARD COMPONENT
 * Ask Copilot questions about this code!
 * ========================================== */
function UserDashboard() {
  const [filter, setFilter] = useState<UserFilter>('all')
  const [searchQuery, setSearchQuery] = useState('')
  // Defer expensive list filtering while users are actively typing.
  const deferredSearchQuery = useDeferredValue(searchQuery)
  const normalizedQuery = useMemo(
    () => deferredSearchQuery.trim().toLowerCase(),
    [deferredSearchQuery]
  )

  // Memoize filtered results so unrelated renders do not recompute this loop.
  const filteredUsers = useMemo(
    () => filterDashboardUsers(DASHBOARD_USERS, filter, normalizedQuery),
    [filter, normalizedQuery]
  )
  const resultsMessage = `${filteredUsers.length} user${filteredUsers.length === 1 ? '' : 's'} shown`

  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">
        Highlight this component and ask Copilot about performance, security, or refactoring
      </p>

      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <legend className="sr-only">Filter users</legend>
        <div>
          <label htmlFor="user-search" className="block text-sm font-medium text-gray-700 mb-1">
            Search users
          </label>
          <input
            id="user-search"
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          />
        </div>
        <div>
          <label htmlFor="user-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by status
          </label>
          <select
            id="user-filter"
            value={filter}
            onChange={e => setFilter(e.target.value as UserFilter)}
            className="w-full px-4 py-2 border rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <option value="all">All Users</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </fieldset>

      <p className="sr-only" role="status" aria-live="polite">
        {resultsMessage}
      </p>

      <ul className="space-y-2" aria-label="Filtered users">
        {filteredUsers.map(user => (
          <li key={user.id} className="p-4 border rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  user.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <span className="sr-only">Status: </span>
                {user.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Last login: {user.lastLogin}</p>
          </li>
        ))}
      </ul>

      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-600 py-8" role="status" aria-live="polite">
          No users found
        </p>
      )}
    </div>
  )
}
