'use client'

import { useCallback, useId, useMemo, useState } from 'react'

/**
 * MODULE 3: Inline Chat - Edit Mode in Depth
 *
 * This file contains exercises for making precise, surgical edits:
 * - Converting to async/await
 * - Improving accessibility
 * - Refactoring for clarity
 * - Style and performance tweaks
 */

export default function Module3Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 3: Inline Chat - Precision Edits</h1>
          <p className="text-gray-600">Make surgical edits to improve code quality</p>
        </header>

        <div className="space-y-8">
          {/* ==========================================
           * 🔄 LESSON 3.1 - EXERCISE: CONVERT TO ASYNC/AWAIT
           * ==========================================
           *
           * ✅ TODO: REFACTOR THIS TO USE ASYNC/AWAIT
           *
           * Instructions:
           * 1. Highlight the fetchUserData function below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Rewrite this to use async/await"
           * 4. Review the patch and accept it
           * 5. Test that it still works correctly
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">🔄 Lesson 3.1: Convert to Async/Await</h2>
            <PromiseBasedComponent />
          </section>

          {/* ==========================================
           * ♿ LESSON 3.2 - EXERCISE: IMPROVE ACCESSIBILITY
           * ==========================================
           *
           * ✅ TODO: ADD ACCESSIBILITY FEATURES
           *
           * Instructions:
           * 1. Highlight the InaccessibleForm component below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Add aria-labels and make this accessible for screen readers"
           * 4. Review and accept the improvements
           * 5. Ask follow-up: "What other accessibility improvements can be made?"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-green-500">
            <h2 className="text-2xl font-semibold mb-4">♿ Lesson 3.2: Improve Accessibility</h2>
            <InaccessibleForm />
          </section>

          {/* ==========================================
           * 🧹 LESSON 3.3 - EXERCISE: REFACTOR FOR CLARITY
           * ==========================================
           *
           * ✅ TODO: BREAK INTO SMALLER FUNCTIONS
           *
           * Instructions:
           * 1. Highlight the MessyComponent function below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: "Break this into smaller functions with clear names"
           * 4. Review the refactored code
           * 5. Ask: "Can this be simplified further?"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-purple-500">
            <h2 className="text-2xl font-semibold mb-4">🧹 Lesson 3.3: Refactor for Clarity</h2>
            <MessyComponent />
          </section>

          {/* ==========================================
           * 🎨 LESSON 3.4 - EXERCISE: STYLE AND PERFORMANCE
           * ==========================================
           *
           * ✅ TODO: APPLY MULTIPLE IMPROVEMENTS
           *
           * Try these inline chat commands on the component below:
           * 1. "Convert this to a functional component" (if it was class-based)
           * 2. "Use Tailwind classes instead of inline styles"
           * 3. "Optimize this loop for better performance"
           * 4. "Add TypeScript types for better type safety"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4">🎨 Lesson 3.4: Style & Performance</h2>
            <StylableComponent />
          </section>

          {/* ==========================================
           * 🎯 PRACTICE AREA: YOUR TURN
           * ==========================================
           *
           * ✅ TODO: PRACTICE ALL INLINE CHAT TECHNIQUES
           *
           * Instructions:
           * Create your own component below and practice:
           * - Converting callback patterns to async/await
           * - Adding accessibility features
           * - Refactoring complex logic
           * - Improving styling and performance
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-red-500">
            <h2 className="text-2xl font-semibold mb-4">🎯 Your Practice Area</h2>
            <p className="text-gray-600 mb-4">
              Create a component below and practice all Inline Chat techniques
            </p>

            {/* Practice component: Rock, Paper, Scissors */}
            <RockPaperScissors />
          </section>
        </div>
      </div>
    </div>
  )
}

/* ==========================================
 * 🔄 PROMISE-BASED COMPONENT
 * Refactor this to use async/await!
 * ========================================== */
function PromiseBasedComponent() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // This uses .then() chains - convert it to async/await!
  const fetchUserData = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const userData = await response.json()
      setData(userData)
      setLoading(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component uses .then() chains. Highlight the fetchUserData function and convert it to
        async/await!
      </p>

      <button
        onClick={fetchUserData}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Loading...' : 'Fetch User Data'}
      </button>

      {error && <div className="p-4 bg-red-100 text-red-700 rounded">Error: {error}</div>}

      {data && (
        <div className="p-4 bg-gray-100 rounded">
          <h3 className="font-semibold">{data.name}</h3>
          <p className="text-sm text-gray-600">{data.email}</p>
          <p className="text-sm text-gray-600">{data.phone}</p>
        </div>
      )}
    </div>
  )
}

/* ==========================================
 * ♿ INACCESSIBLE FORM
 * Add accessibility features to this form!
 * ========================================== */
function InaccessibleForm() {
  const formId = useId()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This form now includes labels, helper text, and screen reader friendly feedback.
      </p>

      <form onSubmit={handleSubmit} aria-describedby={`${formId}-form-help`} className="space-y-3">
        <p id={`${formId}-form-help`} className="text-sm text-gray-500">
          All fields are required.
        </p>

        <div>
          <label
            htmlFor={`${formId}-name`}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={formData.name}
            onChange={e => {
              setFormData({ ...formData, name: e.target.value })
              if (isSubmitted) setIsSubmitted(false)
            }}
            aria-describedby={`${formId}-name-help`}
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%' }}
          />
          <p id={`${formId}-name-help`} className="mt-1 text-xs text-gray-500">
            Enter your full name.
          </p>
        </div>

        <div style={{ marginTop: '12px' }}>
          <label
            htmlFor={`${formId}-email`}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={e => {
              setFormData({ ...formData, email: e.target.value })
              if (isSubmitted) setIsSubmitted(false)
            }}
            aria-describedby={`${formId}-email-help`}
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%' }}
          />
          <p id={`${formId}-email-help`} className="mt-1 text-xs text-gray-500">
            We will only use this to reply to your message.
          </p>
        </div>

        <div style={{ marginTop: '12px' }}>
          <label
            htmlFor={`${formId}-message`}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            autoComplete="off"
            required
            value={formData.message}
            onChange={e => {
              setFormData({ ...formData, message: e.target.value })
              if (isSubmitted) setIsSubmitted(false)
            }}
            aria-describedby={`${formId}-message-help`}
            style={{ border: '1px solid #ccc', padding: '8px', width: '100%', minHeight: '100px' }}
          />
          <p id={`${formId}-message-help`} className="mt-1 text-xs text-gray-500">
            Include any details that will help us respond.
          </p>
        </div>

        <div style={{ marginTop: '12px' }}>
          <button
            type="submit"
            aria-label="Submit Form"
            className="mt-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Submit
          </button>
        </div>

        <p aria-live="polite" role="status" className="text-sm text-green-700">
          {isSubmitted ? 'Form submitted successfully.' : ''}
        </p>
      </form>
    </div>
  )
}

/* ==========================================
 * 🧹 MESSY COMPONENT
 * Refactor this into smaller, clearer functions!
 * ========================================== */
interface Item {
  id: number
  name: string
  category: string
  price: number
  inStock: boolean
}

interface PricedItem extends Item {
  discountedPrice: number
  formattedPrice: string
  isOnSale: boolean
}

type SortOption = 'name' | 'price'

const matchesCategory = (item: Item, filter: string): boolean => {
  if (filter === '') return true
  return item.category.toLowerCase() === filter.toLowerCase()
}

const isInStock = (item: Item): boolean => item.inStock

const compareItems = (a: Item, b: Item, sort: SortOption): number => {
  if (sort === 'name') {
    return a.name.localeCompare(b.name)
  }
  return a.price - b.price
}

const addPricingDetails = (item: Item): PricedItem => {
  const discountedPrice = item.price > 2 ? item.price * 0.9 : item.price
  const formattedPrice = `$${discountedPrice.toFixed(2)}`
  const isOnSale = item.price > 2

  return { ...item, discountedPrice, formattedPrice, isOnSale }
}

const processItems = (items: Item[], filter: string, sort: SortOption): PricedItem[] => {
  return items
    .filter(item => matchesCategory(item, filter))
    .filter(isInStock)
    .sort((a, b) => compareItems(a, b, sort))
    .map(addPricingDetails)
}

const ItemCard = ({ item }: { item: PricedItem }) => {
  return (
    <div className="border rounded p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.category}</p>
        </div>
        {item.isOnSale && (
          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">SALE</span>
        )}
      </div>
      <p className="text-lg font-bold mt-2">{item.formattedPrice}</p>
      {item.isOnSale && (
        <p className="text-xs text-gray-500 line-through">${item.price.toFixed(2)}</p>
      )}
    </div>
  )
}

const Filters = ({
  filter,
  sort,
  onFilterChange,
  onSortChange,
}: {
  filter: string
  sort: SortOption
  onFilterChange: (value: string) => void
  onSortChange: (value: SortOption) => void
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <select
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
        className="px-4 py-2 border rounded"
      >
        <option value="">All Categories</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
      </select>

      <select
        value={sort}
        onChange={e => onSortChange(e.target.value as SortOption)}
        className="px-4 py-2 border rounded"
      >
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
    </div>
  )
}

function MessyComponent() {
  const [items] = useState<Item[]>([
    { id: 1, name: 'Apple', category: 'Fruit', price: 1.5, inStock: true },
    { id: 2, name: 'Banana', category: 'Fruit', price: 0.8, inStock: true },
    { id: 3, name: 'Carrot', category: 'Vegetable', price: 1.2, inStock: true },
    { id: 4, name: 'Dates', category: 'Fruit', price: 3.0, inStock: true },
  ])
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState<SortOption>('name')

  const processedItems = processItems(items, filter, sort)

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component does too much in one place. Highlight it and ask Copilot to break it into
        smaller functions!
      </p>

      <Filters filter={filter} sort={sort} onFilterChange={setFilter} onSortChange={setSort} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {processedItems.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

/* ==========================================
 * 🎨 STYLABLE COMPONENT
 * Improve the styling and performance!
 * ========================================== */
function StylableComponent() {
  const [count, setCount] = useState(0)

  const expensiveValue = useMemo(() => {
    let result = 0
    for (let i = 0; i < 1000000; i++) {
      result += i
    }
    return result
  }, [])

  const handleIncrement = useCallback(() => {
    const incrementAsync = async () => {
      await Promise.resolve()
      setCount(prevCount => prevCount + 1)
    }

    void incrementAsync()
  }, [])

  const handleReset = useCallback(() => {
    const resetAsync = async () => {
      await Promise.resolve()
      setCount(0)
    }

    void resetAsync()
  }, [])

  return (
    <div className="space-y-4">
      <p className="text-gray-600">
        This component uses inline styles and has performance issues. Improve it!
      </p>

      <div className="mt-4 rounded-lg bg-gray-100 p-6">
        <p className="text-2xl font-bold text-gray-800">Count: {count}</p>
        <p className="mt-2 text-gray-500">Expensive calculation: {expensiveValue}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

/* ==========================================
 * 🎮 ROCK PAPER SCISSORS - Practice Component
 * Small interactive game for the practice area.
 * Click one option to play; a random opponent choice is shown.
 * Both selected choices brighten and scale for emphasis.
 * ========================================== */
function RockPaperScissors() {
  const options = ['rock', 'paper', 'scissors'] as const
  type Option = (typeof options)[number]

  const [player, setPlayer] = useState<Option | null>(null)
  const [opponent, setOpponent] = useState<Option | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const play = (choice: Option) => {
    const rand = options[Math.floor(Math.random() * options.length)]
    setPlayer(choice)
    setOpponent(rand)

    // determine outcome
    if (choice === rand) {
      setResult('Tie')
      return
    }

    const wins =
      (choice === 'rock' && rand === 'scissors') ||
      (choice === 'paper' && rand === 'rock') ||
      (choice === 'scissors' && rand === 'paper')

    setResult(wins ? 'You win!' : 'You lose')
  }

  const reset = () => {
    setPlayer(null)
    setOpponent(null)
    setResult(null)
  }

  return (
    <div className="space-y-4">
      <p className="text-gray-600">Play Rock, Paper, Scissors — click an option to play.</p>

      <div className="flex items-center gap-4">
        {options.map(opt => {
          const isActive = player === opt || opponent === opt
          return (
            <button
              key={opt}
              onClick={() => play(opt)}
              aria-pressed={player === opt}
              aria-label={`Choose ${opt}`}
              className={`w-28 h-28 rounded-lg flex items-center justify-center text-lg font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                ${isActive ? 'opacity-100 scale-105 bg-blue-100' : 'opacity-60 scale-95 bg-gray-100'}`}
            >
              {opt.charAt(0).toUpperCase() + opt.slice(1)}
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-700">
          <strong>Your choice:</strong> {player ?? '—'}
        </div>
        <div className="text-sm text-gray-700">
          <strong>Opponent:</strong> {opponent ?? '—'}
        </div>
      </div>

      <p aria-live="polite" className="text-lg font-semibold">
        {result ?? ''}
      </p>

      <div>
        <button onClick={reset} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Reset
        </button>
      </div>
    </div>
  )
}
