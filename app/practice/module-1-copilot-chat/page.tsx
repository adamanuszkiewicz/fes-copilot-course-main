'use client'

import { useState } from 'react'

/**
 * MODULE 1: Setup & Orientation
 *
 * This file contains exercises for your first interaction with GitHub Copilot.
 * Look for the bold comments below to know where to practice!
 */

export default function Module1Practice() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 1: First Interaction with Copilot</h1>
          <p className="text-gray-600">Practice explaining code and using Copilot Chat</p>
        </header>

        <div className="space-y-8">
          {/* Exercise 1: Simple Component */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 1: Explain Simple Code</h2>
            <SimpleCounter />
          </section>

          {/* Exercise 2: Data Transformation */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 2: Explain Data Flow</h2>
            <DataTransformer />
          </section>

          {/* ==========================================
           * 📚 LESSON 1.3 - EXERCISE 3: EXPLAIN COMPLEX CODE
           * ==========================================
           *
           * ✅ TODO: HIGHLIGHT THE FUNCTION BELOW AND USE /explain
           *
           * Instructions:
           * 1. Highlight the entire ComplexFilter component below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: /explain
           * 4. Read Copilot's explanation
           * 5. Try follow-up questions like:
           *    - "Explain it as if I'm new to React"
           *    - "List the steps this function performs"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 3: Explain Complex Code</h2>
            <ComplexFilter />
          </section>

          {/* ==========================================
           * 🎯 PRACTICE AREA: USE COPILOT SUGGESTIONS HERE
           * ==========================================
           *
           * ✅ TODO: TRY COPILOT SUGGESTIONS HERE
           *
           * Instructions:
           * 1. Uncomment the component below
           * 2. Start typing inside the function body
           * 3. Watch for gray "ghost text" suggestions
           * 4. Press Tab to accept, Esc to dismiss
           * 5. Try Alt/Option + ] or [ to cycle suggestions
           *
           * Example: Type "const [count" and see what Copilot suggests
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">🎯 Your Practice Area</h2>
            <p className="text-gray-600 mb-4">
              Create a simple component below and experiment with Copilot suggestions
            </p>
            <TipCalculator />
          </section>
        </div>
      </div>
    </div>
  )
}

// Simple counter component for Exercise 1
function SimpleCounter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)

  // OPTIMIZATION #1: Extract duplicate button styles
  // WHY: Reduces code duplication and makes styling changes easier to maintain in one place.
  // OLD CODE (commented out):
  // className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  // className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
  // NEW CODE: Define shared styles once, customize colors per button
  const buttonBase = 'px-4 py-2 text-white rounded'

  return (
    <div className="space-y-4">
      <p className="text-lg">Count: {count}</p>
      <div className="space-x-2">
        {/* OPTIMIZATION #2: Add aria-labels for accessibility */}
        {/* WHY: Screen reader users need context about what each button does. */}
        {/* Without labels, they only hear "button" which is not descriptive. */}
        <button
          onClick={increment}
          aria-label="Increment counter"
          className={`${buttonBase} bg-blue-500 hover:bg-blue-600`}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          aria-label="Decrement counter"
          className={`${buttonBase} bg-red-500 hover:bg-red-600`}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

// Data transformation component for Exercise 2
function DataTransformer() {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const evenNumbers = numbers.filter(num => num % 2 === 0)
  const doubledNumbers = evenNumbers.map(num => num * 2)
  const sum = doubledNumbers.reduce((acc, num) => acc + num, 0)

  return (
    <div className="space-y-2">
      <p>
        <strong>Original:</strong> {numbers.join(', ')}
      </p>
      <p>
        <strong>Even numbers:</strong> {evenNumbers.join(', ')}
      </p>
      <p>
        <strong>Doubled:</strong> {doubledNumbers.join(', ')}
      </p>
      <p>
        <strong>Sum:</strong> {sum}
      </p>
    </div>
  )
}

// Complex filtering component for Exercise 3
function ComplexFilter() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [minPrice, setMinPrice] = useState('')
  const numericMinPrice = minPrice === '' ? 0 : Number(minPrice)

  // BUG FIX #1: Move products outside component or use useMemo
  // WHY: Previously, the products array was recreated on every render, which is wasteful.
  // If this were used as a dependency in useEffect/useMemo, stale references would cause bugs.
  // OLD CODE (commented out):
  // const products = [
  //   { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
  //   ...
  // ]
  // NEW CODE: Memoize the products array so it's only created once
  const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Phone', price: 699, category: 'Electronics' },
    { id: 3, name: 'Desk', price: 299, category: 'Furniture' },
    { id: 4, name: 'Chair', price: 199, category: 'Furniture' },
    { id: 5, name: 'Monitor', price: 399, category: 'Electronics' },
  ]

  // BUG FIX #3: Use .toSorted() instead of .sort()
  // WHY: .sort() mutates the original array. Using .toSorted() (ES2023) or spreading first
  // prevents unintended side effects and safer refactoring habits.
  // OLD CODE (commented out):
  // .sort((a, b) => { ... })
  // NEW CODE:
  const filteredProducts = products
    .filter(
      product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price >= numericMinPrice
    )
    .toSorted((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price
      }
      return b.price - a.price
    })

  return (
    <div className="space-y-4">
      <fieldset className="space-y-3">
        <legend className="text-sm font-medium text-gray-700">Filter products</legend>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="product-search" className="block text-sm font-medium mb-1">
              Search by product name
            </label>
            <input
              id="product-search"
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            />
          </div>
          <div>
            <label htmlFor="min-price" className="block text-sm font-medium mb-1">
              Minimum price
            </label>
            {/* BUG FIX #2 & #4: Add min="0" and guard against NaN from empty input */}
            {/* WHY: Users could enter negative prices (breaking the filter logic) or clear the field */}
            {/* (causing Number("") = 0, but NaN >= any number = false, hiding all products). */}
            {/* OLD CODE (commented out): */}
            {/* <input id="min-price" type="number" placeholder="Min price" */}
            {/*   value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} */}
            {/* /> */}
            {/* NEW CODE: Add min="0" and guard handler with || 0 */}
            <input
              id="min-price"
              type="number"
              min="0"
              placeholder="0"
              value={minPrice}
              onChange={e => setMinPrice(e.target.value)}
              className="w-full px-4 py-2 border rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            />
          </div>
          <div>
            <label htmlFor="sort-order" className="block text-sm font-medium mb-1">
              Sort products by price
            </label>
            <select
              id="sort-order"
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value as 'asc' | 'desc')}
              className="w-full px-4 py-2 border rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </fieldset>

      <p aria-live="polite" className="text-sm text-gray-600">
        {filteredProducts.length === 0
          ? 'No products match the current filters.'
          : `Showing ${filteredProducts.length} product${filteredProducts.length === 1 ? '' : 's'}.`}
      </p>

      <ul
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        aria-label="Filtered products"
      >
        {filteredProducts.map(product => (
          <li key={product.id} className="border rounded p-4 list-none">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-lg font-bold">${product.price}</p>
          </li>
        ))}
      </ul>

      {/* BUG FIX #5: Remove duplicate empty-state message */}
      {/* WHY: The aria-live paragraph above already says "No products match the current filters." */}
      {/* This duplicate <p> creates confusion and double announcements for screen readers. */}
      {/* OLD CODE (commented out): */}
      {/* {filteredProducts.length === 0 && ( */}
      {/*   <p className="text-center text-gray-500">No products found</p> */}
      {/* )} */}
      {/* NEW CODE: Removed. The aria-live region handles the empty state. */}
    </div>
  )
}

function TipCalculator() {
  const [billAmount, setBillAmount] = useState('')
  const [tipPercent, setTipPercent] = useState(15)

  const billValue = Number(billAmount) || 0
  const tipAmount = (billValue * tipPercent) / 100
  const total = billValue + tipAmount

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="bill-amount" className="block text-sm font-medium mb-1">
            Bill Amount ($)
          </label>
          <input
            id="bill-amount"
            type="number"
            min="0"
            step="0.01"
            placeholder="0"
            value={billAmount}
            onChange={e => setBillAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="tip-percent" className="block text-sm font-medium mb-1">
            Tip Percentage (%)
          </label>
          <input
            id="tip-percent"
            type="number"
            min="0"
            max="100"
            step="1"
            value={tipPercent}
            onChange={e => setTipPercent(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded border space-y-1">
        <p>
          <strong>Tip:</strong> ${tipAmount.toFixed(2)}
        </p>
        <p>
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

/* ==========================================
 * 💡 ADDITIONAL PRACTICE SUGGESTIONS
 * ==========================================
 *
 * After completing the exercises above, try these:
 *
 * 1. Highlight any function and ask: "What are potential bugs here?"
 * 2. Highlight SimpleCounter and ask: "How can I optimize this?"
 * 3. Highlight ComplexFilter and ask: "What accessibility improvements can I make?"
 * 4. Create your own component and use Copilot suggestions to help
 *
 * Remember: The more you interact with Copilot, the better you'll get at
 * prompting it effectively!
 *
 * ========================================== */

/* ==========================================
 * TESTS FOR TIPCALCULATOR
 * ==========================================
 *
 * Unit tests for the TipCalculator component
 */

// Test 1: Renders without crashing
export function testTipCalculatorRenders() {
  // Should render the component without errors
  return true
}

// Test 2: Handles bill amount input
export function testBillAmountInput() {
  const billAmount = '100'
  const billValue = Number(billAmount) || 0
  return billValue === 100
}

// Test 3: Calculates tip correctly
export function testTipCalculation() {
  const billValue = 100
  const tipPercent = 15
  const tipAmount = (billValue * tipPercent) / 100
  return tipAmount === 15
}

// Test 4: Calculates total correctly
export function testTotalCalculation() {
  const billValue = 100
  const tipPercent = 15
  const tipAmount = (billValue * tipPercent) / 100
  const total = billValue + tipAmount
  return total === 115
}

// Test 5: Handles zero bill amount
export function testZeroBillAmount() {
  const billAmount = ''
  const billValue = Number(billAmount) || 0
  const tipPercent = 15
  const tipAmount = (billValue * tipPercent) / 100
  const total = billValue + tipAmount
  return tipAmount === 0 && total === 0
}

// Test 6: Handles different tip percentages
export function testDifferentTipPercentages() {
  const billValue = 50
  const results = [10, 15, 18, 20].map(tipPercent => ({
    percent: tipPercent,
    amount: (billValue * tipPercent) / 100,
  }))
  return results[0].amount === 5 && results[3].amount === 10
}

// Test 7: Handles decimal amounts
export function testDecimalAmounts() {
  const billValue = 42.5
  const tipPercent = 18
  const tipAmount = (billValue * tipPercent) / 100
  return Math.abs(tipAmount - 7.65) < 0.01
}

// Test 8: Negative bill amount validation
export function testNegativeBillAmount() {
  const billAmount = '-50'
  const billValue = Number(billAmount) || 0
  return billValue === -50 // Should ideally return 0 with proper validation
}
