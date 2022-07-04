export function Nav() {

  return (

    <header className="bg-ig-light">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between lg:border-none">
          <div className="flex items-center">
            <a href="https://incomegroup.co.uk" className="inline-flex items-center">
              <span className="sr-only">Income Group</span>
              <img
                className="h-10 w-auto"
                src="https://incomegroup.co.uk/wp-content/uploads/2021/04/IG-New-Logo-blue.png"
                alt="#Income Group Logo"
              />
            </a>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="https://incomegroup.co.uk/"
              className="inline-block bg-ig-green py-2 px-4 border border-transparent rounded-lg text-base font-medium text-white hover:bg-ig-blue font-raleway"
            >
              Find Out More
            </a>
          </div>
        </div>
      </nav>
    </header>

  )
}