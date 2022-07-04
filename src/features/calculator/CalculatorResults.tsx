export default function CalculatorResults() {

  const resultSpans =  "font-medium text-ig-green"

  const result = true;
  const rate = 10
  const value = '10.00'
  const interestResult = '1.00'

  return (
    <div className="p-2">
      {!result ?
        <>
          <h2 className="text-xl text-center font-montserrat font-semibold mb-4">Enter your values to get your calculation</h2>
          <p className="text-lg text-center font-light">The result will be shown here when you click &apos;Calculate Interest&apos;</p>
        </>
        :
        <>
          <h2 className="text-xl text-center font-montserrat font-semibold mb-4">Your Result</h2>
          <p className="text-lg text-center font-montserrat mb-2"><span className={resultSpans}>{rate}%</span> interest of <span className={resultSpans}>£{value}</span> is:</p>
          <p className="text-4xl text-center font-semibold font-montserrat">£{interestResult}</p>
        </>
      }
    </div>
  )
}
