import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateInterest } from "./calculatorAPI";
import CalculatorHistoryFeed from "./CalculatorHistoryFeed";
import CalculatorModal from "./CalculatorModal";
import { addCalculations, selectHistory, selectInterest, selectResult, selectValue } from "./calculatorSlice";
import { formatter } from "../../lib/formatter";


export default function Calculator() {

  const dispatch = useDispatch();
  const valueAmount = useSelector(selectValue)
  const interestAmount = useSelector(selectInterest)
  const resultAmount = useSelector(selectResult)
  const history = useSelector(selectHistory)

  const [value, setValue] = useState(0)
  const [interest, setInterest] = useState(0)
  const [banner, setBanner] = useState(false)
  const [bannerMessage, setBannerMessage] = useState('')
  const [open, setOpen] = useState(false)
  
  
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value));
  }

  const handleInterest = (e: ChangeEvent<HTMLInputElement>) => {
    setInterest(parseFloat(e.target.value));
  }

  const submitCalculation = async (e: React.MouseEvent<HTMLElement>) => {

    e.preventDefault();

    if (value > 0 && interest > 0) {

      setBanner(false)

      const values = {
        value,
        interest
      }

      try {

        const calculation = await calculateInterest(values)
        dispatch(addCalculations(calculation?.data))

      } catch (e) {

        setBanner(true)
        setBannerMessage('There was an error processing your calculation. Please try again.')

      }

    } else {

      setBanner(true)
      setBannerMessage('Please enter both an amount and an interest rate to get your calculation.')

    }

  }

  const resultSpans = "font-medium text-ig-green"

  return (
    <div>
      <div className="columns-1 lg:columns-2 lg:gap-8 max-w-6xl mx-auto">
        <div className="mx-4 mb-6 lg:mx-0 bg-ig-blue overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="p-2">
              <div className="mb-8">
                <h2 className="text-white text-xl text-center font-montserrat font-semibold mb-2">Interest Calculator</h2>
                <p className="text-white text-lg text-center font-light">Enter an amount (£) and an interest rate (%) in the fields below, then click &apos;Calculate Interest&apos; to see your result.</p>
              </div>
              <form>

                <div>
                  <input
                    type="number"
                    id="value"
                    name="value"
                    className="rounded-xl p-4 w-full text-2xl text-center mb-6"
                    placeholder="Enter an amount (£)"
                    onChange={(e) => { handleValue(e) }}
                  />
                </div>

                <div>
                  <input
                    type="number"
                    id="interest"
                    name="interest"
                    className="rounded-xl p-4 w-full text-2xl text-center mb-6"
                    placeholder="Enter interest rate (%)"
                    onChange={(e) => { handleInterest(e) }}
                  />
                </div>

                <div className="mb-6">
                  <button
                    className="bg-ig-green py-4 rounded-xl w-full font-medium text-white text-lg hover:bg-ig-dark font-raleway"
                    onClick={(e) => submitCalculation(e)}
                  >
                    Calculate Interest
                  </button>
                </div>
                {banner &&
                  <div id="banner-error" className="sm:hidden sm:mx-auto sm:max-w-7xl p-4 text-white border border-red-600 rounded-xl text-lg text-center">
                    <p>Please enter both an amount and an interest rate to get your calculation.</p>
                  </div>
                }
              </form>
            </div>
          </div>
        </div>

        <div>
          <div className="mx-4 lg:mx-0 border-2 border-ig-green overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="p-2">
                {!history.length ?
                  <>
                    <h2 className="text-xl text-center font-montserrat font-semibold mb-4">Enter your values to get your calculation</h2>
                    <p className="text-lg text-center font-light">The result will be shown here when you click &apos;Calculate Interest&apos;</p>
                  </>
                  :
                  <>
                    <h2 className="text-xl text-center font-montserrat font-semibold mb-4">Your Result</h2>
                    <p className="text-lg text-center font-montserrat mb-2"><span className={resultSpans}>{interestAmount}%</span> interest of <span className={resultSpans}>{formatter.format(valueAmount)}</span> is:</p>
                    <p className="text-4xl text-center font-semibold font-montserrat">{formatter.format(resultAmount)}</p>
                  </>
                }
              </div>
            </div>
          </div>
          <div className="mx-4 lg:mx-0 overflow-hidden">
            <div className="py-5 sm:py-4">
              <div className="mt-4">
                <h2 className="text-lg text-center font-montserrat font-semibold mb-4">Your Latest Calculations</h2>
                <div className="">
                  {history && history.length ?
                    <CalculatorHistoryFeed history={history} />
                    :
                    <p className="text-lg text-center font-light">Your latest calculations will be shown here when you use the calculator</p>
                  }
                  
                    <div
                      onClick={() => setOpen(true)}>
                      <p className="text-md text-center font-light text-ig-dark hover:text-ig-green cursor-pointer my-4">Click here to view all past calculations</p>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {banner &&
        <div id="banner-error" className="sm:mx-auto my-6 sm:max-w-6xl p-4 border border-red-600 rounded-xl">
          <p className="text-red-600 text-lg text-center">{bannerMessage}</p>
        </div>
      }

      <CalculatorModal open={open} setOpen={setOpen} />

    </div>
  )

}