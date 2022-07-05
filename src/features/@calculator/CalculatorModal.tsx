import { Dialog, Transition } from '@headlessui/react'
import { CalculatorIcon } from '@heroicons/react/outline'
import { Fragment, useEffect, useState } from 'react'
import { getCalculations } from './calculatorAPI'
import { formatter } from '../../lib/formatter'

export default function CalculatorModal({ open, setOpen }: any) {

  const [history, setHistory] = useState([])
  const [noHistory, setNoHistory] = useState('')

  useEffect(() => {

    const getHistory = async () => {

      try {

        setNoHistory('There\'s no calculations yet - be the first to calculate yours!')

        const data: any | void = await getCalculations()
        console.log(data)
        setHistory(data.data.calculations)

      } catch (e) {
        
        setNoHistory('There was an error retrieving the calculations. Please try again.')

      }

    }

    getHistory()

  }, [open])


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-y-auto shadow-xl transform transition-all md:h-1/2 sm:my-8 sm:max-w-4xl lg:w-4xl sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <CalculatorIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-xl leading-6 font-medium text-gray-900">
                      All Calculations
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-lg text-gray-500">
                        These are the most recent calculations, requested by users just like you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  {history && history.length ?
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {history.map((historyItem: any) => (
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
                  </div>:
                  <p className="text-md text-gray-600 text-center font-light">{noHistory}</p>
                  }
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
