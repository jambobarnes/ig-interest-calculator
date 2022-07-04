import CalculatorHistoryFeed from "./CalculatorHistoryFeed";

export default function CalculatorHistory() {

  return (
    <div className="mt-4">
      <h2 className="text-lg text-center font-montserrat font-semibold mb-4">Your Last 4 Calculations</h2>
      <div className="">
        <CalculatorHistoryFeed />
      </div>
    </div>
  )
}
