import { CalculatorIcon } from '@heroicons/react/outline'
import { formatter } from '../../lib/formatter'
import { CalculatorHistoryProps } from '../../lib/types/props'

export default function CalculatorHistoryFeed({ history }: CalculatorHistoryProps) {

  const shortHistory: any = history.slice(0, 4)

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {shortHistory.map((historyItem: any) => (
        <div
          key={historyItem.id}
          className="relative rounded-lg py-2 flex items-center space-x-6 border border-gray-300 bg-white px-3 shadow-sm"
        >
          <div className="flex-shrink-0">
            <span className='h-6 w-6 rounded-full flex items-center justify-center ring-2 ring-ig-green'>
              <CalculatorIcon className="h-5 w-5 text-ig-blue" aria-hidden="true" />
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm text-gray-500">You asked for {historyItem.interest}% of {formatter.format(historyItem.value)}</p>
            <p className="text-md font-medium text-gray-900">{formatter.format(historyItem.calculated)} interest</p>
          </div>
        </div>
      ))}
    </div>

  )
}
