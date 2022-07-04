// Generate dynamic post request and save response to local JSON for stubs
const { v4: uuidv4 } = require('uuid');
const editJsonFile = require("edit-json-file");
const file = editJsonFile("mocks/calculations/storedData.json", {
  autosave: true
});

const reqBody = JSON.parse(request.body)
const interestRate = reqBody.interest / 100

const res = {
    id: uuidv4(),
    value: reqBody.value,
    interest: reqBody.interest,
    interestRate,
    calculated: reqBody.value * interestRate
}

console.log(res)

file.append("calculations", res)
file.save()

module.exports = res;