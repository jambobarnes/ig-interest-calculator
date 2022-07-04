import axios from 'axios';
import { GetCalculationRes, PostCalculationBody, PostCalculationRes } from '../../lib/types/calculations';

export const calculateInterest = async (values: PostCalculationBody) => {

  try {

    const data = await axios.post<PostCalculationRes>('http://localhost:8080/calculations', {
      value: values.value,
      interest: values.interest
    }, {
      headers: {
        'content-type': 'text/json'
      }
    })

    console.log(data)

    return data

  } catch (e) {

    console.error(e)

  }

}

export const getCalculations = async () => {

  try {

    const data = await axios.get<GetCalculationRes>('http://localhost:8080/calculations', {
      headers: {
        'content-type': 'text/json'
      }
    })

    console.log(data)

    return data

  } catch (e) {

    console.error(e)

  }

}