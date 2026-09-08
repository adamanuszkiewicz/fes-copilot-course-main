import type { ReactNode } from 'react'

type DataTableColumn = {
  key: string
  label: string
}

type DataTableRow = Record<string, ReactNode>

type DataTableProps = {
  columns: DataTableColumn[]
  rows: DataTableRow[]
  emptyState?: string
}

const DataTable = ({ columns, rows, emptyState = 'No data available.' }: DataTableProps) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-4 py-3 font-semibold text-gray-700"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.length === 0 ? (
            <tr>
              <td className="px-4 py-6 text-gray-500" colSpan={columns.length || 1}>
                {emptyState}
              </td>
            </tr>
          ) : (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column.key} className="px-4 py-3 text-gray-700">
                    {row[column.key] ?? '-'}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable