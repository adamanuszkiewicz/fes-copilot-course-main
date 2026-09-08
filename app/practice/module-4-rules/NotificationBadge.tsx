type NotificationBadgeProps = {
  count: number
  maxCount?: number
}

const NotificationBadge = ({ count, maxCount = 99 }: NotificationBadgeProps) => {
  const displayCount: string = count > maxCount ? `${maxCount}+` : `${count}`

  return (
    <span
      aria-label={`${displayCount} notifications`}
      className="inline-flex min-w-8 items-center justify-center rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white"
    >
      {displayCount}
    </span>
  )
}

export default NotificationBadge