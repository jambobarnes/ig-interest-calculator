
export default function CalculatorInputs() {
  return (
    <div className="p-2">
      <div className="mb-8">
        <h2 className="text-white text-xl text-center font-montserrat font-semibold mb-2">Interest Calculator</h2>
        <p className="text-white text-lg text-center font-light">Enter an amount (£) and an interest rate (%) in the fields below, then click &apos;Calculate Interest&apos; to see your result.</p>
      </div>

      <form>
        <div>
          <input
            type="text"
            id="value"
            name="value"
            className="rounded-xl p-4 w-full text-2xl text-center mb-6"
            placeholder="Enter an amount (£)"
          />
        </div>

        <div>
          <input
            type="text"
            id="interest"
            name="interest"
            className="rounded-xl p-4 w-full text-2xl text-center mb-6"
            placeholder="Enter interest rate (%)"
          />
        </div>

        <div className="">
            <button className="bg-ig-green py-4 rounded-xl w-full font-medium text-white text-lg hover:bg-ig-dark font-raleway">Calculate Interest</button>
        </div>
      </form>
    </div>
  )
}
