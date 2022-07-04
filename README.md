## Interest Calculator

Interest Calculator is a simple web application which allows users to calculate an interest amount on a monetary value. The application is built using React (create-react-app) with Typescript. An example implementation of Redux is also included in the application.

The app requires a backend service to be deployed in a hosted environment. For a local environment, a backend service is provided using [mockserver](https://www.npmjs.com/package/mockserver). API response stubs are provided:
- calculate an interest amount from user provided amount and interest rate values; the response is stored to a local JSON file (see 'POST /calculation')
- return all previous calculations (from the local JSON file) (see 'GET /calculations')

The local JSON file comes with some existing calculation values. POST requests to the /calculations endpoint will supplement these starter values.

The application has been deployed and is available [interest-calculator.sharpcircle.co.uk](http://interest-calculator.sharpcircle.co.uk/). The deployed application is **not fully functional** as there is no remote backend service

## Features
- Frontend SPA allows users to create new calculations, view a state-based short history of their calculations and retrieve all past calculations
- Mocked backend service complete with example response stubs

## Dependencies 
- React.js (create-react-app) + Typescript
- Tailwind CSS
- Mockserver - mock backend service
- Redux (React Redux + Reduc Toolkit) - example state management
- Concurrently - to run React and Mockserver concurrently with a single command
- Headless UI - modal helper
- Axios - HTTP request to backend service
- UUID v4 - autogenerate UUID for calculation requests
- JSON Edit File - simple JSON file editing to add new request data to local JSON file
- React Testing Library - a single test is included in this application

Note: Mockserver is no longer actively maintained. [Camouflage](https://github.com/testinggospels/camouflage), [MSW](https://www.npmjs.com/package/msw) or [JSON Server](https://github.com/typicode/json-server) are recommended alternatives.

  
## Running
The application is self-contained and does not require any external services (DB, etc) to be deployed.

In a production deployment, this application will require an external backend service to handle requests and to store/retrieve data; however, production deployment is beyond the scope of this POC.

### Setup 
```console
git clone https://github.com/jambobarnes/interest-calculator
cd interest-calculator
npm i
```

### Development 
```console
npm run start

$ concurrently "react-scripts start" "mockserver -p 8080 -m mocks -D mockserver.enableCORSForAllResponses=true"

```

### Test
```console
npm run test
```

NOTE: Only one test is configured in this application, this is the CRA 'out of the box' test with an altered expect statement. A wider test suite has not been included due to time constraints for this POC.


### Building & Production 
```console
npm run build
```

## Environment Variables
### .env
No environment configuration is required.

## API Reference
### Making Requests
The backend service is available when running the application locally `console npm run start`. The API does not require any authentication in order to handle requests.



### GET /calculations
Returns all calculations persisted in the local data source (JSON file). This includes any calculations added to the data source during local runtime. You can reset the response by amending the contents of `console mocks/calculations/storedData.json`.

The response is returned as an array of `console calculations`

**200 OK: Example Response**
```console
  {
    "calculations": [
      {
        "id": "a2091e54-2de4-49a1-8adf-c3813eb81690",
        "value": 1345,
        "interest": 10,
        "interestRate": 0.1,
        "calculated": 134.5
      },
      {
        "id": "76e36822-3070-44df-b6a7-23687fbcf852",
        "value": 125000,
        "interest": 13.9,
        "interestRate": 0.139,
        "calculated": 17375
      }
    ]
  }
```

### POST /calculations
Stores and returns a calculation based on the provided request. New requests are added to the local data store (`console mocks/calculations/storedData.json`).

Requests require two properties to be included on the request body: `console interest` and `console value`. These represent the user provided values to be used in calculating the interest amount. Both values must be greater than 0 (this is currently enforced by the front end application but should be validated on the backend service when in production)

The backend service generates a random UUID for the request and calculates the `console interest` as a percentage of the `console value` provided during the request.

The calculation of the interest is straightforward. An operand `console interestRate` is first calculated (`console interest` / 100) to derive a rate as a decimal, and this is used to multply the `console value`. The calculated interest amount is returned on the response as `console calculated`.

**Example Request**
```console
  {
    "value": 1000,
    "interest" 10
  }
```

**200 OK: Example Response**
```console
  {
    "id": "76e36822-3070-44df-b6a7-23687fbcf852",
    "value": 1000,
    "interest": 10,
    "interestRate": 0.1,
    "calculated": 100
  }
```

### Error Responses
The mock server has not been configured to provide error responses. Backend errors will be logged to the console by mockserver. Frontend errors have been handled with default states, but no validation or other error handling/user error notification has been implemented for this POC.

### Note on CORS
When running the application locally, requests to the backend from a browser client will fail if the response is not returned with the correct headers due to browser-enforced CORS restrictions.

If you are experiencing issues with CORS or if you see OPTIONS requests being logged to the console, ensure that the following headers are included on the response stubs.

```console
Content-Type: application/json
Access-Control-Allow-Origin: *
```
A sample OPTIONS response is included with the stubs, but should not be required.