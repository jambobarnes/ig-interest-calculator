// Response data for GET Calculations
export type GetCalculationRes = {
  calculations: object[];
}

// Response data for POST Calculation
export type PostCalculationRes = {
  value: number;
  interest: number;
  interestRate: number;
  calculated: number;
}

// Request body for POST Calculation
export type PostCalculationBody = {
  value: number;
  interest: number;
}