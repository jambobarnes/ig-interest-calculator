import { CalculatorIcon } from '@heroicons/react/outline'

const results = [
  {
    id: '1142rdwsqzxf',
    result: '1.00',
    value: '10.00',
    interest: 10
  },
  {
    id: '1142rdwsqzxf',
    result: '1.00',
    value: '10.00',
    interest: 10
  },
  {
    id: '1142rdwsqzxf',
    result: '1.00',
    value: '10.00',
    interest: 10
  },
  {
    id: '1142rdwsqzxf',
    result: '1.00',
    value: '10.00',
    interest: 10
  },
  // More people...
]

export default function CalculatorHistoryFeed() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {results.map((result) => (
        <div
          key={result.id}
          className="relative rounded-lg py-2 flex items-center space-x-6 border border-gray-300 bg-white px-3 shadow-sm"
        >
          <div className="flex-shrink-0">
            <span className='h-6 w-6 rounded-full flex items-center justify-center ring-2 ring-ig-green'>
              <CalculatorIcon className="h-5 w-5 text-ig-blue" aria-hidden="true" />
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm text-gray-500">You asked for {result.interest}% of £{result.value}</p>
            <p className="text-md font-medium text-gray-900">£{result.interest} interest</p>
          </div>
        </div>
      ))}
    </div>

  )
}
