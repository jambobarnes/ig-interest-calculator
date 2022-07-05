import axios from 'axios';
import { mockserver } from '../../config';
import { GetCalculationRes, PostCalculationBody, PostCalculationRes } from '../../lib/types/calculations';

export const calculateInterest = async (values: PostCalculationBody) => {

  try {

    const data = await axios.post<PostCalculationRes>(`${mockserver}/calculations`, {
      value: values.value,
      interest: values.interest
    }, {
      headers: {
        'content-type': 'text/json'
      }
    })

    return data

  } catch (e) {

    console.error(e)

  }

}

export const getCalculations = async () => {

  try {

    const data = await axios.get<GetCalculationRes>(`${mockserver}/calculations`, {
      headers: {
        'content-type': 'text/json'
      }
    })

    return data

  } catch (e) {

    console.error(e)

  }

}