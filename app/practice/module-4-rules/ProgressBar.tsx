type ProgressBarProps = {
  value: number
  label?: string
}

const ProgressBar = ({ value, label = 'Progress' }: ProgressBarProps) => {
  const clampedValue: number = Math.min(100, Math.max(0, value))

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm text-gray-700">
        <span>{label}</span>
        <span>{clampedValue}%</span>
      </div>
      <div className="h-3 w-full rounded-full bg-gray-200">
        <div
          role="progressbar"
          aria-label={label}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={clampedValue}
          className="h-3 rounded-full bg-blue-600 transition-all"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar