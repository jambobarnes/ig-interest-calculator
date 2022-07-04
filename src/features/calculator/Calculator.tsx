import CalculatorHistory from "./CalculatorHistory";
import CalculatorInputs from "./CalculatorInputs";
import CalculatorResults from "./CalculatorResults";

export default function Calculator() {

  return (
    <div className="columns-1 lg:columns-2 lg:gap-8 max-w-6xl mx-auto">

      <div className="mx-4 mb-6 lg:mx-0 bg-ig-blue overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6"><CalculatorInputs /></div>
      </div>

      <div>
        <div className="mx-4 lg:mx-0 border-2 border-ig-green overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <CalculatorResults />
          </div>
        </div>
        <div className="mx-4 lg:mx-0 overflow-hidden">
          <div className="py-5 sm:py-4">
            <CalculatorHistory />
          </div>
        </div>
      </div>

    </div>
  )

}