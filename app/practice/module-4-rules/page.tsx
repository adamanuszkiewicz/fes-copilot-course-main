'use client'

import { useState, useMemo } from 'react'
import LoginForm from './LoginForm'
import ModalDialog from './ModalDialog'
import NotificationBadge from './NotificationBadge'
import ProgressBar from './ProgressBar'
import DataTable from './DataTable'

type TableColumn = {
  key: string
  label: string
}

type TableRow = {
  name: string
  role: string
  status: string
}

const Module4Practice = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = (): void => setIsModalOpen(true)
  const closeModal = (): void => setIsModalOpen(false)

  const tableColumns = useMemo<TableColumn[]>(
    () => [
      { key: 'name', label: 'Name' },
      { key: 'role', label: 'Role' },
      { key: 'status', label: 'Status' },
    ],
    [],
  )

  const tableRows = useMemo<TableRow[]>(
    () => [
      { name: 'Monica', role: 'Student', status: 'Active' },
      { name: 'Jordan', role: 'Mentor', status: 'Reviewing' },
      { name: 'Casey', role: 'Instructor', status: 'Available' },
    ],
    [],
  )

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">Module 4: Project Rules</h1>
          <p className="text-gray-600">
            Teach Copilot to follow your coding voice and style (Agent Mode)
          </p>
        </header>

        {/* LESSON 4.1 — Create Rules File */}
        <section className="mb-10 rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-semibold">Lesson 4.1 — Setting Up Your Rules File</h2>
          <p className="mb-4 text-gray-700">
            Your project rules live in <code>.github/copilot-instructions.md</code>. Once created,
            Copilot automatically uses these instructions whenever you write or edit code in this
            repo.
          </p>

          <div className="mb-4 rounded border bg-gray-50 p-4 text-sm text-gray-800">
            <p className="mb-2 font-semibold">Recommended rules:</p>
            <pre className="overflow-x-auto rounded border bg-white p-4 text-sm text-gray-800">
              {`# Copilot Instructions

- Use React functional components with arrow functions.
- Write TypeScript types or interfaces for component props and state.
- Style with Tailwind CSS; avoid inline styles.
- Keep components small, clean, and modular; extract helpers if a function grows large.
- Add concise comments for non-obvious logic.
- Prefer accessibility-first HTML (semantic elements; label interactive controls).
`}
            </pre>
          </div>

          <p className="text-gray-700">
            Save your rules file, then move on to the next section to validate that Copilot follows
            them in Agent Mode.
          </p>
        </section>

        {/* LESSON 4.2 — Test Rules with Agent Mode */}
        <section className="mb-10 rounded-lg border-l-4 border-blue-400 bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-semibold">
            Lesson 4.2 — Testing Your Rules (Agent Mode)
          </h2>
          <p className="mb-4 text-gray-700">
            Use the practice area below to direct Copilot (Agent Mode) to scaffold real features.
            Each task should naturally follow your rules: arrow functions, TypeScript types,
            Tailwind classes, and minimal, purposeful comments.
          </p>

          <div className="rounded border-2 border-blue-400 bg-blue-50 p-4">
            <h3 className="mb-2 font-semibold text-gray-800">Practice Area — Agent Tasks</h3>
            <p className="mb-4 text-sm text-gray-600">
              Add a comment below and run the task with Copilot (Agent Mode):
            </p>

            <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>
                <code>
                  {`// Scaffold a LoginForm with email, password, and submit button. Client-side validation, Tailwind styling, accessible labels.`}
                </code>
              </li>
              <li>
                <code>
                  {`// Build a ProfileCard with avatar image, name, bio, and a "Contact" button. Keep layout responsive and concise.`}
                </code>
              </li>
              <li>
                <code>
                  {`// Create a PrimaryButton component (props: children, onClick, type?). Apply our standard Tailwind button style.`}
                </code>
              </li>
              <li>
                <code>
                  {`// Implement a simple SearchBar with input, clear button, and debounced onChange callback (300ms).`}
                </code>
              </li>
            </ul>

            <p className="mb-2 text-sm text-gray-600">Expected (based on your rules):</p>
            <ul className="list-inside list-disc text-sm text-gray-700">
              <li>Arrow-function components</li>
              <li>TypeScript props/interfaces</li>
              <li>Tailwind classes (no inline styles)</li>
              <li>Small, focused structure + brief comments for non-obvious logic</li>
              <li>Accessible markup for inputs and controls</li>
            </ul>

            <div className="mt-6 rounded border bg-white p-4">
              <LoginForm />
            </div>
          </div>
        </section>

        {/* LESSON 4.3 — Consistency Across Multiple Components */}
        <section className="mb-10 rounded-lg border-l-4 border-green-400 bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-semibold">
            Lesson 4.3 — Consistency Across Components
          </h2>
          <p className="mb-4 text-gray-700">
            Generate multiple components and verify that Copilot keeps your rules consistent across
            different feature shapes.
          </p>

          <div className="rounded border-2 border-green-400 bg-green-50 p-4">
            <p className="mb-4 text-sm text-gray-700">Agent tasks to try one-by-one:</p>
            <ul className="mb-4 list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>
                <code>
                  {`// Create a NotificationBadge (props: count, maxCount?). Show overflow like "99+".`}
                </code>
              </li>
              <li>
                <code>
                  {`// Create a ProgressBar (props: value 0-100, label?). Include accessible markup for screen readers.`}
                </code>
              </li>
              <li>
                <code>
                  {`// Create a ModalDialog (props: open, onClose, title). Include a close button.`}
                </code>
              </li>
              <li>
                <code>
                  {`// Create a DataTable shell (columns prop, rows prop). Responsive table layout with Tailwind utilities.`}
                </code>
              </li>
            </ul>

            <p className="mb-4 text-sm text-gray-700">
              After each generation, check for rule adherence (arrow functions, typed props,
              Tailwind rhythm, minimal comments). If anything drifts, adjust{' '}
              <code>.github/copilot-instructions.md</code> and retry the task.
            </p>

            <div className="space-y-6 rounded border bg-white p-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Notifications</span>
                <NotificationBadge count={128} maxCount={99} />
              </div>

              <ProgressBar value={72} label="Module progress" />

              <DataTable columns={tableColumns} rows={tableRows} />

              <div>
                <button
                  type="button"
                  onClick={openModal}
                  aria-label="Open modal dialog"
                  className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60"
                >
                  Open Modal
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* LESSON 4.4 — Refining and Expanding Rules */}
        <section className="mb-10 rounded-lg border-l-4 border-purple-400 bg-white p-6 shadow">
          <h2 className="mb-4 text-2xl font-semibold">Lesson 4.4 — Refining and Expanding Rules</h2>
          <p className="mb-4 text-gray-700">
            As your project grows, evolve your rules with specific, reusable patterns so Agent Mode
            drafts match your voice without reminders.
          </p>

          <p className="mb-4 text-gray-700">Examples you can add to your rules file:</p>
          <pre className="mb-4 overflow-x-auto rounded border bg-gray-50 p-4 text-sm text-gray-800">
            {`- Primary button style: 'px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60'.
- Form inputs: use label + id + aria-describedby; include error text with role="alert".
- Components over ~25 lines: extract helpers; keep render paths simple and readable.
- Prefer composition over prop drilling; create small utilities/hooks for repeated logic.
`}
          </pre>

          <p className="text-gray-700">
            Keep the file updated as your standards change. Copilot will follow the latest version
            across all Agent Mode tasks.
          </p>
        </section>

        {/* SUMMARY */}
        <section className="mt-10 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Key Takeaways</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Define once, follow everywhere.</strong> Copilot reads your rules
              automatically.
            </li>
            <li>
              <strong>Direct with Agent Mode.</strong> Use bigger tasks to see your rules applied in
              realistic code.
            </li>
            <li>
              <strong>Refine as you go.</strong> When you see drift, clarify the rule and retry.
            </li>
            <li>
              <strong>Keep it modular.</strong> Small components + typed props + Tailwind rhythm =
              consistent output.
            </li>
          </ul>
        </section>

        <ModalDialog open={isModalOpen} onClose={closeModal} title="Module 4 Modal">
          This is a reusable modal dialog with open/close state and an accessible close control.
        </ModalDialog>
      </div>
    </div>
  )
}

export default Module4Practice