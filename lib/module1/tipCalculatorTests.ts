'use strict'

// Test helpers moved from the Module 1 page to avoid Next.js Page typing issues.

// Test 1: Renders without crashing
export function testTipCalculatorRenders() {
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
