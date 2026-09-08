'use client'

import { useState, type FormEvent } from 'react'

type LoginFormProps = {
  onSubmit?: (email: string, password: string) => void
}

type FormErrors = {
  email?: string
  password?: string
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errors, setErrors] = useState<FormErrors>({})

  const validate = (): boolean => {
    const nextErrors: FormErrors = {}

    if (!email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!password) {
      nextErrors.password = 'Password is required.'
    } else if (password.length < 6) {
      nextErrors.password = 'Password must be at least 6 characters.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (!validate()) return
    onSubmit?.(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4" noValidate>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-label="Email address"
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email ? (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          aria-label="Password"
          aria-describedby={errors.password ? 'password-error' : undefined}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password ? (
          <p id="password-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.password}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60"
      >
        Sign in
      </button>
    </form>
  )
}

export default LoginForm