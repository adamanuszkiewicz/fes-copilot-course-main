export function calculateDiscount(
  price: number,
  discountPercent: number,
  isMember: boolean = false
): number {
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    return price
  }

  const memberBonusPercent = isMember ? 5 : 0
  const totalDiscountPercent = Math.min(discountPercent + memberBonusPercent, 100)
  const discountAmount = (price * totalDiscountPercent) / 100
  return price - discountAmount
}
