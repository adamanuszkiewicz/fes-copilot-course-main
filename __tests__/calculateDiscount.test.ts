import { calculateDiscount } from '@/app/practice/module-2-agent-features/page'

describe('calculateDiscount', () => {
  it('returns price minus discount for valid inputs', () => {
    expect(calculateDiscount(100, 10)).toBe(90)
  })

  it('returns original price when discount is 0', () => {
    expect(calculateDiscount(100, 0)).toBe(100)
  })

  it('returns 0 when discount is 100', () => {
    expect(calculateDiscount(100, 100)).toBe(0)
  })

  it('returns original price for negative price', () => {
    expect(calculateDiscount(-50, 10)).toBe(-50)
  })

  it('returns original price for negative discount', () => {
    expect(calculateDiscount(100, -10)).toBe(100)
  })

  it('returns original price for discount above 100', () => {
    expect(calculateDiscount(100, 120)).toBe(100)
  })
})
